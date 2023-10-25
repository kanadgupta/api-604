const ListAllContactautomationsForContact = {
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
            "description": "ID of the contact to receive automations for"
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
        "contactAutomations": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "6"
                ]
              },
              "seriesid": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "startid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "batchid": {
                "type": "string",
                "examples": [
                  "completed"
                ]
              },
              "adddate": {
                "type": "string",
                "examples": [
                  "2022-03-01T08:51:57-06:00"
                ]
              },
              "remdate": {
                "type": "string",
                "examples": [
                  "2022-03-01T08:51:58-06:00"
                ]
              },
              "timespan": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "lastblock": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "lastlogid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "lastdate": {
                "type": "string",
                "examples": [
                  "2022-03-01T08:51:58-06:00"
                ]
              },
              "in_als": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "completedElements": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "totalElements": {
                "type": "integer",
                "default": 0,
                "examples": [
                  3
                ]
              },
              "completed": {
                "type": "integer",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "completeValue": {
                "type": "integer",
                "default": 0,
                "examples": [
                  100
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "automation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactAutomations/6/automation"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactAutomations/6/contact"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactAutomations/6/contactGoals"
                    ]
                  },
                  "automationLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactAutomations/6/automationLogs"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "6"
                ]
              },
              "automation": {
                "type": "string",
                "examples": [
                  "2"
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
            "No Result found for Subscriber with id 1"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllContactautomationsForContact
