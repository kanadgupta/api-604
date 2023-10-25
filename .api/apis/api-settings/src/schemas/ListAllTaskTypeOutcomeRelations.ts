const ListAllTaskTypeOutcomeRelations = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "tasktypeOutcomeRels": {
          "type": "array",
          "items": {
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
                  "2021-04-02T12:06:06-05:00"
                ]
              },
              "updated_by": {},
              "updated_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2021-04-02 12:06:06"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "tasktype": {
                    "type": "string",
                    "examples": [
                      "https://youraccountname.api-us1.com/api/3/tasktypeOutcomeRels/57/tasktype"
                    ]
                  },
                  "outcome": {
                    "type": "string",
                    "examples": [
                      "https://youraccountname.api-us1.com/api/3/tasktypeOutcomeRels/57/outcome"
                    ]
                  },
                  "createdBy": {
                    "type": "string",
                    "examples": [
                      "https://youraccountname.api-us1.com/api/3/tasktypeOutcomeRels/57/createdBy"
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
                  "9"
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "3"
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
export default ListAllTaskTypeOutcomeRelations
