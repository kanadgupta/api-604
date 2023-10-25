const CreateATaskOutcome1 = {
  "body": {
    "type": "object",
    "required": [
      "title",
      "sentiment"
    ],
    "properties": {
      "title": {
        "type": "string",
        "description": "Title of the outcome"
      },
      "sentiment": {
        "type": "string",
        "description": "Sentiment of the outcome",
        "enum": [
          "Positive",
          "Neutral",
          "Negative"
        ]
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "taskOutcome": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "Interested"
              ]
            },
            "sentiment": {
              "type": "string",
              "examples": [
                "POSITIVE"
              ]
            },
            "created_by": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "disabled": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "tasktypeOutcomeRels": {
                  "type": "string",
                  "examples": [
                    "https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels"
                  ]
                },
                "dealTasks": {
                  "type": "string",
                  "examples": [
                    "https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks"
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
    "400": {
      "type": "object",
      "properties": {},
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
                  "A task outcome with the same title already exists."
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
                  "field_invalid"
                ]
              },
              "error": {
                "type": "string",
                "examples": [
                  ""
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
export default CreateATaskOutcome1
