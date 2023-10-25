const ListAllContactAutomations = {
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
                  "10003"
                ]
              },
              "seriesid": {
                "type": "string",
                "examples": [
                  "1"
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
                  "2018-11-16T02:32:33-06:00"
                ]
              },
              "remdate": {
                "type": "string",
                "examples": [
                  "2018-11-16T02:32:33-06:00"
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
                  "1"
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
                  "2018-11-16T02:32:33-06:00"
                ]
              },
              "completedElements": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "totalElements": {
                "type": "string",
                "examples": [
                  "1"
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
                      "https://:account.api-us1.com/api/:version/contactAutomations/1/automation"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactAutomations/1/contact"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactAutomations/1/contactGoals"
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
              "automation": {
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
                "1"
              ]
            },
            "showcase_stats": {
              "type": "array",
              "items": {}
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllContactAutomations
