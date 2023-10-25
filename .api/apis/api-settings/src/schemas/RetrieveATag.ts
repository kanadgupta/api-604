const RetrieveATag = {
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
            "description": "ID of the tag to retrieve"
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
                "2018-10-04T14:55:13-05:00"
              ]
            },
            "subscriber_count": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contactGoalTags": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/tags/1/contactGoalTags"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Tag with id 1"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveATag
