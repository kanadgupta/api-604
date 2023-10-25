const UpdateTask = {
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
            "default": "deal"
          },
          "relid": {
            "type": "integer",
            "description": "The id of the relational object for this task",
            "format": "int32",
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
            "description": "The content describing the task"
          },
          "duedate": {
            "type": "string",
            "description": "Due date of the task",
            "format": "date"
          },
          "dealTasktype": {
            "type": "integer",
            "description": "The type of the task based on the available Task Types in the account",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "assignee": {
            "type": "integer",
            "description": "The id of an user the task will be assigned to",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "outcomeId": {
            "type": "integer",
            "description": "Task outcome's id is required at the time of task being completed.",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "outcomeInfo": {
            "type": "string",
            "description": "More information about task completion with the outcome selection."
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateTask
