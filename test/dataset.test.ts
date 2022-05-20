import { Stack, assertions } from "aws-cdk-lib";
import { Dataset } from "../src/dataset";
import { DatasetType } from "../src/dataset-base";
import { DatasetGroup } from "../src/dataset-group";
import schemaDefinitions from "../src/schema-definitions";
import { PersonalizeDomain } from "../src/types";

let stack: Stack;

describe("Dataset", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Default dataset matches interaction dataset", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "interactions", {
      datasetGroup: datasetgroup,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Interactions",
      Name: "interactions",
    });
  });

  test("Item dataset is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.ITEMS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Items",
      Name: "items",
    });
  });

  test("Users dataset is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.USERS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Users",
      Name: "users",
    });
  });

  test("Interactions dataset is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.INTERACTIONS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Interactions",
      Name: "interactions",
    });
  });

  test("Default interactions dataset schema for custom dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.INTERACTIONS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "custom-Interactions-schema",
      Schema: JSON.stringify(schemaDefinitions.CUSTOM.Interactions),
      Domain: assertions.Match.absent(),
    });
  });

  test("Default items dataset schema for custom dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.ITEMS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "custom-Items-schema",
      Schema: JSON.stringify(schemaDefinitions.CUSTOM.Items),
      Domain: assertions.Match.absent(),
    });
  });

  test("Default users dataset schema for custom dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "custom",
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.USERS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "custom-Users-schema",
      Schema: JSON.stringify(schemaDefinitions.CUSTOM.Users),
      Domain: assertions.Match.absent(),
    });
  });

  test("Default interactions dataset schema for VOD dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "vod",
      domain: PersonalizeDomain.VIDEO_ON_DEMAND,
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.INTERACTIONS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "vod-Interactions-schema",
      Schema: JSON.stringify(schemaDefinitions.VIDEO_ON_DEMAND.Interactions),
      Domain: "VIDEO_ON_DEMAND",
    });
  });

  test("Default items dataset schema for VOD dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "vod",
      domain: PersonalizeDomain.VIDEO_ON_DEMAND,
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.ITEMS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "vod-Items-schema",
      Schema: JSON.stringify(schemaDefinitions.VIDEO_ON_DEMAND.Items),
      Domain: "VIDEO_ON_DEMAND",
    });
  });

  test("Default users dataset schema for VOD dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "vod",
      domain: PersonalizeDomain.VIDEO_ON_DEMAND,
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.USERS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "vod-Users-schema",
      Schema: JSON.stringify(schemaDefinitions.VIDEO_ON_DEMAND.Users),
      Domain: "VIDEO_ON_DEMAND",
    });
  });

  test("Default interactions dataset schema for E_COMMERCE dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "ecom",
      domain: PersonalizeDomain.E_COMMERCE,
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.INTERACTIONS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "ecom-Interactions-schema",
      Schema: JSON.stringify(schemaDefinitions.ECOMMERCE.Interactions),
      Domain: "ECOMMERCE",
    });
  });

  test("Default items dataset schema for E_COMMERCE dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "ecomm",
      domain: PersonalizeDomain.E_COMMERCE,
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.ITEMS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "ecomm-Items-schema",
      Schema: JSON.stringify(schemaDefinitions.ECOMMERCE.Items),
      Domain: "ECOMMERCE",
    });
  });

  test("Default users dataset schema for E_COMMERCE dataset group is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "ecomm",
      domain: PersonalizeDomain.E_COMMERCE,
    });

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.USERS,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Schema", {
      Name: "ecomm-Users-schema",
      Schema: JSON.stringify(schemaDefinitions.ECOMMERCE.Users),
      Domain: "ECOMMERCE",
    });
  });

  test("Custom defined schema can be referenced in new dataset", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "dsg",
    });

    const schemaArn =
      "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema";

    new Dataset(stack, "dataset", {
      datasetGroup: datasetgroup,
      type: DatasetType.INTERACTIONS,
      customSchemaArn: schemaArn,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      SchemaArn: schemaArn,
    });
  });
});
