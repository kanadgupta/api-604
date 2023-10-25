const CreateNewContactautomation = {
  "body": {
    "type": "object",
    "properties": {
      "contactAutomation": {
        "properties": {
          "contact": {
            "type": "integer",
            "description": "Contact ID of the Contact, to be linked to the contactAutomation",
            "format": "int32",
            "examples": [
              "117"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "automation": {
            "type": "integer",
            "description": "Automation ID of the automation, to be linked to the contactAutomation",
            "format": "int32",
            "examples": [
              "42"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "contact",
          "automation"
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
        "contacts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-06T16:26:06-05:00"
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
                  ""
                ]
              },
              "lastName": {
                "type": "string",
                "examples": [
                  ""
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
                  "2130706433"
                ]
              },
              "ua": {},
              "hash": {
                "type": "string",
                "examples": [
                  "054aa0acede49e07a844420c879b3c30"
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
              "udate": {},
              "edate": {},
              "deleted_at": {},
              "created_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2018-09-21 12:04:40"
                ]
              },
              "updated_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2018-09-21 12:04:40"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "bounceLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/bounceLogs"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactAutomations"
                    ]
                  },
                  "contactData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactData"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactGoals"
                    ]
                  },
                  "contactLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactLists"
                    ]
                  },
                  "contactLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactLogs"
                    ]
                  },
                  "contactTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactTags"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/contactDeals"
                    ]
                  },
                  "deals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/deals"
                    ]
                  },
                  "fieldValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/fieldValues"
                    ]
                  },
                  "geoIps": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/geoIps"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/organization"
                    ]
                  },
                  "plusAppend": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/plusAppend"
                    ]
                  },
                  "trackingLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/trackingLogs"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/64/scoreValues"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "64"
                ]
              },
              "organization": {}
            }
          }
        },
        "contactAutomation": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "string",
              "examples": [
                "64"
              ]
            },
            "seriesid": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "startid": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "status": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "lastblock": {
              "type": "string",
              "examples": [
                "4"
              ]
            },
            "completedElements": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "totalElements": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "completed": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "completeValue": {
              "type": "integer",
              "default": 0,
              "examples": [
                50
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "automation": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactAutomations/3/automation"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactAutomations/3/contact"
                  ]
                },
                "contactGoals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactAutomations/3/contactGoals"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "3"
              ]
            },
            "automation": {
              "type": "string",
              "examples": [
                "2"
              ]
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
            "Could not create SubscriberSeries"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateNewContactautomation
