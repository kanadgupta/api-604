const UpdateACustomFieldValue = {
  "body": {
    "type": "object",
    "properties": {
      "accountCustomFieldDatum": {
        "properties": {
          "fieldValue": {
            "type": "string",
            "description": "Values for text",
            "examples": [
              "New title"
            ]
          },
          "fieldCurrency": {
            "type": "string",
            "description": "Currency code for the `currency` value",
            "default": "Default Currency for Field"
          }
        },
        "required": [],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the custom fields value to update"
          }
        },
        "required": [
          "id"
        ]
      }
    ]
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
                "1"
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
                5
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2018-10-29 20:40:38"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2018-11-06 02:21:36"
              ]
            },
            "fieldValue": {
              "type": "string",
              "examples": [
                "New title"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "account": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/accountCustomFieldData/1/account"
                  ]
                },
                "accountCustomFieldMetum": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/accountCustomFieldData/1/accountCustomFieldMetum"
                  ]
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  404
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Not Found"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateACustomFieldValue
