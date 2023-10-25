const RetrieveContactBounceLogs = {
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
        "bounceLogs": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "tstamp": {
                "type": "string",
                "examples": [
                  "2021-05-12T11:30:06-05:00"
                ]
              },
              "bounceid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "subscriberid": {
                "type": "string",
                "examples": [
                  "4"
                ]
              },
              "campaignid": {
                "type": "string",
                "examples": [
                  "11"
                ]
              },
              "messageid": {
                "type": "string",
                "examples": [
                  "12"
                ]
              },
              "codeid": {
                "type": "string",
                "examples": [
                  "48"
                ]
              },
              "email": {
                "type": "string",
                "examples": [
                  "uhOhBounced@example.com"
                ]
              },
              "error": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "source": {
                "type": "string",
                "examples": [
                  "Return-Path: <>\nReceived: from xxx.xxxx.xxxxxxc.com (unknown [XX.X.XX.XX]) ..."
                ]
              },
              "created_timestamp": {
                "type": "string",
                "examples": [
                  "2021-05-12 11:30:06"
                ]
              },
              "updated_timestamp": {
                "type": "string",
                "examples": [
                  "2021-05-12 11:30:06"
                ]
              },
              "created_by": {},
              "updated_by": {},
              "links": {
                "type": "object",
                "properties": {
                  "bounce": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/bounceLogs/23/bounce"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/bounceLogs/23/contact"
                    ]
                  },
                  "campaign": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/bounceLogs/23/campaign"
                    ]
                  },
                  "message": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/bounceLogs/23/message"
                    ]
                  },
                  "code": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/bounceLogs/23/code"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "23"
                ]
              },
              "bounce": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "4"
                ]
              },
              "campaign": {
                "type": "string",
                "examples": [
                  "11"
                ]
              },
              "message": {
                "type": "string",
                "examples": [
                  "12"
                ]
              },
              "code": {
                "type": "string",
                "examples": [
                  "48"
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
            "No Result found for Subscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactBounceLogs
