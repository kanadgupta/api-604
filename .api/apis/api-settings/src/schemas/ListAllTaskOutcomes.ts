const ListAllTaskOutcomes = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[sentiment]": {
            "type": "string",
            "enum": [
              "1",
              "2 or 3"
            ],
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "1 is for Negative, 2 is for Neutral and 3 is for Positive"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "taskOutcomes": {
          "type": "array",
          "items": {
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
              "dealTasktype_ids": {
                "type": "array",
                "items": {}
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "4"
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
export default ListAllTaskOutcomes
