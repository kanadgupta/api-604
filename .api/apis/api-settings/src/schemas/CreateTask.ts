const CreateTask = {
  "body": {
    "type": "object",
    "properties": {
      "dealTask": {
        "properties": {
          "title": {
            "type": "string",
            "description": "The title to be assigned to the task"
          },
          "ownerType": {
            "type": "string",
            "description": "The name of the relating object. Valid values are `contact` or `deal`. (see relationships table)",
            "default": "deal",
            "examples": [
              "contact"
            ]
          },
          "relid": {
            "type": "integer",
            "description": "The id of the relational object for this task",
            "format": "int32",
            "examples": [
              "7"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "status": {
            "type": "integer",
            "description": "Task status means complete or incomplete. 1 is complete and 0 is incomplete.",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "note": {
            "type": "string",
            "description": "The content describing the task",
            "examples": [
              "Testing Task"
            ]
          },
          "duedate": {
            "type": "string",
            "description": "Due date of the task",
            "format": "date",
            "examples": [
              "2017-02-25T12:00:00-06:00"
            ]
          },
          "dealTasktype": {
            "type": "integer",
            "description": "The type of the task based on the available Task Types in the account",
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "assignee": {
            "type": "integer",
            "description": "The id of an user the task will be assigned to",
            "format": "int32",
            "examples": [
              2
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "triggerAutomationOnCreate": {
            "type": "integer",
            "description": "Id of an automation that will be triggered when the task is created.",
            "format": "int32",
            "examples": [
              100
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "doneAutomation": {
            "type": "integer",
            "description": "Id of an automation that will be triggered when the task is completed.",
            "format": "int32",
            "examples": [
              101
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "relid",
          "duedate",
          "dealTasktype"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateTask
