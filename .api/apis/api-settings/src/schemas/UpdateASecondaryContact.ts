const UpdateASecondaryContact = {
  "body": {
    "type": "object",
    "properties": {
      "contactDeal": {
        "properties": {
          "deal": {
            "type": "string",
            "description": "Deal's id",
            "examples": [
              1
            ]
          },
          "contact": {
            "type": "string",
            "description": "Contact's id",
            "examples": [
              4
            ]
          },
          "role": {
            "type": "integer",
            "description": "role id to associate with the contact",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
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
            "description": "Secondary Contact's id"
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
            "deal": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "contact": {
              "type": "integer",
              "default": 0,
              "examples": [
                4
              ]
            },
            "role": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2019-02-25T08:16:56-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "deal": {
                  "type": "string",
                  "examples": [
                    "/api/3/contactDeals/1/deal"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "/api/3/contactDeals/1/contact"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for SubscriberDeal with id 100"
          ]
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
export default UpdateASecondaryContact
