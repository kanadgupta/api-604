const RetrieveContactGoals = {
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
            "description": "ID of the contact"
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
        "contactGoals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "goalid": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "seriesid": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "subscriberid": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "subscriberseriesid": {
                "type": "string",
                "examples": [
                  "83"
                ]
              },
              "timespan": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "tstamp": {
                "type": "string",
                "examples": [
                  "2021-05-12T14:55:19-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "goal": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactGoals/3/goal"
                    ]
                  },
                  "automation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactGoals/3/automation"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactGoals/3/contact"
                    ]
                  },
                  "contactAutomation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactGoals/3/contactAutomation"
                    ]
                  },
                  "contactGoalLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactGoals/3/contactGoalLists"
                    ]
                  },
                  "contactGoalTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactGoals/3/contactGoalTags"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "goal": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "automation": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "contactAutomation": {
                "type": "string",
                "examples": [
                  "83"
                ]
              }
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
            "No Result found for Subscriber with id 121"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactGoals
