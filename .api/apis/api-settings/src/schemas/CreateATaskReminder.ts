const CreateATaskReminder = {
  "body": {
    "type": "object",
    "required": [
      "dealTask",
      "interval"
    ],
    "properties": {
      "dealTask": {
        "type": "string",
        "description": "Id of task"
      },
      "interval": {
        "type": "integer",
        "description": "Amount of time/minutes that a reminder will be sent to a task assignee ahead of task's due date.",
        "format": "int32",
        "minimum": -2147483648,
        "maximum": 2147483647
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "taskNotification": {
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
export default CreateATaskReminder
