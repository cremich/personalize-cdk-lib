import { aws_personalize as personalize } from "aws-cdk-lib";
import { Construct } from "constructs";
import { DatasetBase, DatasetType } from "./dataset-base";
import { IDatasetGroup } from "./dataset-group-base";
import schemaDefinitions from "./schema-definitions";

/**
 * Properties for creating an Amazon Personalize Dataset
 */
export interface DatasetProps {
  /**
   * The type of the dataset
   */
  readonly type?: DatasetType;

  /**
   * The dataset group this dataset is associated with
   */
  readonly datasetGroup: IDatasetGroup;
}

/**
 * A new Amazon Personalize dataset
 */
export class Dataset extends DatasetBase {
  /**
   * The ARN of this dataset
   */
  public readonly arn: string;

  /**
   * The name of this dataset
   */
  public readonly name: string;

  /**
   * The domain of this dataset group
   */
  public readonly type: DatasetType;

  constructor(scope: Construct, id: string, props: DatasetProps) {
    const type = props.type ? props.type : DatasetType.INTERACTIONS;
    const name = type.toLowerCase();

    super(scope, id, {
      physicalName: name,
    });

    const schema = this.createDefaultSchema(type, props.datasetGroup);
    const dataset = new personalize.CfnDataset(this, "Resource", {
      datasetGroupArn: props.datasetGroup.arn,
      datasetType: type,
      name: name,
      schemaArn: schema.attrSchemaArn,
    });

    this.arn = dataset.attrDatasetArn;
    this.name = dataset.name;
    this.type = type;
  }

  /**
   * Creates a default schema depending on the domain and dataset type combination.
   * The default schemas are the ones described in the Amazon Personalize documentation
   * @see https://docs.aws.amazon.com/personalize/latest/dg/how-it-works-dataset-schema.html
   *
   * @param type the type of the dataset the default schema will be associated with
   * @param datasetGroup the dataset group the dataset is connected to
   * @returns a new Amazon Personalize Schema
   */
  private createDefaultSchema(
    type: DatasetType,
    datasetGroup: IDatasetGroup
  ): personalize.CfnSchema {
    const targetDefinition = schemaDefinitions[datasetGroup.domain][type];
    return new personalize.CfnSchema(this, "schema", {
      name: `${datasetGroup.name}-${type}-schema`,
      schema: JSON.stringify(targetDefinition),
      domain: datasetGroup.domain ? datasetGroup.domain : undefined,
    });
  }
}
