const GetContact = {
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
        "contactAutomations": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "seriesid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "startid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "adddate": {
                "type": "string",
                "examples": [
                  "1976-10-16T23:23:09-05:00"
                ]
              },
              "remdate": {},
              "timespan": {},
              "lastblock": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "lastdate": {
                "type": "string",
                "examples": [
                  "1984-08-15T08:13:44-05:00"
                ]
              },
              "completedElements": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "totalElements": {
                "type": "string",
                "examples": [
                  "0"
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
                  100
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "automation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactAutomations/1/automation"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactAutomations/1/contact"
                    ]
                  },
                  "contactGoals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactAutomations/1/contactGoals"
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
              "automation": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "contactLists": {
          "type": "array",
          "items": {
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
                  "1"
                ]
              },
              "form": {},
              "seriesid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "sdate": {},
              "udate": {},
              "status": {
                "type": "string",
                "examples": [
                  "1"
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
              "unsubreason": {},
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
                  "0"
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
                      "https://:account.api-us1.com/api/:version/contactLists/1/automation"
                    ]
                  },
                  "list": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/list"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/contact"
                    ]
                  },
                  "form": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/form"
                    ]
                  },
                  "autosyncLog": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/autosyncLog"
                    ]
                  },
                  "campaign": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/campaign"
                    ]
                  },
                  "unsubscribeAutomation": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/unsubscribeAutomation"
                    ]
                  },
                  "message": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/contactLists/1/message"
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
              "automation": {}
            }
          }
        },
        "deals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "owner": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "organization": {},
              "group": {},
              "title": {
                "type": "string",
                "examples": [
                  "Consectetur omnis quo inventore molestiae ratione amet."
                ]
              },
              "nexttaskid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "USD"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "activities": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/activities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/notes"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/deals/1/tasks"
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
              "nextTask": {}
            }
          }
        },
        "fieldValues": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "field": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "value": {},
              "cdate": {
                "type": "string",
                "examples": [
                  "1981-05-16T19:02:29-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "1975-11-08T10:31:45-06:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/fieldValues/1/owner"
                    ]
                  },
                  "field": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/fieldValues/1/field"
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
              "owner": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "geoAddresses": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "ip4": {
                "type": "string",
                "examples": [
                  "823"
                ]
              },
              "country2": {
                "type": "string",
                "examples": [
                  "AS"
                ]
              },
              "country": {
                "type": "string",
                "examples": [
                  "Suriname"
                ]
              },
              "state": {
                "type": "string",
                "examples": [
                  "KY"
                ]
              },
              "city": {
                "type": "string",
                "examples": [
                  "North Arnoldomouth"
                ]
              },
              "zip": {
                "type": "string",
                "examples": [
                  "38704-6592"
                ]
              },
              "area": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "lat": {
                "type": "string",
                "examples": [
                  "-70.160407"
                ]
              },
              "lon": {
                "type": "string",
                "examples": [
                  "-102.229406"
                ]
              },
              "tz": {
                "type": "string",
                "examples": [
                  "Europe/Chisinau"
                ]
              },
              "tstamp": {
                "type": "string",
                "examples": [
                  "1972-03-16T07:26:58-06:00"
                ]
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "geoIps": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "campaignid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "messageid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "geoaddrid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "ip4": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "tstamp": {
                "type": "string",
                "examples": [
                  "1988-08-05T11:50:51-05:00"
                ]
              },
              "geoAddress": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "geoAddress": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/geoIps/1/geoAddress"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
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
                "2007-05-05T12:49:09-05:00"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "selmer.koss@example.com"
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
                "Charles"
              ]
            },
            "lastName": {
              "type": "string",
              "examples": [
                "Reynolds"
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
                ""
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
            "adate": {},
            "udate": {},
            "edate": {},
            "contactAutomations": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "contactLists": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "fieldValues": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "geoIps": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "deals": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "accountContacts": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "links": {
              "type": "object",
              "properties": {
                "bounceLogs": {
                  "type": "string",
                  "examples": [
                    "/1/bounceLogs"
                  ]
                },
                "contactAutomations": {
                  "type": "string",
                  "examples": [
                    "/1/contactAutomations"
                  ]
                },
                "contactData": {
                  "type": "string",
                  "examples": [
                    "/1/contactData"
                  ]
                },
                "contactGoals": {
                  "type": "string",
                  "examples": [
                    "/1/contactGoals"
                  ]
                },
                "contactLists": {
                  "type": "string",
                  "examples": [
                    "/1/contactLists"
                  ]
                },
                "contactLogs": {
                  "type": "string",
                  "examples": [
                    "/1/contactLogs"
                  ]
                },
                "contactTags": {
                  "type": "string",
                  "examples": [
                    "/1/contactTags"
                  ]
                },
                "contactDeals": {
                  "type": "string",
                  "examples": [
                    "/1/contactDeals"
                  ]
                },
                "deals": {
                  "type": "string",
                  "examples": [
                    "/1/deals"
                  ]
                },
                "fieldValues": {
                  "type": "string",
                  "examples": [
                    "/1/fieldValues"
                  ]
                },
                "geoIps": {
                  "type": "string",
                  "examples": [
                    "/1/geoIps"
                  ]
                },
                "notes": {
                  "type": "string",
                  "examples": [
                    "/1/notes"
                  ]
                },
                "organization": {
                  "type": "string",
                  "examples": [
                    "/1/organization"
                  ]
                },
                "plusAppend": {
                  "type": "string",
                  "examples": [
                    "/1/plusAppend"
                  ]
                },
                "trackingLogs": {
                  "type": "string",
                  "examples": [
                    "/1/trackingLogs"
                  ]
                },
                "scoreValues": {
                  "type": "string",
                  "examples": [
                    "/1/scoreValues"
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
export default GetContact
