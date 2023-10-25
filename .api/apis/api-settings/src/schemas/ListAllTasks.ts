const ListAllTasks = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[title]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The title to be assigned to the task"
          },
          "filters[reltype]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The name of the relating object (see relationships table)"
          },
          "filters[relid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the relational object for this task"
          },
          "filters[status]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Task status means complete or incomplete. 1 is complete and 0 is incomplete."
          },
          "filters[note]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The content describing the task"
          },
          "filters[duedate]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Due date of the task"
          },
          "filters[d_tasktypeid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The type of the task based on the available Task Types in the account"
          },
          "filters[userid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "User ID this task belongs to"
          },
          "filters[due_after]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter deal tasks that are due after a specific date"
          },
          "Fitlers[due_before]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter deal tasks that are due before a specific date"
          },
          "filters[duedate_range]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter deal tasks that are due between specific date range"
          },
          "filters[assignee_userid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the user a task is assigned to"
          },
          "filters[outcome_id]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of a task outcome that the task belongs to."
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "dealTasks": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "duedate": {
                "type": "string",
                "examples": [
                  "2017-02-25T12:00:00-06:00"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "2017-02-25T12:15:00-06:00"
                ]
              },
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "title": {},
              "note": {
                "type": "string",
                "examples": [
                  "Testing Task"
                ]
              },
              "relid": {
                "type": "string",
                "examples": [
                  "7"
                ]
              },
              "reltype": {
                "type": "string",
                "examples": [
                  "Subscriber"
                ]
              },
              "dealTasktype": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-02-24T13:21:56-06:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2017-02-24T13:21:56-06:00"
                ]
              },
              "automation": {},
              "doneAutomation": {},
              "user": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "assignee": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "owner": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "examples": [
                      "contact"
                    ]
                  },
                  "id": {
                    "type": "string",
                    "examples": [
                      "7"
                    ]
                  }
                }
              },
              "outcomeId": {},
              "outcomeInfo": {},
              "links": {
                "type": "object",
                "properties": {
                  "activities": {
                    "type": "string",
                    "examples": [
                      "/1/activities"
                    ]
                  },
                  "automation": {
                    "type": "string",
                    "examples": [
                      "/1/automation"
                    ]
                  },
                  "dealTasktype": {
                    "type": "string",
                    "examples": [
                      "/1/dealTasktype"
                    ]
                  },
                  "doneAutomation": {
                    "type": "string",
                    "examples": [
                      "/1/doneAutomation"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "/1/notes"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "/1/owner"
                    ]
                  },
                  "taskNotifications": {
                    "type": "string",
                    "examples": [
                      "/1/taskNotifications"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "/3/dealTasks/1/user"
                    ]
                  },
                  "assignee": {
                    "type": "string",
                    "examples": [
                      "/1/assignee"
                    ]
                  }
                }
              }
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "2"
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
    }
  }
} as const;
export default ListAllTasks
