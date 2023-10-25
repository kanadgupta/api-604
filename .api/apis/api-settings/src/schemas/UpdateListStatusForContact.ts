const UpdateListStatusForContact = {
  "body": {
    "type": "object",
    "properties": {
      "contactList": {
        "properties": {
          "list": {
            "type": "string",
            "description": "ID of the list to subscribe the contact to",
            "examples": [
              2
            ]
          },
          "contact": {
            "type": "string",
            "description": "ID of the contact to subscribe to the list",
            "examples": [
              1
            ]
          },
          "status": {
            "type": "string",
            "description": "Set to \"1\" to subscribe the contact to the list. Set to \"2\" to unsubscribe the contact from the list. WARNING: If you change a status from unsubscribed to active, you can re-subscribe a contact to a list from which they had manually unsubscribed.",
            "examples": [
              1
            ]
          },
          "sourceid": {
            "type": "integer",
            "description": "Set to \"4\" when re-subscribing a contact to a list",
            "default": 0,
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "list",
          "contact",
          "status"
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
        "contacts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-07-24T12:09:52-05:00"
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
              "bounced_date": {
                "type": "string",
                "examples": [
                  "0000-00-00"
                ]
              },
              "ip": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "ua": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "hash": {
                "type": "string",
                "examples": [
                  "1234567890"
                ]
              },
              "socialdata_lastcheck": {
                "type": "string",
                "examples": [
                  "0000-00-00 00:00:00"
                ]
              },
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
                  "1"
                ]
              },
              "rating_tstamp": {
                "type": "string",
                "examples": [
                  "0000-00-00"
                ]
              },
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
              "adate": {
                "type": "string",
                "examples": [
                  "2018-10-16T13:52:32-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2018-10-16T13:50:18-05:00"
                ]
              },
              "deleted_at": {
                "type": "string",
                "examples": [
                  "0000-00-00 00:00:00"
                ]
              },
              "created_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2018-10-01 08:40:10"
                ]
              },
              "updated_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2018-10-16 13:50:18"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "bounceLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/bounceLogs"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactAutomations"
                    ]
                  },
                  "contactData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactData"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactGoals"
                    ]
                  },
                  "contactLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactLists"
                    ]
                  },
                  "contactLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactLogs"
                    ]
                  },
                  "contactTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactTags"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/contactDeals"
                    ]
                  },
                  "deals": {
                    "type": "string",
                    "examples": [
                      "https://staging-tjahn.api-us1.com/api/3/contacts/1/deals"
                    ]
                  },
                  "fieldValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/fieldValues"
                    ]
                  },
                  "geoIps": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/geoIps"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/organization"
                    ]
                  },
                  "plusAppend": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/plusAppend"
                    ]
                  },
                  "trackingLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/trackingLogs"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/1/scoreValues"
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
              "organization": {}
            }
          }
        },
        "contactList": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "list": {
              "type": "string",
              "examples": [
                "2"
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
                "2018-10-16T13:52:35-05:00"
              ]
            },
            "status": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
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
                "0"
              ]
            },
            "unsubreason": {
              "type": "string",
              "examples": [
                ""
              ]
            },
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
                "0"
              ]
            },
            "sourceid": {
              "type": "string",
              "examples": [
                "3"
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
            "unsubscribeAutomation": {},
            "links": {
              "type": "object",
              "properties": {
                "automation": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/automation"
                  ]
                },
                "list": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/list"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/contact"
                  ]
                },
                "form": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/form"
                  ]
                },
                "autosyncLog": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/autosyncLog"
                  ]
                },
                "campaign": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/campaign"
                  ]
                },
                "unsubscribeAutomation": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/unsubscribeAutomation"
                  ]
                },
                "message": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/contactLists/2/message"
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
            "automation": {}
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
export default UpdateListStatusForContact
