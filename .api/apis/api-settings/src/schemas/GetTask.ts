const GetTask = {
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
            "description": "The ID of the task"
          }
        },
        "required": [
          "id"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "dealTask": {
          "type": "object",
          "properties": {
            "relid": {
              "type": "string",
              "examples": [
                "5"
              ]
            },
            "reltype": {
              "type": "string",
              "examples": [
                "Deal"
              ]
            },
            "dealTasktype": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
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
            "automation": {},
            "cdate": {
              "type": "string",
              "examples": [
                "2017-02-24T15:01:37-06:00"
              ]
            },
            "duedate": {
              "type": "string",
              "examples": [
                "2017-02-28T12:00:00-06:00"
              ]
            },
            "edate": {
              "type": "string",
              "examples": [
                "2017-02-28T12:15:00-06:00"
              ]
            },
            "duration": {
              "type": "string",
              "examples": [
                "0"
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
            "note": {
              "type": "string",
              "examples": [
                "Deal task title!"
              ]
            },
            "donedate": {},
            "doneAutomation": {},
            "udate": {
              "type": "string",
              "examples": [
                "2017-02-24T15:01:37-06:00"
              ]
            },
            "owner": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "examples": [
                    "deal"
                  ]
                },
                "id": {
                  "type": "string",
                  "examples": [
                    "5"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "outcomeId": {
              "type": "integer",
              "default": 0,
              "examples": [
                91
              ]
            },
            "outcomeInfo": {
              "type": "string",
              "examples": [
                "More details about the outcome"
              ]
            },
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
                    "/1/user"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetTask
