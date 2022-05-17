# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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


## Protocols <a name="Protocols" id="Protocols"></a>

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

