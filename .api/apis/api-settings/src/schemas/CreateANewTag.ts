const CreateANewTag = {
  "body": {
    "type": "object",
    "properties": {
      "tag": {
        "description": "tag.description",
        "properties": {
          "tag": {
            "type": "string",
            "description": "Name of the new tag"
          },
          "tagType": {
            "type": "string",
            "description": "Tag-type of the new tag. Possible Values: template, contact",
            "examples": [
              "contact"
            ]
          },
          "description": {
            "type": "string",
            "description": "Description of the new tag",
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
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "tag": {
          "type": "object",
          "properties": {
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
            "tagType": {
              "type": "string",
              "examples": [
                "contact"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-29T19:21:25-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contactGoalTags": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/tags/16/contactGoalTags"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "16"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateANewTag
