const RetrieveACustomFieldMeta = {
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
            "description": "ID of the field to retrieve"
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
                1
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
                "accountCustomFieldData": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/accountCustomFieldMeta/1/accountCustomFieldData"
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
export default RetrieveACustomFieldMeta
