const CreateACustomFieldRelationshipToLists = {
  "body": {
    "type": "object",
    "properties": {
      "fieldRel": {
        "type": "object",
        "properties": {
          "field": {
            "type": "integer",
            "description": "ID of the field to create the relationship",
            "default": 8,
            "format": "int32",
            "examples": [
              8
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "relid": {
            "type": "integer",
            "description": "ID of the list to create the relationship (0 makes the field available on all lists)",
            "default": 2,
            "format": "int32",
            "examples": [
              2
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        }
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "fieldRel": {
          "type": "object",
          "properties": {
            "relid": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "field": {
              "type": "integer",
              "default": 0,
              "examples": [
                8
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2019-02-01T08:39:25-06:00"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
            },
            "id": {
              "type": "string",
              "examples": [
                "19"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Forbidden"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateACustomFieldRelationshipToLists
