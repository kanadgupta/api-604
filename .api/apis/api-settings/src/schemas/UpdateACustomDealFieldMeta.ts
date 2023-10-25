const UpdateACustomDealFieldMeta = {
  "body": {
    "type": "object",
    "properties": {
      "dealCustomFieldMetum": {
        "properties": {
          "fieldLabel": {
            "type": "string",
            "description": "Name of the field",
            "examples": [
              "New Title"
            ]
          },
          "fieldOptions": {
            "type": "array",
            "description": "Options for the field. Only necessary if field_type is dropdown, multiselect, radio, or checkbox.",
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
            "description": "ID of the custom field to update"
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
        "dealCustomFieldMetum": {
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
                "New Title"
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
                "2018-10-22 20:04:21"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "dealCustomFieldData": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/dealCustomFieldMeta/1/dealCustomFieldData"
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
export default UpdateACustomDealFieldMeta
