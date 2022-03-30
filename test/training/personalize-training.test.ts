import { Stack, assertions } from "aws-cdk-lib";
import { PersonalizeTraining } from "../../src/training/personalize-training";
import trainingWorkflow from "../../src/training/training-statemachine.asl";

let stack: Stack;

describe("Personalize training workflow", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Training statemachine is created", () => {
    new PersonalizeTraining(stack, "training", {});

    const assert = assertions.Template.fromStack(stack);
    assert.resourceCountIs("AWS::StepFunctions::StateMachine", 1);
  });

  test("Training workflow matches statemachine definition", () => {
    new PersonalizeTraining(stack, "training", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::StepFunctions::StateMachine", {
      DefinitionString: JSON.stringify(trainingWorkflow),
    });
  });

  test("Public access for training data is blocked", () => {
    new PersonalizeTraining(stack, "training", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test("AWS managed encryption for training data is activated by default", () => {
    new PersonalizeTraining(stack, "training", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::Bucket", {
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
    });
  });

  test("Training data versioning is activated by default", () => {
    new PersonalizeTraining(stack, "training", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::Bucket", {
      VersioningConfiguration: {
        Status: "Enabled",
      },
    });
  });

  // test("S3 notifications is activated to trigger statemachine", () => {
  //   new PersonalizeTraining(stack, "training", {});

  //   const assert = assertions.Template.fromStack(stack);
  //   assert.hasResourceProperties("Custom::S3BucketNotifications", {
  //     BucketName: {
  //       Ref: "trainingbucketA2362D02",
  //     },
  //     NotificationConfiguration: {
  //       LambdaFunctionConfigurations: [
  //         {
  //           Events: ["s3:ObjectCreated:*"],
  //           Filter: {
  //             Key: {
  //               FilterRules: [
  //                 {
  //                   Name: "suffix",
  //                   Value: ".json",
  //                 },
  //                 {
  //                   Name: "prefix",
  //                   Value: "train/",
  //                 },
  //               ],
  //             },
  //           },
  //           LambdaFunctionArn: {
  //             "Fn::GetAtt": ["trainingstarttrainingworkflowF6724B5E", "Arn"],
  //           },
  //         },
  //       ],
  //     },
  //   });
  // });
});
