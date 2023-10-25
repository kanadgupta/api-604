const SavedResponses = {
  "body": {
    "type": "object",
    "properties": {
      "savedResponse": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of the saved response being created",
            "examples": [
              "Response Title"
            ]
          },
          "subject": {
            "type": "string",
            "description": "Subject of the saved response being created",
            "examples": [
              "Response Subject"
            ]
          },
          "body": {
            "type": "string",
            "description": "Body of the saved response being created",
            "examples": [
              "Response Body"
            ]
          }
        },
        "required": [
          "title",
          "subject",
          "body"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "savedResponse": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "Response title"
              ]
            },
            "subject": {
              "type": "string",
              "examples": [
                "Response subject"
              ]
            },
            "body": {
              "type": "string",
              "examples": [
                "Response body"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-11-16T02:50:54-06:00"
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
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "This field is required."
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "code": {
                "type": "string",
                "examples": [
                  "field_missing"
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "pointer": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/title"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default SavedResponses
