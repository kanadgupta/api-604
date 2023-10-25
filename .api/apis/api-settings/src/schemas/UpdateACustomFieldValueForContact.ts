const UpdateACustomFieldValueForContact = {
  "body": {
    "type": "object",
    "properties": {
      "fieldValue": {
        "properties": {
          "contact": {
            "type": "string",
            "description": "ID of the contact whose field value you're updating",
            "examples": [
              4
            ]
          },
          "field": {
            "type": "string",
            "description": "ID of the custom field whose value you're updating for the contact",
            "examples": [
              24
            ]
          },
          "value": {
            "type": "string",
            "description": "Value for the field that you're updating",
            "examples": [
              "Blue"
            ]
          }
        },
        "required": [
          "contact",
          "field",
          "value"
        ],
        "type": "object"
      },
      "useDefaults": {
        "type": "boolean",
        "description": "If true, this will populate the missing required fields for this contact with default values",
        "default": false,
        "examples": [
          true
        ]
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
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the fieldValue to update"
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
        "contacts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-06T16:56:43-05:00"
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
                  "4"
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
                  "867d56644591991f6b50e1cb913f038b"
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
                  "0"
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
                  "2018-10-24T13:33:06-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2018-10-24T13:33:11-05:00"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "2018-10-24T13:33:07-05:00"
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
                  "2018-09-21 12:04:48"
                ]
              },
              "updated_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2018-10-24 13:33:11"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "bounceLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/bounceLogs"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactAutomations"
                    ]
                  },
                  "contactData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactData"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactGoals"
                    ]
                  },
                  "contactLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactLists"
                    ]
                  },
                  "contactLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactLogs"
                    ]
                  },
                  "contactTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactTags"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/contactDeals"
                    ]
                  },
                  "deals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/deals"
                    ]
                  },
                  "fieldValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/fieldValues"
                    ]
                  },
                  "geoIps": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/geoIps"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/organization"
                    ]
                  },
                  "plusAppend": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/plusAppend"
                    ]
                  },
                  "trackingLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/trackingLogs"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contacts/24/scoreValues"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "24"
                ]
              },
              "organization": {}
            }
          }
        },
        "fieldValue": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "integer",
              "default": 0,
              "examples": [
                4
              ]
            },
            "field": {
              "type": "integer",
              "default": 0,
              "examples": [
                24
              ]
            },
            "value": {
              "type": "string",
              "examples": [
                "Blue"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-10-24T13:32:52-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-10-24T13:33:11-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "owner": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/fieldValues/15/owner"
                  ]
                },
                "field": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/fieldValues/15/field"
                  ]
                }
              }
            },
            "owner": {
              "type": "integer",
              "default": 0,
              "examples": [
                4
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "15"
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
export default UpdateACustomFieldValueForContact
