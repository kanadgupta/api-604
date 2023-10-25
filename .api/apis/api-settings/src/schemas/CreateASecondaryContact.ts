const CreateASecondaryContact = {
  "body": {
    "type": "object",
    "properties": {
      "contactDeal": {
        "properties": {
          "deal": {
            "type": "string",
            "description": "Deal's id",
            "examples": [
              2
            ]
          },
          "contact": {
            "type": "string",
            "description": "Contact's id",
            "examples": [
              1
            ]
          }
        },
        "required": [
          "deal",
          "contact"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
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
                  "c7b5a271"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "organization": {},
              "group": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "stage": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "deal1"
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
                  "2018-10-31T13:33:09-05:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2018-10-31T13:33:09-05:00"
                ]
              },
              "nexttaskid": {},
              "value": {
                "type": "string",
                "examples": [
                  "10000"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "winProbability": {},
              "winProbabilityMdate": {
                "type": "string",
                "examples": [
                  "2018-10-31T13:33:09-05:00"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
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
                  "2"
                ]
              },
              "edate": {},
              "links": {
                "type": "object",
                "properties": {
                  "dealActivities": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/dealActivities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/tasks"
                    ]
                  },
                  "dealCustomFieldData": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/2/dealCustomFieldData"
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
              "isDisabled": {
                "type": "boolean",
                "default": true,
                "examples": [
                  false
                ]
              }
            }
          }
        },
        "contactDeal": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "integer",
              "default": 0,
              "examples": [
                3
              ]
            },
            "deal": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2019-02-25T09:00:02-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "deal": {
                  "type": "string",
                  "examples": [
                    "/api/3/contactDeals/3/deal"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "/api/3/contactDeals/3/contact"
                  ]
                }
              }
            },
            "id": {
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
    "422": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "The given contact is already associated to the deal"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "code": {
                "type": "string",
                "examples": [
                  "field_invalid"
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "pointer": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/contact"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateASecondaryContact
