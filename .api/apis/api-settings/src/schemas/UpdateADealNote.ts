const UpdateADealNote = {
  "body": {
    "type": "object",
    "properties": {
      "note": {
        "properties": {
          "note": {
            "type": "string",
            "description": "Deal note's content"
          }
        },
        "required": [
          "note"
        ],
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
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Deal's id to assign new note to"
          },
          "noteId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Deal note's id to update"
          }
        },
        "required": [
          "id",
          "noteId"
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
                  "3"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-06-01T13:40:04-05:00"
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
                  "5604d5b5"
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
                  "2017-06-01T13:41:57-05:00"
                ]
              },
              "nextTask": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "nextdate": {
                "type": "string",
                "examples": [
                  "2017-06-02T12:00:00-05:00"
                ]
              },
              "nextdealid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "nexttaskid": {
                "type": "string",
                "examples": [
                  "1"
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
                  "1"
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
                  "New deal"
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
        },
        "note": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2017-06-01T13:42:13-05:00"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "activities": {
                  "type": "string",
                  "examples": [
                    "/api/3/notes/2/activities"
                  ]
                },
                "mentions": {
                  "type": "string",
                  "examples": [
                    "/api/3/notes/2/mentions"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "/api/3/notes/2/notes"
                  ]
                },
                "owner": {
                  "type": "string",
                  "examples": [
                    "/api/3/notes/2/owner"
                  ]
                },
                "user": {
                  "type": "string",
                  "examples": [
                    "/api/3/notes/2/user"
                  ]
                }
              }
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2017-06-01T13:42:13-05:00"
              ]
            },
            "note": {
              "type": "string",
              "examples": [
                "Update with more info"
              ]
            },
            "owner": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "examples": [
                    "1"
                  ]
                },
                "type": {
                  "type": "string",
                  "examples": [
                    "deal"
                  ]
                }
              }
            },
            "relid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "reltype": {
              "type": "string",
              "examples": [
                "Deal"
              ]
            },
            "user": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateADealNote
