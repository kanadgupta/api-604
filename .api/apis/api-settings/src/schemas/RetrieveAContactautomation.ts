const RetrieveAContactautomation = {
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
            "description": "ID of the contactAutomation to retrieve"
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
        "contactAutomation": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "string",
              "examples": [
                "110"
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
            "batchid": {},
            "adddate": {
              "type": "string",
              "examples": [
                "2018-09-19T09:44:26-05:00"
              ]
            },
            "remdate": {
              "type": "string",
              "examples": [
                "2018-09-19T09:44:26-05:00"
              ]
            },
            "timespan": {
              "type": "string",
              "examples": [
                "0"
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
                "2"
              ]
            },
            "lastdate": {
              "type": "string",
              "examples": [
                "2018-09-19T09:44:26-05:00"
              ]
            },
            "completedElements": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "totalElements": {
              "type": "string",
              "examples": [
                "2"
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
                    "https://:account.api-us1.com/api/:version/contactAutomations/2/automation"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactAutomations/2/contact"
                  ]
                },
                "contactGoals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactAutomations/2/contactGoals"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "2"
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
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for SubscriberSeries with id 3"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAContactautomation
