const ListAllAutomations = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "automations": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "examples": [
                  "Email Subscription"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-06T16:28:43-05:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2018-08-06T16:33:10-05:00"
                ]
              },
              "userid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "entered": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "exited": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "hidden": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "defaultscreenshot": {
                "type": "string",
                "examples": [
                  "http://img-us1.com/default-series.gif"
                ]
              },
              "screenshot": {
                "type": "string",
                "examples": [
                  "https://d226aj4ao1t61q.cloudfront.net/k0x4h0lr_default-automation.png"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "campaigns": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/campaigns"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/contactGoals"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/contactAutomations"
                    ]
                  },
                  "blocks": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/blocks"
                    ]
                  },
                  "goals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/goals"
                    ]
                  },
                  "sms": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/sms"
                    ]
                  },
                  "sitemessages": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/automations/1/sitemessages"
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
                "2"
              ]
            },
            "starts": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "examples": [
                      "2"
                    ]
                  },
                  "series": {
                    "type": "string",
                    "examples": [
                      "1"
                    ]
                  },
                  "type": {
                    "type": "string",
                    "examples": [
                      "subscribe"
                    ]
                  }
                }
              }
            },
            "filtered": {
              "type": "boolean",
              "default": true,
              "examples": [
                false
              ]
            },
            "smsLogs": {
              "type": "array",
              "items": {}
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
export default ListAllAutomations
