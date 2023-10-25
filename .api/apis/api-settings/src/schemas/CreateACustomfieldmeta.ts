const CreateACustomfieldmeta = {
  "body": {
    "type": "object",
    "properties": {
      "accountCustomFieldMetum": {
        "properties": {
          "fieldLabel": {
            "type": "string",
            "description": "Name of the field",
            "examples": [
              "sample text field2"
            ]
          },
          "fieldType": {
            "type": "string",
            "description": "Type of field. Possible values are: `text`, `textarea`, `date`, `datetime`, `dropdown`, `multiselect`, `radio`, `checkbox`, `hidden`, `currency`, or `number`.",
            "examples": [
              "text"
            ]
          },
          "fieldOptions": {
            "type": "array",
            "description": "Options for the field. Only necessary if `field_type` is `dropdown`, `multiselect`, `radio`, or `checkbox`.",
            "items": {
              "type": "string"
            }
          },
          "fieldDefault": {
            "type": "string",
            "description": "Default value of the field",
            "examples": [
              "Default Text"
            ]
          },
          "fieldDefaultCurrency": {
            "type": "string",
            "description": "The 3-letter currency code of the default currency for the field. Only necessary if `field_type` is `currency`."
          },
          "isFormVisible": {
            "type": "boolean",
            "description": "Whether or not the field is visible on forms",
            "examples": [
              1
            ]
          },
          "displayOrder": {
            "type": "integer",
            "description": "Order for displaying the field on Manage Fields page and deal profiles",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "isRequired": {
            "type": "integer",
            "description": "0 (Not required) or 1 (Required)",
            "default": 0,
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "fieldLabel",
          "fieldType"
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
        "accountCustomFieldMetum": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "fieldLabel": {
              "type": "string",
              "examples": [
                "title"
              ]
            },
            "fieldType": {
              "type": "string",
              "examples": [
                "text"
              ]
            },
            "fieldOptions": {},
            "fieldDefault": {
              "type": "string",
              "examples": [
                "Default Text"
              ]
            },
            "isFormVisible": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "isRequired": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "displayOrder": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2018-10-22 19:57:37"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2018-10-22 19:57:37"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "accountCustomFieldData": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/3/accountCustomFieldMeta/1/accountCustomFieldData"
                  ]
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateACustomfieldmeta
