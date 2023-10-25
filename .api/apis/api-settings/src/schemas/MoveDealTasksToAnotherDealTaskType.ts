const MoveDealTasksToAnotherDealTaskType = {
  "body": {
    "type": "object",
    "properties": {
      "dealTask": {
        "properties": {
          "dealTasktype": {
            "type": "string",
            "description": "Deal task type's id to move deal tasks to",
            "examples": [
              "2"
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
            "description": "Deal task type's id"
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
        "dealTasks": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "automation": {},
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-06-01T15:08:55-05:00"
                ]
              },
              "dealTasktype": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "doneAutomation": {},
              "donedate": {},
              "duedate": {
                "type": "string",
                "examples": [
                  "2017-06-02T12:00:00-05:00"
                ]
              },
              "duration": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "2017-06-02T12:15:00-05:00"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "activities": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/activities"
                    ]
                  },
                  "automation": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/automation"
                    ]
                  },
                  "dealTasktype": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/dealTasktype"
                    ]
                  },
                  "doneAutomation": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/doneAutomation"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/notes"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/owner"
                    ]
                  },
                  "taskNotifications": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/taskNotifications"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealTasks/1/user"
                    ]
                  }
                }
              },
              "note": {
                "type": "string",
                "examples": [
                  "Call Steve"
                ]
              },
              "owner": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "examples": [
                      "1"
                    ]
                  },
                  "type": {
                    "type": "string",
                    "examples": [
                      "deal"
                    ]
                  }
                }
              },
              "relid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "reltype": {
                "type": "string",
                "examples": [
                  "Deal"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2017-06-01T15:08:55-05:00"
                ]
              },
              "user": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "deals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "activitycount": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-06-01T15:08:41-05:00"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "0000-00-00 00:00:00"
                ]
              },
              "group": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "hash": {
                "type": "string",
                "examples": [
                  "3abd127b"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "activities": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/activities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/tasks"
                    ]
                  }
                }
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2017-06-01T15:08:55-05:00"
                ]
              },
              "nextTask": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "nextdate": {
                "type": "string",
                "examples": [
                  "2017-06-02T12:00:00-05:00"
                ]
              },
              "nextdealid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "nexttaskid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "organization": {},
              "owner": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "percent": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "stage": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "New deal"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "10000"
                ]
              }
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
    }
  }
} as const;
export default MoveDealTasksToAnotherDealTaskType
