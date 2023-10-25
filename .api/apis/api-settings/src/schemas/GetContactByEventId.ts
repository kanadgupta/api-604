const GetContactByEventId = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "eventId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The Event's ID"
          }
        },
        "required": [
          "eventId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "contact": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2022-09-22T12:36:33-05:00"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "jd@example.com"
              ]
            },
            "phone": {
              "type": "string",
              "examples": [
                "555-555-5555"
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
            "orgname": {
              "type": "string",
              "examples": [
                ""
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
                "ef73fe360240b8bf171744f7f341524f"
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
                "example.com"
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
                "2022-09-27T14:57:35-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2022-09-22T12:36:33-05:00"
              ]
            },
            "edate": {
              "type": "string",
              "examples": [
                "2022-09-27T13:36:04-05:00"
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
                "2022-09-22 12:36:33"
              ]
            },
            "updated_utc_timestamp": {
              "type": "string",
              "examples": [
                "2022-09-27 13:36:04"
              ]
            },
            "created_timestamp": {
              "type": "string",
              "examples": [
                "2022-09-22 12:36:33"
              ]
            },
            "updated_timestamp": {
              "type": "string",
              "examples": [
                "2022-09-27 13:36:04"
              ]
            },
            "created_by": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "updated_by": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "email_empty": {
              "type": "boolean",
              "default": true,
              "examples": [
                false
              ]
            },
            "mpp_tracking": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "bounceLogs": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/bounceLogs"
                  ]
                },
                "contactAutomations": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactAutomations?limit=1000&orders%5Blastdate%5D=DESC"
                  ]
                },
                "contactData": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactData"
                  ]
                },
                "contactGoals": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactGoals"
                  ]
                },
                "contactLists": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactLists"
                  ]
                },
                "contactLogs": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactLogs"
                  ]
                },
                "contactTags": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactTags"
                  ]
                },
                "contactDeals": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/contactDeals"
                  ]
                },
                "deals": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/deals"
                  ]
                },
                "fieldValues": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/fieldValues"
                  ]
                },
                "geoIps": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/geoIps"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/notes"
                  ]
                },
                "organization": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/organization"
                  ]
                },
                "plusAppend": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/plusAppend"
                  ]
                },
                "trackingLogs": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/trackingLogs"
                  ]
                },
                "scoreValues": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/scoreValues"
                  ]
                },
                "accountContacts": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/accountContacts"
                  ]
                },
                "automationEntryCounts": {
                  "type": "string",
                  "examples": [
                    "https://yourAccountName.api-us1.com/api/3/contacts/112/automationEntryCounts"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "112"
              ]
            },
            "organization": {}
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetContactByEventId
