const UpdateANote = {
  "body": {
    "type": "object",
    "properties": {
      "note": {
        "properties": {
          "note": {
            "type": "string"
          },
          "reltype": {
            "type": "string",
            "description": "Possible Values: Activity, Deal, DealTask, Subscriber, CustomerAccount",
            "examples": [
              "Subscriber"
            ]
          },
          "relid": {
            "type": "string",
            "examples": [
              2
            ]
          }
        },
        "required": [
          "note",
          "reltype",
          "relid"
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
            "description": "ID of the note to update"
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
        "note": {
          "type": "object",
          "properties": {
            "relid": {
              "type": "string",
              "examples": [
                "107"
              ]
            },
            "reltype": {
              "type": "string",
              "examples": [
                "Subscriber"
              ]
            },
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-21T11:52:41-05:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-09-28T18:39:44-05:00"
              ]
            },
            "note": {
              "type": "string",
              "examples": [
                "This is the text of the note"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "activities": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/1/activities"
                  ]
                },
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/1/user"
                  ]
                },
                "mentions": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/1/mentions"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/1/notes"
                  ]
                },
                "owner": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/1/owner"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "user": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "owner": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "examples": [
                    "contact"
                  ]
                },
                "id": {
                  "type": "string",
                  "examples": [
                    "107"
                  ]
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Subscriber with id 1"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateANote
