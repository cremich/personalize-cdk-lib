import {
  aws_lambda as lambda,
  aws_stepfunctions as sfn,
  aws_s3 as s3,
  aws_s3_notifications as s3n,
} from "aws-cdk-lib";
import * as statement from "cdk-iam-floyd";
import { Construct } from "constructs";
import { StartTrainingFunction } from "./start-training-function";
import stateMachineDefinition from "./training-statemachine.asl";

export interface IPersonalizeTrainingProps {
  trainingBucketProps?: s3.BucketProps;
  trainingStateMachineOptions?: sfn.StateMachineProps;
  startTrainingLambdaOptions?: lambda.FunctionOptions;
}

export class PersonalizeTraining extends Construct {
  constructor(scope: Construct, id: string, props: IPersonalizeTrainingProps) {
    super(scope, id);

    const trainingDataBucket = new s3.Bucket(this, "bucket", {
      ...props.trainingBucketProps,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    const trainingWorkflow = new sfn.StateMachine(
      this,
      "personalize-training",
      {
        ...props.trainingStateMachineOptions,
        definition: new sfn.Pass(this, "pass-state"),
      }
    );

    const cfnTrainingStateMachine = trainingWorkflow.node
      .defaultChild as sfn.CfnStateMachine;
    cfnTrainingStateMachine.definitionString = JSON.stringify(
      stateMachineDefinition
    );

    trainingWorkflow.addToRolePolicy(
      new statement.Personalize()
        .allow()
        .toCreateDatasetGroup()
        .toDescribeDatasetGroup()
    );

    const startTrainingLambda = new StartTrainingFunction(
      this,
      "start-training-lambda",
      {
        ...props.startTrainingLambdaOptions,
      }
    );

    trainingWorkflow.grantStartExecution(startTrainingLambda);
    trainingDataBucket.grantRead(startTrainingLambda);
    trainingDataBucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(startTrainingLambda),
      {
        prefix: "train/",
        suffix: ".json",
      }
    );
  }
}
