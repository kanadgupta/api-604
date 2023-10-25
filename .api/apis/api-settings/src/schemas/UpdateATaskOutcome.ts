const UpdateATaskOutcome = {
  "body": {
    "type": "object",
    "required": [
      "title",
      "sentiment"
    ],
    "properties": {
      "title": {
        "type": "string",
        "description": "Task outcome's title. The title should be unique among task outcomes."
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
            "description": "Task outcome's id"
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
                "NEUTRAL"
              ]
            },
            "disabled": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "created_by": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "updated_by": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "created_utc_timestamp": {
              "type": "string",
              "examples": [
                "2021-02-16T12:26:15-06:00"
              ]
            },
            "updated_utc_timestamp": {
              "type": "string",
              "examples": [
                "2021-02-16T12:27:56-06:00"
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
export default UpdateATaskOutcome
