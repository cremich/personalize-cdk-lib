import { Stack, assertions } from "aws-cdk-lib";
import { DatasetGroup } from "../src/dataset-group";
import { PersonalizeDomain } from "../src/types";
let stack: Stack;

describe("Dataset Group", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Custom named Datasetgroup is created", () => {
    new DatasetGroup(stack, "custom-dataset-group", {
      name: "custom",
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::DatasetGroup", {
      Name: "custom",
      Domain: assertions.Match.absent(),
    });
  });

  test("Domain is not set in stack if defined as CUSTOM", () => {
    new DatasetGroup(stack, "custom-dataset-group", {
      name: "custom",
      domain: PersonalizeDomain.CUSTOM,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::DatasetGroup", {
      Name: "custom",
      Domain: assertions.Match.absent(),
    });
  });

  test("VIDEO_ON_DEMAND dataset group is created", () => {
    new DatasetGroup(stack, "training", {
      name: "movielens",
      domain: PersonalizeDomain.VIDEO_ON_DEMAND,
    });
    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::DatasetGroup", {
      Name: "movielens",
      Domain: "VIDEO_ON_DEMAND",
    });
  });

  test("E_COMMERCE dataset group is created", () => {
    new DatasetGroup(stack, "training", {
      name: "onlineshop",
      domain: PersonalizeDomain.E_COMMERCE,
    });
    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::DatasetGroup", {
      Name: "onlineshop",
      Domain: "ECOMMERCE",
    });
  });

  test("ARN property is set", () => {
    const datasetgroup = new DatasetGroup(stack, "custom-dataset-group", {
      name: "custom",
    });

    expect(datasetgroup.arn).not.toBeNull();
  });

  test("Dataset group name property is set", () => {
    const datasetgroup = new DatasetGroup(stack, "custom-dataset-group", {
      name: "custom",
    });

    expect(datasetgroup.name).toBe("custom");
  });

  test("Dataset group defaults to custom domain", () => {
    const datasetgroup = new DatasetGroup(stack, "custom-dataset-group", {
      name: "custom",
    });

    expect(datasetgroup.domain).toBe(PersonalizeDomain.CUSTOM);
  });

  test("Explicit dataset group domain is set", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "vod",
      domain: PersonalizeDomain.VIDEO_ON_DEMAND,
    });

    expect(datasetgroup.domain).toBe(PersonalizeDomain.VIDEO_ON_DEMAND);
  });

  test("Interaction dataset is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "dsg",
    });
    datasetgroup.addInteractionsDataset();

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Interactions",
      Name: "interactions",
    });
  });

  test("Items dataset is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "dsg",
    });
    datasetgroup.addItemsDataset();

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
      name: "dsg",
    });
    datasetgroup.addUsersDataset();

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Users",
      Name: "users",
    });
  });

  test("Users dataset with external schema is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "dsg",
    });
    const schemaArn =
      "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema";

    datasetgroup.addUsersDataset(schemaArn);

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Users",
      Name: "users",
      SchemaArn:
        "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema",
    });
  });

  test("Items dataset with external schema is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "dsg",
    });
    const schemaArn =
      "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema";

    datasetgroup.addItemsDataset(schemaArn);

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Items",
      Name: "items",
      SchemaArn:
        "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema",
    });
  });

  test("Interactions dataset with external schema is created", () => {
    const datasetgroup = new DatasetGroup(stack, "dataset-group", {
      name: "dsg",
    });
    const schemaArn =
      "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema";

    datasetgroup.addInteractionsDataset(schemaArn);

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Personalize::Dataset", {
      DatasetGroupArn: {
        "Fn::GetAtt": ["datasetgroup4EB6CA0F", "DatasetGroupArn"],
      },
      DatasetType: "Interactions",
      Name: "interactions",
      SchemaArn:
        "arn:aws:personalize:eu-central-1:1234567890:schema/my-external-schema",
    });
  });
});
