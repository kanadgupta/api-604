const GetContactsTrackingLogsevents = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "contactId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The Contact's ID"
          }
        },
        "required": [
          "contactId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "trackingLogs": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "subscriberid": {
                "type": "string",
                "examples": [
                  "112"
                ]
              },
              "type": {
                "type": "string",
                "examples": [
                  "Another event"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do"
                ]
              },
              "tstamp": {
                "type": "string",
                "examples": [
                  "2022-09-27T12:39:59-05:00"
                ]
              },
              "hash": {
                "type": "string",
                "examples": [
                  "358a9a13d85efb7b888014ec57790efb6c13ab3a"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://yourAccountName.api-us1.com/api/3/trackingLogs/12/contact"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "12"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "112"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetContactsTrackingLogsevents
