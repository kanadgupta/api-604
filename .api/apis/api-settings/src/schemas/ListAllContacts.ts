const ListAllContacts = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "ids": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts by ID. Can be repeated for multiple IDs. Example: ids[]=1&ids[]=2&ids[]=42"
          },
          "email": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Email address of the contact you want to get"
          },
          "email_like": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts that contain the given value in the email address"
          },
          "exclude": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Exclude from the response the contact with the given ID"
          },
          "formid": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts associated with the given form"
          },
          "id_greater": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Only include contacts with an ID greater than the given ID"
          },
          "id_less": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Only include contacts with an ID less than the given ID"
          },
          "listid": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts associated with the given list"
          },
          "organization": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "(Deprecated) Please use Account-Contact end points. Filter contacts associated with the given organization ID"
          },
          "search": {
            "type": "string",
            "default": "null",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts that match the given value in the contact names, organization, phone or email"
          },
          "segmentid": {
            "type": "integer",
            "format": "int32",
            "default": null,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Return only contacts that match a list segment (this param initially returns segment information, when it is run a second time it will return contacts that match the segment)"
          },
          "seriesid": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts associated with the given automation"
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "default": -1,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "See [available values](#section-contact-parameters-available-values)"
          },
          "tagid": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts associated with the given tag"
          },
          "filters[created_before]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts that were created prior to this date"
          },
          "filters[created_after]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts that were created after this date"
          },
          "filters[updated_before]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts that were updated before this date"
          },
          "filters[updated_after]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter contacts that were updated after this date"
          },
          "waitid": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by contacts in the wait queue of an automation block"
          },
          "orders[cdate]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order contacts by creation date"
          },
          "orders[email]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order contacts by email"
          },
          "orders[first_name]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order contacts by first name"
          },
          "orders[last_name]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order contacts by last name"
          },
          "orders[name]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order contacts by full name"
          },
          "orders[score]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order contacts by score"
          },
          "in_group_lists": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Set this to \"true\" in order to return only contacts that the current user has permissions to see."
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "oneOf": [
        {
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
                      "2017-01-25T23:58:14-06:00"
                    ]
                  },
                  "email": {
                    "type": "string",
                    "examples": [
                      "janedoe@example.com"
                    ]
                  },
                  "phone": {
                    "type": "string",
                    "examples": [
                      "3120000000"
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
                      "31e076c964f4262817f9ba302c96e1c6"
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
                      "3"
                    ]
                  },
                  "deleted": {
                    "type": "string",
                    "examples": [
                      "0"
                    ]
                  },
                  "adate": {
                    "type": "string",
                    "examples": [
                      "2017-02-22 15:26:24"
                    ]
                  },
                  "udate": {
                    "type": "string",
                    "examples": [
                      "2017-01-25T23:58:14-06:00"
                    ]
                  },
                  "edate": {
                    "type": "string",
                    "examples": [
                      "2017-01-27 14:44:13"
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
                          "https://:account.api-us1.com/api/:version/contacts/68/bounceLogs"
                        ]
                      },
                      "contactAutomations": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactAutomations"
                        ]
                      },
                      "contactData": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactData"
                        ]
                      },
                      "contactGoals": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactGoals"
                        ]
                      },
                      "contactLists": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactLists"
                        ]
                      },
                      "contactLogs": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactLogs"
                        ]
                      },
                      "contactTags": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactTags"
                        ]
                      },
                      "contactDeals": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/contactDeals"
                        ]
                      },
                      "deals": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/deals"
                        ]
                      },
                      "fieldValues": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/fieldValues"
                        ]
                      },
                      "geoIps": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/geoIps"
                        ]
                      },
                      "notes": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/notes"
                        ]
                      },
                      "organization": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/organization"
                        ]
                      },
                      "plusAppend": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/plusAppend"
                        ]
                      },
                      "trackingLogs": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/trackingLogs"
                        ]
                      },
                      "scoreValues": {
                        "type": "string",
                        "examples": [
                          "https://:account.api-us1.com/api/:version/contacts/68/scoreValues"
                        ]
                      }
                    }
                  },
                  "id": {
                    "type": "string",
                    "examples": [
                      "68"
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
                    "2"
                  ]
                },
                "page_input": {
                  "type": "object",
                  "properties": {
                    "segmentid": {},
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
                        "895202850f4ca4144513c0962812f951"
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        {
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
          }
        }
      ],
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllContacts
