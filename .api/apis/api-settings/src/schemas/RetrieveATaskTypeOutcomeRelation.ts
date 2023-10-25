const RetrieveATaskTypeOutcomeRelation = {
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
        "tasktypeOutcomeRel": {
          "type": "object",
          "properties": {
            "tasktype_id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "outcome_id": {
              "type": "string",
              "examples": [
                "9"
              ]
            },
            "display_order": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "created_by": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "created_utc_timestamp": {
              "type": "string",
              "examples": [
                "2021-04-05T15:19:36-05:00"
              ]
            },
            "updated_by": {},
            "updated_utc_timestamp": {
              "type": "string",
              "examples": [
                "2021-04-05 15:19:36"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "tasktype": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/tasktypeOutcomeRels/1/tasktype"
                  ]
                },
                "outcome": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/tasktypeOutcomeRels/1/outcome"
                  ]
                },
                "createdBy": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/tasktypeOutcomeRels/1/createdBy"
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
            "tasktype": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "outcome": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "createdBy": {
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
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for TasktypeOutcomeRel with id 111"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveATaskTypeOutcomeRelation
