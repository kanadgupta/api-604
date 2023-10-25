const UpdateAContactNew = {
  "body": {
    "type": "object",
    "properties": {
      "contact": {
        "properties": {
          "email": {
            "type": "string",
            "description": "Contact's email address",
            "examples": [
              "johndoe@example.com"
            ]
          },
          "firstName": {
            "type": "string",
            "description": "Contact's first name",
            "examples": [
              "John"
            ]
          },
          "lastName": {
            "type": "string",
            "description": "Contact's last name",
            "examples": [
              "Doe"
            ]
          },
          "phone": {
            "type": "string",
            "description": "Contact's phone number"
          },
          "fieldValues": {
            "type": "array",
            "description": "Contact's custom field values [{field, value}]",
            "items": {}
          },
          "deleted": {
            "type": "boolean",
            "description": "(Deprecated) Please use the the Delete endpoint"
          },
          "orgid": {
            "type": "integer",
            "description": "(Deprecated) Please use Account-Contact end points",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [],
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
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the contact to update"
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
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-28T13:50:41-05:00"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "johndoe@example.com"
              ]
            },
            "phone": {
              "type": "string",
              "examples": [
                ""
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
            "orgid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "segmentio_id": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "bounced_hard": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "bounced_soft": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "bounced_date": {},
            "ip": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "ua": {},
            "hash": {
              "type": "string",
              "examples": [
                "8309146b50af1ed5f9cb40c7465a0315"
              ]
            },
            "socialdata_lastcheck": {},
            "email_local": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "email_domain": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "sentcnt": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "rating_tstamp": {},
            "gravatar": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "deleted": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "anonymized": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "adate": {},
            "udate": {
              "type": "string",
              "examples": [
                "2018-09-28T13:55:59-05:00"
              ]
            },
            "edate": {},
            "deleted_at": {},
            "created_utc_timestamp": {
              "type": "string",
              "examples": [
                "2018-09-28 13:50:41"
              ]
            },
            "updated_utc_timestamp": {
              "type": "string",
              "examples": [
                "2018-09-28 13:50:41"
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
            "organization": {}
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
    }
  }
} as const;
export default UpdateAContactNew
