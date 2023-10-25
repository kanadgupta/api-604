const CreateATaskOutcome = {
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
        "description": "Sentiment of the outcome. Only three values are currently allowed.",
        "enum": [
          "Positive",
          "Neutral",
          "or Negative"
        ]
      },
      "disabled": {
        "type": "string",
        "description": "1 is for disabled and 0 is for active outcome.",
        "enum": [
          "0 or 1"
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
                  "The taskOutcome title was not provided."
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
              "error": {
                "type": "string",
                "examples": [
                  "taskOutcome_title_was_not_provided"
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
export default CreateATaskOutcome
