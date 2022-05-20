import { IResource, Resource } from "aws-cdk-lib";
import { IDataset } from "./dataset-base";
import { PersonalizeDomain } from "./types";

/**
 * Represents an Amazon Personalize dataset group
 */
export interface IDatasetGroup extends IResource {
  /**
   * The ARN of this dataset group
   * @attribute
   */
  readonly arn: string;

  /**
   * The name of this dataset group
   * @attribute
   */
  readonly name: string;

  /**
   * The domain of your dataset group.
   * @attribute
   * @default PersonalizeDomain.CUSTOM
   */
  readonly domain: PersonalizeDomain;
}

/**
 * A new Amazon Personalize Dataset Group
 */
export abstract class DatasetGroupBase
  extends Resource
  implements IDatasetGroup
{
  /**
   * The ARN of this dataset group
   */
  public abstract readonly arn: string;

  /**
   * The name of this dataset group
   */
  public abstract readonly name: string;

  /**
   * The domain of this dataset group
   */
  public abstract readonly domain: PersonalizeDomain;

  /**
   * Adds an interaction dataset to this dataset group
   */
  public abstract addInteractionsDataset(): IDataset;

  /**
   * Adds an items dataset to this dataset group
   */
  public abstract addItemsDataset(): IDataset;

  /**
   * Adds an users dataset to this dataset group
   */
  public abstract addUsersDataset(): IDataset;
}
