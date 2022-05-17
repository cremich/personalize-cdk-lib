import { aws_personalize as personalize } from "aws-cdk-lib";
import { Construct } from "constructs";
import { DatasetGroupBase } from "./dataset-group-base";
import { PersonalizeDomain } from "./types";

/**
 * Properties for creating an Amazon Personalize Dataset Group
 */
export interface DatasetGroupProps {
  /**
   * The domain the dataset group is associated with
   */
  readonly domain?: PersonalizeDomain;
  /**
   * The name of the dataset group
   */
  readonly name?: string;
}

/**
 * A new Amazon Personalize Dataset Group
 */
export class DatasetGroup extends DatasetGroupBase {
  /**
   * The ARN of this dataset group
   */
  public readonly arn: string;

  /**
   * The name of this dataset group
   */
  public readonly name: string;

  /**
   * The domain of this dataset group
   */
  public readonly domain: PersonalizeDomain;

  constructor(scope: Construct, id: string, props: DatasetGroupProps) {
    super(scope, id, {
      physicalName: props.name,
    });

    const datasetGroup = new personalize.CfnDatasetGroup(this, "Resource", {
      name: this.physicalName,
      domain: props.domain,
    });

    this.arn = datasetGroup.attrDatasetGroupArn;
    this.name = datasetGroup.name;
    this.domain = props.domain ? props.domain : PersonalizeDomain.CUSTOM;
  }
}
