const CreateANewContact = {
  "body": {
    "type": "object",
    "properties": {
      "contact": {
        "properties": {
          "email": {
            "type": "string",
            "description": "Email address of the new contact. Example: 'test@example.com'",
            "examples": [
              "johndoe@example.com"
            ]
          },
          "firstName": {
            "type": "string",
            "description": "First name of the new contact.",
            "examples": [
              "John"
            ]
          },
          "lastName": {
            "type": "string",
            "description": "Last name of the new contact.",
            "examples": [
              "Doe"
            ]
          },
          "phone": {
            "type": "string",
            "description": "Phone number of the contact.",
            "examples": [
              "7223224241"
            ]
          },
          "fieldValues": {
            "type": "array",
            "description": "Contact's custom field values [{field id, value}]",
            "items": {}
          },
          "orgid": {
            "type": "integer",
            "description": "(Deprecated) Please use Account-Contact end points",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
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
                  "113"
                ]
              },
              "field": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "The Value for First Field"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2020-08-01T10:54:59-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2020-08-01T14:13:34-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/11797/owner"
                    ]
                  },
                  "field": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/11797/field"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "11797"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "113"
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
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-28T13:50:41-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-09-28T13:50:41-05:00"
              ]
            },
            "orgid": {
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
                    "https://:account.api-us1.com/api/:version/contacts/113/bounceLogs"
                  ]
                },
                "contactAutomations": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactAutomations"
                  ]
                },
                "contactData": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactData"
                  ]
                },
                "contactGoals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactGoals"
                  ]
                },
                "contactLists": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactLists"
                  ]
                },
                "contactLogs": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactLogs"
                  ]
                },
                "contactTags": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactTags"
                  ]
                },
                "contactDeals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/contactDeals"
                  ]
                },
                "deals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/deals"
                  ]
                },
                "fieldValues": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/fieldValues"
                  ]
                },
                "geoIps": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/geoIps"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/notes"
                  ]
                },
                "organization": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/organization"
                  ]
                },
                "plusAppend": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/plusAppend"
                  ]
                },
                "trackingLogs": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/trackingLogs"
                  ]
                },
                "scoreValues": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contacts/113/scoreValues"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "113"
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
    "404": {
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
    },
    "422": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "Email address already exists in the system"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "code": {
                "type": "string",
                "examples": [
                  "duplicate"
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "pointer": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/email"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateANewContact
