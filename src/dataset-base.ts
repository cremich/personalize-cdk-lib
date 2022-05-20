import { IResource, Resource } from "aws-cdk-lib";

/**
 * The type of a dataset
 */
export enum DatasetType {
  /**
   * Interactions dataset
   */
  INTERACTIONS = "Interactions",

  /**
   * Users dataset
   */
  USERS = "Users",

  /**
   * Items dataset type
   */
  ITEMS = "Items",
}

/**
 * Represents an Amazon Personalize dataset
 */
export interface IDataset extends IResource {
  /**
   * The ARN of this dataset
   * @attribute
   */
  readonly arn: string;

  /**
   * The name of this dataset
   * @attribute
   */
  readonly name: string;

  /**
   * The type of this dataset
   * @attribute
   */
  readonly type: DatasetType;
}

/**
 * Reference to a new or existing Amazon Personalize dataset
 */
export abstract class DatasetBase extends Resource implements IDataset {
  /**
   * The ARN of this dataset
   */
  public abstract readonly arn: string;

  /**
   * The name of this dataset
   */
  public abstract readonly name: string;

  /**
   * The type of this dataset
   */
  public abstract readonly type: DatasetType;
}
