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
});
