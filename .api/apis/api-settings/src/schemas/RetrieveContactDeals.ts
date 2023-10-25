const RetrieveContactDeals = {
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
        "deals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "hash": {
                "type": "string",
                "examples": [
                  "8be32as98"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "8"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "8"
                ]
              },
              "organization": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "group": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "stage": {
                "type": "string",
                "examples": [
                  "4"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Acme Corp"
                ]
              },
              "description": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "percent": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2021-06-30T15:27:44-05:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2021-06-30T15:27:44-05:00"
                ]
              },
              "nextdate": {},
              "nexttaskid": {},
              "value": {
                "type": "string",
                "examples": [
                  "494227"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "winProbability": {},
              "winProbabilityMdate": {},
              "status": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "activitycount": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "nextdealid": {
                "type": "string",
                "examples": [
                  "3060"
                ]
              },
              "edate": {},
              "links": {
                "type": "object",
                "properties": {
                  "dealActivities": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/dealActivities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/notes"
                    ]
                  },
                  "account": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/account"
                    ]
                  },
                  "customerAccount": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/customerAccount"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/tasks"
                    ]
                  },
                  "dealCustomFieldData": {
                    "type": "string",
                    "examples": [
                      "https://:acount.api-us1.com/api/3/deals/3057/dealCustomFieldData"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "3057"
                ]
              },
              "isDisabled": {
                "type": "boolean",
                "default": true,
                "examples": [
                  false
                ]
              },
              "account": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "customerAccount": {
                "type": "string",
                "examples": [
                  "5"
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
export default RetrieveContactDeals
