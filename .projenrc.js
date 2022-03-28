const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Christian Bonzelet",
  authorAddress: "christian.bonzelet@gmail.com",
  cdkVersion: "2.17.0",
  defaultReleaseBranch: "main",
  name: "@cremich/personalize",
  repositoryUrl:
    "https://github.com/christian.bonzelet/personalize-cdk-lib.git",
  eslintOptions: {
    prettier: true,
  },
  dependabot: true,
  // deps: [],                /* Runtime dependencies of this module. */
  devDeps: [
    "@commitlint/cli@16.2.1",
    "@commitlint/config-conventional@16.2.1",
    "cz-conventional-changelog@3.3.0",
    "husky@7.0.4",
    "lint-staged@12.3.5",
  ],
  scripts: {
    precommit: "lint-staged",
    prepush: "npm run test",
    prepare: "husky install",
  },
});
project.synth();
