const UpdateASavedResponse = {
  "body": {
    "type": "object",
    "properties": {
      "savedResponse": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of the saved response being updated",
            "examples": [
              "Response title"
            ]
          },
          "subject": {
            "type": "string",
            "description": "Subject of the saved response being updated",
            "examples": [
              "Response subject"
            ]
          },
          "body": {
            "type": "string",
            "description": "Body of the saved response being updated",
            "examples": [
              "Response body"
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
            "description": "ID of the saved response to update"
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
        "savedResponse": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "New Response Title"
              ]
            },
            "subject": {
              "type": "string",
              "examples": [
                "New Response Subject"
              ]
            },
            "body": {
              "type": "string",
              "examples": [
                "New Response Body"
              ]
            },
            "ldate": {},
            "last_sent_user_id": {},
            "cdate": {
              "type": "string",
              "examples": [
                "2018-11-16T02:50:54-06:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-11-16T11:19:30-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/savedResponses/1/user"
                  ]
                },
                "savedResponseCategorySavedResponse": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/savedResponses/1/savedResponseCategorySavedResponse"
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
    "422": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for SavedResponse with id 0"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateASavedResponse
