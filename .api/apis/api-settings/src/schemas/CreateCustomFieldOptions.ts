const CreateCustomFieldOptions = {
  "body": {
    "type": "object",
    "required": [
      "field",
      "value"
    ],
    "properties": {
      "field": {
        "type": "integer",
        "description": "ID of the custom field to add options to",
        "format": "int32",
        "minimum": -2147483648,
        "maximum": 2147483647
      },
      "label": {
        "type": "string",
        "description": "Name of the option"
      },
      "value": {
        "type": "string",
        "description": "Value of the option"
      },
      "orderid": {
        "type": "integer",
        "description": "Order for displaying the custom field option",
        "format": "int32",
        "minimum": -2147483648,
        "maximum": 2147483647
      },
      "isdefault": {
        "type": "boolean",
        "description": "Whether or not this option is the default value"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "fieldOptions": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "value": {
                "type": "string",
                "examples": [
                  "Option 1"
                ]
              },
              "field": {
                "type": "integer",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2019-01-02T10:38:33-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2019-01-02T10:38:33-05:00"
                ]
              },
              "label": {
                "type": "string",
                "examples": [
                  "Option 1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "field": {
                    "type": "string",
                    "examples": [
                      "https://account.api-us1.com/api/3/fieldOptions/45/field"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "5"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "string",
          "examples": [
            "Bulk operation failed. Request must contain an array of fieldOption objects."
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateCustomFieldOptions
