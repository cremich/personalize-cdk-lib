# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dataset <a name="Dataset" id="@cremich/personalize.Dataset"></a>

A new Amazon Personalize dataset.

#### Initializers <a name="Initializers" id="@cremich/personalize.Dataset.Initializer"></a>

```typescript
import { Dataset } from '@cremich/personalize'

new Dataset(scope: Construct, id: string, props: DatasetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.Dataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/personalize.Dataset.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/personalize.Dataset.Initializer.parameter.props">props</a></code> | <code><a href="#@cremich/personalize.DatasetProps">DatasetProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/personalize.Dataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/personalize.Dataset.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cremich/personalize.Dataset.Initializer.parameter.props"></a>

- *Type:* <a href="#@cremich/personalize.DatasetProps">DatasetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.Dataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cremich/personalize.Dataset.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@cremich/personalize.Dataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cremich/personalize.Dataset.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cremich/personalize.Dataset.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.Dataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cremich/personalize.Dataset.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cremich/personalize.Dataset.isConstruct"></a>

```typescript
import { Dataset } from '@cremich/personalize'

Dataset.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/personalize.Dataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@cremich/personalize.Dataset.isResource"></a>

```typescript
import { Dataset } from '@cremich/personalize'

Dataset.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cremich/personalize.Dataset.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.Dataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/personalize.Dataset.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/personalize.Dataset.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/personalize.Dataset.property.arn">arn</a></code> | <code>string</code> | The ARN of this dataset. |
| <code><a href="#@cremich/personalize.Dataset.property.name">name</a></code> | <code>string</code> | The name of this dataset. |
| <code><a href="#@cremich/personalize.Dataset.property.type">type</a></code> | <code><a href="#@cremich/personalize.DatasetType">DatasetType</a></code> | The domain of this dataset group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/personalize.Dataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/personalize.Dataset.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/personalize.Dataset.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cremich/personalize.Dataset.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of this dataset.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/personalize.Dataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this dataset.

---

##### `type`<sup>Required</sup> <a name="type" id="@cremich/personalize.Dataset.property.type"></a>

```typescript
public readonly type: DatasetType;
```

- *Type:* <a href="#@cremich/personalize.DatasetType">DatasetType</a>

The domain of this dataset group.

---


### DatasetBase <a name="DatasetBase" id="@cremich/personalize.DatasetBase"></a>

- *Implements:* <a href="#@cremich/personalize.IDataset">IDataset</a>

Reference to a new or existing Amazon Personalize dataset.

#### Initializers <a name="Initializers" id="@cremich/personalize.DatasetBase.Initializer"></a>

```typescript
import { DatasetBase } from '@cremich/personalize'

new DatasetBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/personalize.DatasetBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/personalize.DatasetBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/personalize.DatasetBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/personalize.DatasetBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cremich/personalize.DatasetBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cremich/personalize.DatasetBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@cremich/personalize.DatasetBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cremich/personalize.DatasetBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cremich/personalize.DatasetBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cremich/personalize.DatasetBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cremich/personalize.DatasetBase.isConstruct"></a>

```typescript
import { DatasetBase } from '@cremich/personalize'

DatasetBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/personalize.DatasetBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@cremich/personalize.DatasetBase.isResource"></a>

```typescript
import { DatasetBase } from '@cremich/personalize'

DatasetBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cremich/personalize.DatasetBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/personalize.DatasetBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/personalize.DatasetBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/personalize.DatasetBase.property.arn">arn</a></code> | <code>string</code> | The ARN of this dataset. |
| <code><a href="#@cremich/personalize.DatasetBase.property.name">name</a></code> | <code>string</code> | The name of this dataset. |
| <code><a href="#@cremich/personalize.DatasetBase.property.type">type</a></code> | <code><a href="#@cremich/personalize.DatasetType">DatasetType</a></code> | The type of this dataset. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/personalize.DatasetBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/personalize.DatasetBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/personalize.DatasetBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cremich/personalize.DatasetBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of this dataset.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/personalize.DatasetBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this dataset.

---

##### `type`<sup>Required</sup> <a name="type" id="@cremich/personalize.DatasetBase.property.type"></a>

```typescript
public readonly type: DatasetType;
```

- *Type:* <a href="#@cremich/personalize.DatasetType">DatasetType</a>

The type of this dataset.

---


### DatasetGroup <a name="DatasetGroup" id="@cremich/personalize.DatasetGroup"></a>

A new Amazon Personalize Dataset Group.

#### Initializers <a name="Initializers" id="@cremich/personalize.DatasetGroup.Initializer"></a>

```typescript
import { DatasetGroup } from '@cremich/personalize'

new DatasetGroup(scope: Construct, id: string, props: DatasetGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/personalize.DatasetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/personalize.DatasetGroup.Initializer.parameter.props">props</a></code> | <code><a href="#@cremich/personalize.DatasetGroupProps">DatasetGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/personalize.DatasetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/personalize.DatasetGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cremich/personalize.DatasetGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#@cremich/personalize.DatasetGroupProps">DatasetGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cremich/personalize.DatasetGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cremich/personalize.DatasetGroup.addInteractionsDataset">addInteractionsDataset</a></code> | Creates a new interaction dataset in this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroup.addItemsDataset">addItemsDataset</a></code> | Creates a new items dataset in this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroup.addUsersDataset">addUsersDataset</a></code> | Creates a new users dataset in this dataset group. |

---

##### `toString` <a name="toString" id="@cremich/personalize.DatasetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cremich/personalize.DatasetGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cremich/personalize.DatasetGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addInteractionsDataset` <a name="addInteractionsDataset" id="@cremich/personalize.DatasetGroup.addInteractionsDataset"></a>

```typescript
public addInteractionsDataset(schemaArn?: string): IDataset
```

Creates a new interaction dataset in this dataset group.

###### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cremich/personalize.DatasetGroup.addInteractionsDataset.parameter.schemaArn"></a>

- *Type:* string

the arn of a custom and external defined dataset schema.

---

##### `addItemsDataset` <a name="addItemsDataset" id="@cremich/personalize.DatasetGroup.addItemsDataset"></a>

```typescript
public addItemsDataset(schemaArn?: string): IDataset
```

Creates a new items dataset in this dataset group.

###### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cremich/personalize.DatasetGroup.addItemsDataset.parameter.schemaArn"></a>

- *Type:* string

the arn of a custom and external defined dataset schema.

---

##### `addUsersDataset` <a name="addUsersDataset" id="@cremich/personalize.DatasetGroup.addUsersDataset"></a>

```typescript
public addUsersDataset(schemaArn?: string): IDataset
```

Creates a new users dataset in this dataset group.

###### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cremich/personalize.DatasetGroup.addUsersDataset.parameter.schemaArn"></a>

- *Type:* string

the arn of a custom and external defined dataset schema.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cremich/personalize.DatasetGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cremich/personalize.DatasetGroup.isConstruct"></a>

```typescript
import { DatasetGroup } from '@cremich/personalize'

DatasetGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/personalize.DatasetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@cremich/personalize.DatasetGroup.isResource"></a>

```typescript
import { DatasetGroup } from '@cremich/personalize'

DatasetGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cremich/personalize.DatasetGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/personalize.DatasetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/personalize.DatasetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/personalize.DatasetGroup.property.arn">arn</a></code> | <code>string</code> | The ARN of this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroup.property.domain">domain</a></code> | <code><a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a></code> | The domain of this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroup.property.name">name</a></code> | <code>string</code> | The name of this dataset group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/personalize.DatasetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/personalize.DatasetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/personalize.DatasetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cremich/personalize.DatasetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of this dataset group.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cremich/personalize.DatasetGroup.property.domain"></a>

```typescript
public readonly domain: PersonalizeDomain;
```

- *Type:* <a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a>

The domain of this dataset group.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/personalize.DatasetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this dataset group.

---


### DatasetGroupBase <a name="DatasetGroupBase" id="@cremich/personalize.DatasetGroupBase"></a>

- *Implements:* <a href="#@cremich/personalize.IDatasetGroup">IDatasetGroup</a>

A new Amazon Personalize Dataset Group.

#### Initializers <a name="Initializers" id="@cremich/personalize.DatasetGroupBase.Initializer"></a>

```typescript
import { DatasetGroupBase } from '@cremich/personalize'

new DatasetGroupBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroupBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/personalize.DatasetGroupBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/personalize.DatasetGroupBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/personalize.DatasetGroupBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/personalize.DatasetGroupBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cremich/personalize.DatasetGroupBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroupBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.addInteractionsDataset">addInteractionsDataset</a></code> | Adds an interaction dataset to this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.addItemsDataset">addItemsDataset</a></code> | Adds an items dataset to this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.addUsersDataset">addUsersDataset</a></code> | Adds an users dataset to this dataset group. |

---

##### `toString` <a name="toString" id="@cremich/personalize.DatasetGroupBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cremich/personalize.DatasetGroupBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cremich/personalize.DatasetGroupBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addInteractionsDataset` <a name="addInteractionsDataset" id="@cremich/personalize.DatasetGroupBase.addInteractionsDataset"></a>

```typescript
public addInteractionsDataset(schemaArn?: string): IDataset
```

Adds an interaction dataset to this dataset group.

###### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cremich/personalize.DatasetGroupBase.addInteractionsDataset.parameter.schemaArn"></a>

- *Type:* string

the arn of a custom and external defined dataset schema.

---

##### `addItemsDataset` <a name="addItemsDataset" id="@cremich/personalize.DatasetGroupBase.addItemsDataset"></a>

```typescript
public addItemsDataset(schemaArn?: string): IDataset
```

Adds an items dataset to this dataset group.

###### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cremich/personalize.DatasetGroupBase.addItemsDataset.parameter.schemaArn"></a>

- *Type:* string

the arn of a custom and external defined dataset schema.

---

##### `addUsersDataset` <a name="addUsersDataset" id="@cremich/personalize.DatasetGroupBase.addUsersDataset"></a>

```typescript
public addUsersDataset(schemaArn?: string): IDataset
```

Adds an users dataset to this dataset group.

###### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cremich/personalize.DatasetGroupBase.addUsersDataset.parameter.schemaArn"></a>

- *Type:* string

the arn of a custom and external defined dataset schema.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroupBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cremich/personalize.DatasetGroupBase.isConstruct"></a>

```typescript
import { DatasetGroupBase } from '@cremich/personalize'

DatasetGroupBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/personalize.DatasetGroupBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@cremich/personalize.DatasetGroupBase.isResource"></a>

```typescript
import { DatasetGroupBase } from '@cremich/personalize'

DatasetGroupBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cremich/personalize.DatasetGroupBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroupBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.property.arn">arn</a></code> | <code>string</code> | The ARN of this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.property.domain">domain</a></code> | <code><a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a></code> | The domain of this dataset group. |
| <code><a href="#@cremich/personalize.DatasetGroupBase.property.name">name</a></code> | <code>string</code> | The name of this dataset group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/personalize.DatasetGroupBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/personalize.DatasetGroupBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/personalize.DatasetGroupBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cremich/personalize.DatasetGroupBase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of this dataset group.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cremich/personalize.DatasetGroupBase.property.domain"></a>

```typescript
public readonly domain: PersonalizeDomain;
```

- *Type:* <a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a>

The domain of this dataset group.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/personalize.DatasetGroupBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this dataset group.

---


## Structs <a name="Structs" id="Structs"></a>

### DatasetGroupProps <a name="DatasetGroupProps" id="@cremich/personalize.DatasetGroupProps"></a>

Properties for creating an Amazon Personalize Dataset Group.

#### Initializer <a name="Initializer" id="@cremich/personalize.DatasetGroupProps.Initializer"></a>

```typescript
import { DatasetGroupProps } from '@cremich/personalize'

const datasetGroupProps: DatasetGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetGroupProps.property.domain">domain</a></code> | <code><a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a></code> | The domain the dataset group is associated with. |
| <code><a href="#@cremich/personalize.DatasetGroupProps.property.name">name</a></code> | <code>string</code> | The name of the dataset group. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cremich/personalize.DatasetGroupProps.property.domain"></a>

```typescript
public readonly domain: PersonalizeDomain;
```

- *Type:* <a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a>

The domain the dataset group is associated with.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cremich/personalize.DatasetGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the dataset group.

---

### DatasetProps <a name="DatasetProps" id="@cremich/personalize.DatasetProps"></a>

Properties for creating an Amazon Personalize Dataset.

#### Initializer <a name="Initializer" id="@cremich/personalize.DatasetProps.Initializer"></a>

```typescript
import { DatasetProps } from '@cremich/personalize'

const datasetProps: DatasetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.DatasetProps.property.datasetGroup">datasetGroup</a></code> | <code><a href="#@cremich/personalize.IDatasetGroup">IDatasetGroup</a></code> | The dataset group this dataset is associated with. |
| <code><a href="#@cremich/personalize.DatasetProps.property.customSchemaArn">customSchemaArn</a></code> | <code>string</code> | The ARN of a already created custom defined dataset schema. |
| <code><a href="#@cremich/personalize.DatasetProps.property.type">type</a></code> | <code><a href="#@cremich/personalize.DatasetType">DatasetType</a></code> | The type of the dataset. |

---

##### `datasetGroup`<sup>Required</sup> <a name="datasetGroup" id="@cremich/personalize.DatasetProps.property.datasetGroup"></a>

```typescript
public readonly datasetGroup: IDatasetGroup;
```

- *Type:* <a href="#@cremich/personalize.IDatasetGroup">IDatasetGroup</a>

The dataset group this dataset is associated with.

---

##### `customSchemaArn`<sup>Optional</sup> <a name="customSchemaArn" id="@cremich/personalize.DatasetProps.property.customSchemaArn"></a>

```typescript
public readonly customSchemaArn: string;
```

- *Type:* string

The ARN of a already created custom defined dataset schema.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cremich/personalize.DatasetProps.property.type"></a>

```typescript
public readonly type: DatasetType;
```

- *Type:* <a href="#@cremich/personalize.DatasetType">DatasetType</a>

The type of the dataset.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IDataset <a name="IDataset" id="@cremich/personalize.IDataset"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cremich/personalize.Dataset">Dataset</a>, <a href="#@cremich/personalize.DatasetBase">DatasetBase</a>, <a href="#@cremich/personalize.IDataset">IDataset</a>

Represents an Amazon Personalize dataset.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.IDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/personalize.IDataset.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/personalize.IDataset.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/personalize.IDataset.property.arn">arn</a></code> | <code>string</code> | The ARN of this dataset. |
| <code><a href="#@cremich/personalize.IDataset.property.name">name</a></code> | <code>string</code> | The name of this dataset. |
| <code><a href="#@cremich/personalize.IDataset.property.type">type</a></code> | <code><a href="#@cremich/personalize.DatasetType">DatasetType</a></code> | The type of this dataset. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/personalize.IDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/personalize.IDataset.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/personalize.IDataset.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cremich/personalize.IDataset.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of this dataset.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/personalize.IDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this dataset.

---

##### `type`<sup>Required</sup> <a name="type" id="@cremich/personalize.IDataset.property.type"></a>

```typescript
public readonly type: DatasetType;
```

- *Type:* <a href="#@cremich/personalize.DatasetType">DatasetType</a>

The type of this dataset.

---

### IDatasetGroup <a name="IDatasetGroup" id="@cremich/personalize.IDatasetGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@cremich/personalize.DatasetGroup">DatasetGroup</a>, <a href="#@cremich/personalize.DatasetGroupBase">DatasetGroupBase</a>, <a href="#@cremich/personalize.IDatasetGroup">IDatasetGroup</a>

Represents an Amazon Personalize dataset group.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/personalize.IDatasetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/personalize.IDatasetGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/personalize.IDatasetGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/personalize.IDatasetGroup.property.arn">arn</a></code> | <code>string</code> | The ARN of this dataset group. |
| <code><a href="#@cremich/personalize.IDatasetGroup.property.domain">domain</a></code> | <code><a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a></code> | The domain of your dataset group. |
| <code><a href="#@cremich/personalize.IDatasetGroup.property.name">name</a></code> | <code>string</code> | The name of this dataset group. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/personalize.IDatasetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/personalize.IDatasetGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/personalize.IDatasetGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cremich/personalize.IDatasetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of this dataset group.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cremich/personalize.IDatasetGroup.property.domain"></a>

```typescript
public readonly domain: PersonalizeDomain;
```

- *Type:* <a href="#@cremich/personalize.PersonalizeDomain">PersonalizeDomain</a>
- *Default:* PersonalizeDomain.CUSTOM

The domain of your dataset group.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/personalize.IDatasetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this dataset group.

---

## Enums <a name="Enums" id="Enums"></a>

### DatasetType <a name="DatasetType" id="@cremich/personalize.DatasetType"></a>

The type of a dataset.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.DatasetType.INTERACTIONS">INTERACTIONS</a></code> | Interactions dataset. |
| <code><a href="#@cremich/personalize.DatasetType.USERS">USERS</a></code> | Users dataset. |
| <code><a href="#@cremich/personalize.DatasetType.ITEMS">ITEMS</a></code> | Items dataset type. |

---

##### `INTERACTIONS` <a name="INTERACTIONS" id="@cremich/personalize.DatasetType.INTERACTIONS"></a>

Interactions dataset.

---


##### `USERS` <a name="USERS" id="@cremich/personalize.DatasetType.USERS"></a>

Users dataset.

---


##### `ITEMS` <a name="ITEMS" id="@cremich/personalize.DatasetType.ITEMS"></a>

Items dataset type.

---


### PersonalizeDomain <a name="PersonalizeDomain" id="@cremich/personalize.PersonalizeDomain"></a>

The domain of a dataset group or schema.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/personalize.PersonalizeDomain.VIDEO_ON_DEMAND">VIDEO_ON_DEMAND</a></code> | Video on demand domain. |
| <code><a href="#@cremich/personalize.PersonalizeDomain.E_COMMERCE">E_COMMERCE</a></code> | E-Commerce domain. |
| <code><a href="#@cremich/personalize.PersonalizeDomain.CUSTOM">CUSTOM</a></code> | Custom domain. |

---

##### `VIDEO_ON_DEMAND` <a name="VIDEO_ON_DEMAND" id="@cremich/personalize.PersonalizeDomain.VIDEO_ON_DEMAND"></a>

Video on demand domain.

---


##### `E_COMMERCE` <a name="E_COMMERCE" id="@cremich/personalize.PersonalizeDomain.E_COMMERCE"></a>

E-Commerce domain.

---


##### `CUSTOM` <a name="CUSTOM" id="@cremich/personalize.PersonalizeDomain.CUSTOM"></a>

Custom domain.

---

