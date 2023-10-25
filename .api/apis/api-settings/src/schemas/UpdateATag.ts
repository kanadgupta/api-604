const UpdateATag = {
  "body": {
    "type": "object",
    "properties": {
      "tag": {
        "description": "tag.description",
        "properties": {
          "tag": {
            "type": "string",
            "description": "Name of the tag being updated"
          },
          "tagType": {
            "type": "string",
            "description": "Tag-type of the tag being updated. Possible Values: template, contact",
            "examples": [
              "contact"
            ]
          },
          "description": {
            "type": "string",
            "description": "Description of the tag being updated",
            "examples": [
              "Description"
            ]
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
            "description": "ID of the tag to update"
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
        "tag": {
          "type": "object",
          "properties": {
            "tagType": {
              "type": "string",
              "examples": [
                "contact"
              ]
            },
            "tag": {
              "type": "string",
              "examples": [
                "My Tag"
              ]
            },
            "description": {
              "type": "string",
              "examples": [
                "Description"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-08-17T13:41:16-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contactGoalTags": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/tags/2/contactGoalTags"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "2"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateATag
