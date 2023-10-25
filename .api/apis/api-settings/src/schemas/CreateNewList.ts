const CreateNewList = {
  "body": {
    "type": "object",
    "properties": {
      "list": {
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of the list to create",
            "examples": [
              "Name of List"
            ]
          },
          "stringid": {
            "type": "string",
            "description": "URL-safe list name. Example: 'list-name-sample'",
            "examples": [
              "Name-of-list"
            ]
          },
          "sender_url": {
            "type": "string",
            "description": "The website URL this list is for.",
            "examples": [
              "http://activecampaign.com"
            ]
          },
          "sender_reminder": {
            "type": "string",
            "description": "A reminder for your contacts as to why they are on this list and you are messaging them.",
            "examples": [
              "You are receiving this email as you subscribed to a newsletter when making an order on our site."
            ]
          },
          "send_last_broadcast": {
            "type": "boolean",
            "description": "Boolean value indicating whether or not to send the last sent campaign to this list to a new subscriber upon subscribing. 1 = yes, 0 = no",
            "default": false
          },
          "carboncopy": {
            "type": "string",
            "description": "Comma-separated list of email addresses to send a copy of all mailings to upon send"
          },
          "subscription_notify": {
            "type": "string",
            "description": "Comma-separated list of email addresses to notify when a new subscriber joins this list."
          },
          "unsubscription_notify": {
            "type": "string",
            "description": "Comma-separated list of email addresses to notify when a subscriber unsubscribes from this list."
          },
          "user": {
            "type": "integer",
            "description": "User Id of the list owner.  A list owner is able to control campaign branding.  A property of list.userid also exists on this object; both properties map to the same list owner field and are being maintained in the response object for backward compatibility.  If you post values for both list.user and list.userid, the value of list.user will be used.",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "name",
          "stringid",
          "sender_url",
          "sender_reminder"
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
        "list": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "Name of List"
              ]
            },
            "stringid": {
              "type": "string",
              "examples": [
                "Name-of-list"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2019-02-27T19:06:23-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2019-02-27T19:06:23-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contactGoalLists": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/lists/6/contactGoalLists"
                  ]
                },
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/lists/6/user"
                  ]
                },
                "addressLists": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/lists/6/addressLists"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "6"
              ]
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
    },
    "403": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  403
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Forbidden"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  "You do not have permission to create lists."
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
export default CreateNewList
