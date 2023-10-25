const UpdateAAccountNote = {
  "body": {
    "type": "object",
    "properties": {
      "note": {
        "properties": {
          "note": {
            "type": "string",
            "description": "Account note's content"
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
            "description": "Account's id to assign new note to"
          },
          "noteid": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Account note's id to update"
          }
        },
        "required": [
          "id",
          "noteid"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "accounts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "examples": [
                  "Example Account"
                ]
              },
              "accountUrl": {
                "type": "string",
                "examples": [
                  "https://www.example.url"
                ]
              },
              "createdTimestamp": {
                "type": "string",
                "examples": [
                  "2019-04-03T13:29:35-05:00"
                ]
              },
              "updatedTimestamp": {
                "type": "string",
                "examples": [
                  "2019-06-12T16:59:54-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://hosted.localdev/api/3/accounts/1/notes"
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
                    "account"
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
                "CustomerAccount"
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
export default UpdateAAccountNote
