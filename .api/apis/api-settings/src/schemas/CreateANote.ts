const CreateANote = {
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
            "type": "integer",
            "format": "int32",
            "examples": [
              2
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
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
                  "2018-08-06T16:26:04-05:00"
                ]
              },
              "email": {
                "type": "string",
                "examples": [
                  "ikreimont+2@activecampaign.com"
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
                  "0"
                ]
              },
              "ua": {},
              "hash": {
                "type": "string",
                "examples": [
                  "14d8c4418ae944c68e9dde4a975854cc"
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
                  "2018-09-28T17:45:11-05:00"
                ]
              },
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
                  "2018-09-28 17:45:11"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "bounceLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/bounceLogs"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactAutomations"
                    ]
                  },
                  "contactData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactData"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactGoals"
                    ]
                  },
                  "contactLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactLists"
                    ]
                  },
                  "contactLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactLogs"
                    ]
                  },
                  "contactTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactTags"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/contactDeals"
                    ]
                  },
                  "deals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/deals"
                    ]
                  },
                  "fieldValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/fieldValues"
                    ]
                  },
                  "geoIps": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/geoIps"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/organization"
                    ]
                  },
                  "plusAppend": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/plusAppend"
                    ]
                  },
                  "trackingLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/trackingLogs"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/2/scoreValues"
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
              "organization": {}
            }
          }
        },
        "note": {
          "type": "object",
          "properties": {
            "note": {
              "type": "string",
              "examples": [
                "This is the text of the note"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-28T17:45:11-05:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-09-28T17:45:11-05:00"
              ]
            },
            "reltype": {
              "type": "string",
              "examples": [
                "Subscriber"
              ]
            },
            "relid": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "userid": {
              "type": "string",
              "examples": [
                "1"
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
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    2
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
export default CreateANote
