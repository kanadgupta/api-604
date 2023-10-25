const RetrieveContactNotes = {
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
        "notes": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "relid": {
                "type": "string",
                "examples": [
                  "7"
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
              "is_draft": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2022-02-04T14:21:28-06:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2022-02-04T14:21:28-06:00"
                ]
              },
              "note": {
                "type": "string",
                "examples": [
                  "Here is a note!"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "activities": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/notes/1/activities"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/notes/1/user"
                    ]
                  },
                  "mentions": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/notes/1/mentions"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/notes/1/notes"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/notes/1/owner"
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
                      "7"
                    ]
                  }
                }
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
export default RetrieveContactNotes
