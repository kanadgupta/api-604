const CreateFieldvalue = {
  "body": {
    "type": "object",
    "properties": {
      "fieldValue": {
        "properties": {
          "contact": {
            "type": "string",
            "description": "ID of the contact whose field value you're updating",
            "examples": [
              2
            ]
          },
          "field": {
            "type": "string",
            "description": "ID of the custom field whose value you're updating for the contact",
            "examples": [
              3
            ]
          },
          "value": {
            "type": "string",
            "description": "Value for the field that you're updating. For multi-select options this needs to be in the format of ||option1||option2||",
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
                  "2018-10-01T17:18:40-05:00"
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
                  "2018-10-01 17:18:40"
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
        "fieldValue": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "field": {
              "type": "integer",
              "default": 0,
              "examples": [
                3
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
                "2018-10-01T17:18:40-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-10-01T17:18:40-05:00"
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
                2
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
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Forbidden"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateFieldvalue
