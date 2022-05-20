export default {
  VIDEO_ON_DEMAND: {
    Interactions: {
      type: "record",
      name: "Interactions",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "USER_ID",
          type: "string",
        },
        {
          name: "ITEM_ID",
          type: "string",
        },
        {
          name: "EVENT_TYPE",
          type: "string",
        },
        {
          name: "TIMESTAMP",
          type: "long",
        },
      ],
      version: "1.0",
    },
    Users: {
      type: "record",
      name: "Users",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "USER_ID",
          type: "string",
        },
        {
          name: "SUBSCRIPTION_MODEL",
          type: "string",
          categorical: true,
        },
      ],
      version: "1.0",
    },
    Items: {
      type: "record",
      name: "Items",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "ITEM_ID",
          type: "string",
        },
        {
          name: "GENRES",
          type: "string",
          categorical: true,
        },
        {
          name: "CREATION_TIMESTAMP",
          type: "long",
        },
      ],
      version: "1.0",
    },
  },
  ECOMMERCE: {
    Interactions: {
      type: "record",
      name: "Interactions",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "USER_ID",
          type: "string",
        },
        {
          name: "ITEM_ID",
          type: "string",
        },
        {
          name: "EVENT_TYPE",
          type: "string",
        },
        {
          name: "TIMESTAMP",
          type: "long",
        },
      ],
      version: "1.0",
    },
    Users: {
      type: "record",
      name: "Users",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "USER_ID",
          type: "string",
        },
        {
          name: "MEMBERSHIP_STATUS",
          type: "string",
          categorical: true,
        },
      ],
      version: "1.0",
    },
    Items: {
      type: "record",
      name: "Items",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "ITEM_ID",
          type: "string",
        },
        {
          name: "PRICE",
          type: "float",
        },
        {
          name: "CATEGORY_L1",
          type: ["string"],
          categorical: true,
        },
      ],
      version: "1.0",
    },
  },
  CUSTOM: {
    Interactions: {
      type: "record",
      name: "Interactions",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "USER_ID",
          type: "string",
        },
        {
          name: "ITEM_ID",
          type: "string",
        },
        {
          name: "TIMESTAMP",
          type: "long",
        },
      ],
      version: "1.0",
    },
    Users: {
      type: "record",
      name: "Users",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "USER_ID",
          type: "string",
        },
        {
          name: "AGE",
          type: ["int", "null"],
        },
        {
          name: "GENDER",
          type: ["string", "null"],
          categorical: true,
        },
      ],
      version: "1.0",
    },
    Items: {
      type: "record",
      name: "Items",
      namespace: "com.amazonaws.personalize.schema",
      fields: [
        {
          name: "ITEM_ID",
          type: "string",
        },
        {
          name: "GENRES",
          type: ["null", "string"],
          categorical: true,
        },
        {
          name: "CREATION_TIMESTAMP",
          type: "long",
        },
        {
          name: "DESCRIPTION",
          type: ["null", "string"],
          textual: true,
        },
      ],
      version: "1.0",
    },
  },
};
