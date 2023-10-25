const CreateAnAccountNote = {
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
          }
        },
        "required": [
          "id"
        ]
      }
    ]
  },
  "response": {
    "201": {
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
                  "Museuem of Science and Industry"
                ]
              },
              "accountUrl": {
                "type": "string",
                "examples": [
                  "www.msi.com"
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
                "2017-05-31T09:54:30-05:00"
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
                "2017-05-31T09:54:30-05:00"
              ]
            },
            "note": {
              "type": "string",
              "examples": [
                "Note for the account"
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
export default CreateAnAccountNote
