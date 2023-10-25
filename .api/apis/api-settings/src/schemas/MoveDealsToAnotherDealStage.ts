const MoveDealsToAnotherDealStage = {
  "body": {
    "type": "object",
    "properties": {
      "deal": {
        "properties": {
          "stage": {
            "type": "string",
            "description": "Target deal stage's id to move deals to",
            "examples": [
              "3"
            ]
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
            "description": "Deal stage's id whose deals are to be moved to another deal stage"
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
              "activitycount": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-05-19T16:21:47-05:00"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "0000-00-00 00:00:00"
                ]
              },
              "group": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "hash": {
                "type": "string",
                "examples": [
                  "6faccb2d"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "dealActivities": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/dealActivities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/1/tasks"
                    ]
                  }
                }
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2017-05-19T16:21:47-05:00"
                ]
              },
              "nextTask": {},
              "nextdealid": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "nexttaskid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "organization": {},
              "owner": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "percent": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "stage": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Another Deal"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "10000"
                ]
              }
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
              "detail": {
                "type": "string",
                "examples": [
                  "Target stage does not belong to same pipeline"
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "pointer": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/stage"
                    ]
                  }
                }
              },
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  422
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Invalid attribute"
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
export default MoveDealsToAnotherDealStage
