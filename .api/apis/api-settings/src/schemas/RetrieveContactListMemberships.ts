const RetrieveContactListMemberships = {
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
        "contactLists": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "19"
                ]
              },
              "list": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "form": {},
              "seriesid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "sdate": {
                "type": "string",
                "examples": [
                  "2021-04-08T11:17:44-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2021-05-12T11:10:06-05:00"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "responder": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "sync": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "unsubreason": {},
              "campaign": {},
              "message": {},
              "first_name": {
                "type": "string",
                "examples": [
                  "John"
                ]
              },
              "last_name": {
                "type": "string",
                "examples": [
                  "Doe"
                ]
              },
              "ip4Sub": {
                "type": "string",
                "examples": [
                  "XXXXXXXXXX"
                ]
              },
              "sourceid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "autosyncLog": {},
              "ip4_last": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "ip4Unsub": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "created_timestamp": {
                "type": "string",
                "examples": [
                  "2021-04-08 11:17:44"
                ]
              },
              "updated_timestamp": {
                "type": "string",
                "examples": [
                  "2021-05-12 11:10:06"
                ]
              },
              "created_by": {},
              "updated_by": {},
              "unsubscribeAutomation": {},
              "links": {
                "type": "object",
                "properties": {
                  "automation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/automation"
                    ]
                  },
                  "list": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/list"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/contact"
                    ]
                  },
                  "form": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/form"
                    ]
                  },
                  "autosyncLog": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/autosyncLog"
                    ]
                  },
                  "campaign": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/campaign"
                    ]
                  },
                  "unsubscribeAutomation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/unsubscribeAutomation"
                    ]
                  },
                  "message": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactLists/19/message"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "19"
                ]
              },
              "automation": {}
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
            "No Result found for Subscriber with id 121"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactListMemberships
