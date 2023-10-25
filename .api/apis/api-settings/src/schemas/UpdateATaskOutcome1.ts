const UpdateATaskOutcome1 = {
  "body": {
    "type": "object",
    "properties": {
      "dealTasktype": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Deal task type's title. The title should be unique among deal task types."
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
            "description": "Task type - outcome relation's id"
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
                "POSITIVE"
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
                    "https://task-outcomes.staging.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels"
                  ]
                },
                "dealTasks": {
                  "type": "string",
                  "examples": [
                    "https://task-outcomes.staging.api-us1.com/api/3/taskOutcomes/1/dealTasks"
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
      "oneOf": [
        {
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
          }
        },
        {
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
          }
        }
      ],
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateATaskOutcome1
