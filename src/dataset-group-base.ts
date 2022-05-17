import { IResource, Resource } from "aws-cdk-lib";
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
}
