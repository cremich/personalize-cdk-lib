const { awscdk } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Christian Bonzelet",
  authorEmail: "christian.bonzelet@gmail.com",
  authorUrl: "https://www.linkedin.com/in/christian-bonzelet/",
  authorOrganization: false,
  bugsUrl: "https://github.com/cremich/personalize-cdk-lib/issues",
  cdkVersion: "2.24.1",
  codeCov: true,
  defaultReleaseBranch: "main",
  description: "Amazon Personalize Construct Library for CDK",
  devDeps: [
    "@commitlint/cli@17.0.0",
    "@commitlint/config-conventional@17.0.0",
    "cz-conventional-changelog@3.3.0",
    "husky@8.0.1",
    "lint-staged@12.4.1",
  ],
  eslintOptions: {
    prettier: true,
  },
  keywords: ["aws", "cdk", "personalize", "personalization"],
  name: "@cremich/personalize",
  npmAccess: NpmAccess.PUBLIC,
  prerelease: "alpha",
  prettier: true,
  repositoryUrl: "https://github.com/cremich/personalize-cdk-lib.git",
  scripts: {
    precommit: "lint-staged",
    prepush: "npm run test",
    prepare: "husky install",
  },
});
project.synth();
