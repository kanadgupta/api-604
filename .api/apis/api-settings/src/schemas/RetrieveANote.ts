const RetrieveANote = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the note to retrieve"
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
                "2"
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
                "2018-09-12T17:20:20-05:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-09-20T09:10:06-05:00"
              ]
            },
            "note": {
              "type": "string",
              "examples": [
                "TEST NOTE"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "activities": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/2/activities"
                  ]
                },
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/2/user"
                  ]
                },
                "mentions": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/2/mentions"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/2/notes"
                  ]
                },
                "owner": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/notes/2/owner"
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
                    "2"
                  ]
                }
              }
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
export default RetrieveANote
