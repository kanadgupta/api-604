const RetrieveContactDealsList = {
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
            "description": "ID of the contact"
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
                  "2021-11-28T00:00:00-06:00"
                ]
              },
              "email": {
                "type": "string",
                "examples": [
                  "john.doe@example.com"
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
                  "XX"
                ]
              },
              "orgname": {
                "type": "string",
                "examples": [
                  "Opulence Time"
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
                  "43fa9ikvd23cbc59915f89asd234gsda27b33"
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
                  "2021-11-28T00:00:00-06:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2021-11-28T00:00:00-06:00"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "2021-12-20T06:23:31-06:00"
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
                  "2021-11-28 00:00:00"
                ]
              },
              "updated_utc_timestamp": {
                "type": "string",
                "examples": [
                  "2022-01-25 16:26:37"
                ]
              },
              "created_timestamp": {
                "type": "string",
                "examples": [
                  "2021-11-28 00:00:00"
                ]
              },
              "updated_timestamp": {
                "type": "string",
                "examples": [
                  "2021-12-09 00:00:00"
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
                      "https://:account.api-us1.com/api/3/contacts/1107/bounceLogs"
                    ]
                  },
                  "contactAutomations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactAutomations?limit=1000&orders%5Blastdate%5D=DESC"
                    ]
                  },
                  "contactData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactData"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactGoals"
                    ]
                  },
                  "contactLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactLists"
                    ]
                  },
                  "contactLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactLogs"
                    ]
                  },
                  "contactTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactTags"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/contactDeals"
                    ]
                  },
                  "deals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/deals"
                    ]
                  },
                  "fieldValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/fieldValues"
                    ]
                  },
                  "geoIps": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/geoIps"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/organization"
                    ]
                  },
                  "plusAppend": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/plusAppend"
                    ]
                  },
                  "trackingLogs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/trackingLogs"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/scoreValues"
                    ]
                  },
                  "accountContacts": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/accountContacts"
                    ]
                  },
                  "automationEntryCounts": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contacts/1107/automationEntryCounts"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "XXXX"
                ]
              },
              "organization": {
                "type": "string",
                "examples": [
                  "XX"
                ]
              }
            }
          }
        },
        "deals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "hash": {
                "type": "string",
                "examples": [
                  "dx60eh125"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "8"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "XXXX"
                ]
              },
              "organization": {
                "type": "string",
                "examples": [
                  "31"
                ]
              },
              "group": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "stage": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Opulence Time"
                ]
              },
              "description": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "percent": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2022-01-24T00:00:00-06:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2022-01-25T00:00:00-06:00"
                ]
              },
              "nextdate": {},
              "nexttaskid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "7320163"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "winProbability": {},
              "winProbabilityMdate": {},
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "activitycount": {
                "type": "string",
                "examples": [
                  "24"
                ]
              },
              "nextdealid": {
                "type": "string",
                "examples": [
                  "4218"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "2022-03-07 00:00:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "dealActivities": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/dealActivities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/notes"
                    ]
                  },
                  "account": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/account"
                    ]
                  },
                  "customerAccount": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/customerAccount"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/tasks"
                    ]
                  },
                  "dealCustomFieldData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/deals/4228/dealCustomFieldData"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "4228"
                ]
              },
              "isDisabled": {
                "type": "boolean",
                "default": true,
                "examples": [
                  false
                ]
              },
              "nextTask": {},
              "account": {
                "type": "string",
                "examples": [
                  "31"
                ]
              },
              "customerAccount": {
                "type": "string",
                "examples": [
                  "31"
                ]
              }
            }
          }
        },
        "contactDeals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "deal": {
                "type": "string",
                "examples": [
                  "4228"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "role": {},
              "cdate": {
                "type": "string",
                "examples": [
                  "2021-10-22T13:16:27-05:00"
                ]
              },
              "created_timestamp": {
                "type": "string",
                "examples": [
                  "2021-10-22 13:16:27"
                ]
              },
              "updated_timestamp": {
                "type": "string",
                "examples": [
                  "2021-10-22 13:16:27"
                ]
              },
              "created_by": {},
              "updated_by": {},
              "links": {
                "type": "object",
                "properties": {
                  "deal": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactDeals/4248/deal"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactDeals/4248/contact"
                    ]
                  },
                  "role": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/contactDeals/4248/role"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "4248"
                ]
              }
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
            "No Result found for Subscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactDealsList
