const CreateACustomFieldValue = {
  "body": {
    "type": "object",
    "properties": {
      "accountCustomFieldDatum": {
        "properties": {
          "customerAccountId": {
            "type": "integer",
            "description": "The ID of the account this field value relates to",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "customFieldId": {
            "type": "integer",
            "description": "The ID of the custom field metum this field value relates to",
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "fieldValue": {
            "type": "string",
            "description": "Values for the field. (For `currency` field only, this needs to be in cents: eg, 10050 = 100.5)",
            "examples": [
              "test title"
            ]
          },
          "fieldCurrency": {
            "type": "string",
            "description": "Currency code for the money value",
            "default": "Default Currency for Field"
          }
        },
        "required": [
          "customerAccountId",
          "customFieldId",
          "fieldValue"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "accountCustomFieldDatum": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "5"
              ]
            },
            "accountCustomFieldMetumId": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "accountId": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "customFieldId": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2018-11-06 02:27:05"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2018-11-06 02:27:05"
              ]
            },
            "fieldValue": {
              "type": "string",
              "examples": [
                "test title"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "account": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/accountCustomFieldData/5/account"
                  ]
                },
                "accountCustomFieldMetum": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/accountCustomFieldData/5/accountCustomFieldMetum"
                  ]
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateACustomFieldValue
