const ListContactActivities = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "contact": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Required Contact ID"
          },
          "after": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter for activities after a specific DateTime"
          },
          "include": {
            "type": "string",
            "default": "activities to include",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Activities to include: notes, notes.user, recipients, recipients.recipient, reference, reference.automation, reference.campaign, reference.campaign.campaignList, reference.campaign.campaignMessage, reference.campaignMessage, reference.contact, reference.contactList, reference.contactList.list, reference.deal, reference.deal.contact, reference.dealTasktype, reference.link, reference.list, reference.log, reference.log.campaign, reference.log.contact, reference.log.message, reference.message, reference.note, reference.sms, reference.sms.automation, user"
          },
          "emails": {
            "type": "boolean",
            "default": false,
            "$schema": "https://json-schema.org/draft/2020-12/schema#"
          },
          "orders[tstamp]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order activities by tstamp"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "scoreValues": {
          "type": "array",
          "items": {}
        },
        "contacts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-09-12T16:53:50-05:00"
                ]
              },
              "email": {
                "type": "string",
                "examples": [
                  "adam@activecampaign.com"
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
                  "0d9c41ae7a4de516313673e2341f6003"
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
                  "1"
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
              "udate": {
                "type": "string",
                "examples": [
                  "2018-09-12T17:00:00-05:00"
                ]
              },
              "deleted_at": {
                "type": "string",
                "examples": [
                  "0000-00-00 00:00:00"
                ]
              },
              "scoreValues": {
                "type": "array",
                "items": {}
              },
              "links": {
                "type": "object",
                "properties": {
                  "bounceLogs": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/bounceLogs"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactAutomations"
                    ]
                  },
                  "contactData": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactData"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactGoals"
                    ]
                  },
                  "contactLists": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactLists"
                    ]
                  },
                  "contactLogs": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactLogs"
                    ]
                  },
                  "contactTags": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactTags"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactDeals"
                    ]
                  },
                  "deals": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/deals"
                    ]
                  },
                  "fieldValues": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/fieldValues"
                    ]
                  },
                  "geoIps": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/geoIps"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/organization"
                    ]
                  },
                  "plusAppend": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/plusAppend"
                    ]
                  },
                  "trackingLogs": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/trackingLogs"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/scoreValues"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "organization": {}
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "6"
              ]
            },
            "page_input": {
              "type": "object",
              "properties": {
                "segmentid": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "formid": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "listid": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "tagid": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "limit": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    20
                  ]
                },
                "offset": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "search": {},
                "sort": {},
                "seriesid": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "waitid": {
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
                    -1
                  ]
                },
                "forceQuery": {
                  "type": "integer",
                  "default": 0,
                  "examples": [
                    0
                  ]
                },
                "cacheid": {
                  "type": "string",
                  "examples": [
                    "522b5224f2007dca7483e08e7ebf5005"
                  ]
                }
              }
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
export default ListContactActivities
