# 👋 Welcome to the Amazon Personalize CDK Construct Library

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?)](https://github.com/prettier/prettier)
[![release](https://github.com/cremich/personalize-cdk-lib/actions/workflows/release.yml/badge.svg)](https://github.com/cremich/personalize-cdk-lib/actions/workflows/release.yml)

This Construct Library provides L2 constructs for resources to build your own recommendation engine based on Amazon Personalize using the AWS Cloud Development Kit (CDK).

## 🪄 About Amazon Personalize

As part of the AI Services, Amazon Personalize is a managed service to provide personalization and recommendations based on the same technology used at Amazon.com. Using Amazon Personalize you will get convenient APIs you can use to solve a specific personalization and recommendation business problem.

![How it works](https://docs.aws.amazon.com/personalize/latest/dg/images/domain-how-it-works.png)
Source: https://docs.aws.amazon.com/personalize/latest/dg/how-it-works.html

Amazon Personalize is a fully managed service. It generates highly relevant recommendations using deep learning techniques. It build custom and private ML models using your own data.

## 🚀 Getting started

This Construct Library requires the AWS CDK v2. Please follow the [installation ](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install) to install the AWS CDK.

### Installation

The Amazon Personalize CDK Library is available for Typescript based CDK applications and can be added as a dependency within your application using the following command:

```sh
npm install @cremich/personalize
```

## 🎉 Usage

### Getting started

In order to create your recommendation engine, you start by provisioning either a custom or domain specific dataset group.

```javascript
import { DatasetGroup } from "@cremich/personalize";
import { PersonalizeDomain } from "@cremich/personalize/lib/types";

new DatasetGroup(this, "custom", {
  name: "custom-dataset-group",
});

new DatasetGroup(this, "vod", {
  name: "vod-dataset-group",
  domain: PersonalizeDomain.VIDEO_ON_DEMAND,
});

new DatasetGroup(this, "ecommerce", {
  name: "ecommerce-dataset-group",
  domain: PersonalizeDomain.E_COMMERCE,
});
```
