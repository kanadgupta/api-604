const SyncAContactsData = {
  "body": {
    "type": "object",
    "properties": {
      "contact": {
        "properties": {
          "email": {
            "type": "string",
            "description": "Email address of the contact to sync",
            "examples": [
              "jondoe@example.com"
            ]
          },
          "firstName": {
            "type": "string",
            "examples": [
              "John"
            ]
          },
          "lastName": {
            "type": "string",
            "examples": [
              "Doe"
            ]
          },
          "phone": {
            "type": "string",
            "examples": [
              "7223224241"
            ]
          },
          "fieldValues": {
            "type": "array",
            "description": "Contact's custom field values [{field, value}]",
            "items": {}
          },
          "orgid": {
            "type": "integer",
            "description": "(Deprecated) Please use Account-Contact end points",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "deleted": {
            "type": "boolean",
            "description": "(Deprecated) Please use the DELETE endpoint"
          }
        },
        "required": [
          "email"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "fieldValues": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "10"
                ]
              },
              "field": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "Albany"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2022-04-14T10:03:23-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2022-04-14T10:03:23-05:00"
                ]
              },
              "created_by": {},
              "updated_by": {},
              "links": {
                "type": "object",
                "properties": {
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/14/owner"
                    ]
                  },
                  "field": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/14/field"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "14"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "10"
                ]
              }
            }
          }
        },
        "contact": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "examples": [
                "johndoe@example.com"
              ]
            },
            "phone": {
              "type": "string",
              "examples": [
                "7223224241"
              ]
            },
            "firstName": {
              "type": "string",
              "examples": [
                "John"
              ]
            },
            "lastName": {
              "type": "string",
              "examples": [
                "Doe"
              ]
            },
            "email_empty": {
              "type": "boolean",
              "default": true,
              "examples": [
                false
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2022-04-14T10:03:23-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2022-04-14T10:03:23-05:00"
              ]
            },
            "orgid": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "orgname": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "bounceLogs": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/bounceLogs"
                  ]
                },
                "contactAutomations": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactAutomations?limit=1000&orders%5Blastdate%5D=DESC"
                  ]
                },
                "contactData": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactData"
                  ]
                },
                "contactGoals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactGoals"
                  ]
                },
                "contactLists": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactLists"
                  ]
                },
                "contactLogs": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactLogs"
                  ]
                },
                "contactTags": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactTags"
                  ]
                },
                "contactDeals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/contactDeals"
                  ]
                },
                "deals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/deals"
                  ]
                },
                "fieldValues": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/fieldValues"
                  ]
                },
                "geoIps": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/geoIps"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/notes"
                  ]
                },
                "organization": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/organization"
                  ]
                },
                "plusAppend": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/plusAppend"
                  ]
                },
                "trackingLogs": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/trackingLogs"
                  ]
                },
                "scoreValues": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/scoreValues"
                  ]
                },
                "accountContacts": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/accountContacts"
                  ]
                },
                "automationEntryCounts": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/contacts/10/automationEntryCounts"
                  ]
                }
              }
            },
            "hash": {
              "type": "string",
              "examples": [
                "75b8163f768dff1f0f7b5f69476b986a"
              ]
            },
            "fieldValues": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "14"
                ]
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "10"
              ]
            },
            "organization": {
              "type": "string",
              "examples": [
                ""
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
    }
  }
} as const;
export default SyncAContactsData
