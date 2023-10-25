const ListAllDeals = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[search]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Search text to use with `search_field` parameter."
          },
          "filters[search_field]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Field to search for. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)."
          },
          "filters[title]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's title"
          },
          "filters[stage]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's stage"
          },
          "filters[group]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's pipeline"
          },
          "filters[status]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's status.  See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)"
          },
          "filters[owner]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's owner"
          },
          "filters[nextdate_range]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's tasks due dates. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)"
          },
          "filters[tag]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by tag names associated with deal's primary contact. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)."
          },
          "filters[tasktype]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deals that have tasks with given type"
          },
          "filters[created_before]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Returns deals that are created less than given date"
          },
          "filters[created_after]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Returns deals that are created greater than or equal to given date"
          },
          "filters[updated_before]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Returns deals that are updated less than given date"
          },
          "filters[updated_after]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Returns deals that are updated greater than or equal to given date"
          },
          "filters[organization]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal's primary contact's organization's id"
          },
          "filters[minimum_value]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "In USD with dollar portion. Returns deals whose values are greater than or equal to given value"
          },
          "filters[maximum_value]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "In USD with dollar portion. Returns deals whose values are less than or equal to given value"
          },
          "filters[score_greater_than]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "In a format of `<score_id>:<score_value>`. Returns deals whose score value is greater than given value"
          },
          "filters[score_less_than]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "In a format of `<score_id>:<score_value>`. Returns deals whose score value is less than given value"
          },
          "filters[score]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "In a format of `<score_id>:<score_value>`. Returns deals whose score value is equal to given value"
          },
          "orders[title]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal's title."
          },
          "orders[value]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal's value."
          },
          "orders[cdate]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal's created date."
          },
          "orders[contact_name]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal's primary contact's first name."
          },
          "orders[contact_orgname]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal's primary contact's organization name."
          },
          "orders[next-action]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal's next task's due date first. Then append deals with no next task. Lastly append deals with overdue tasks. If dates are the same, order by deal's id."
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
                  "39"
                ]
              },
              "organization": {
                "type": "string",
                "examples": [
                  "20"
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
                  "2"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Able Hyena"
                ]
              },
              "description": {
                "type": "string",
                "examples": [
                  "Article do skill hope."
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
                  "2019-09-06T11:29:48-05:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2019-09-06T11:29:48-05:00"
                ]
              },
              "nextdate": {},
              "nexttaskid": {},
              "value": {
                "type": "string",
                "examples": [
                  "1872151"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "winProbability": {
                "type": "integer",
                "default": 0,
                "examples": [
                  44
                ]
              },
              "winProbabilityMdate": {
                "type": "string",
                "examples": [
                  "2019-10-05T12:27:22-05:00"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "activitycount": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "nextdealid": {
                "type": "string",
                "examples": [
                  "46"
                ]
              },
              "edate": {
                "type": "string",
                "examples": [
                  "2019-11-22 14:15:37"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "dealActivities": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/dealActivities"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/contact"
                    ]
                  },
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/contactDeals"
                    ]
                  },
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/group"
                    ]
                  },
                  "nextTask": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/nextTask"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/notes"
                    ]
                  },
                  "account": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/account"
                    ]
                  },
                  "customerAccount": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/customerAccount"
                    ]
                  },
                  "organization": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/organization"
                    ]
                  },
                  "owner": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/owner"
                    ]
                  },
                  "scoreValues": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/scoreValues"
                    ]
                  },
                  "stage": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/stage"
                    ]
                  },
                  "tasks": {
                    "type": "string",
                    "examples": [
                      "api/3/deals/46/tasks"
                    ]
                  },
                  "dealCustomFieldData": {
                    "type": "string",
                    "examples": [
                      "/api/3/deals/46/dealCustomFieldData"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "46"
                ]
              },
              "isDisabled": {
                "type": "boolean",
                "default": true,
                "examples": [
                  false
                ]
              },
              "account": {
                "type": "string",
                "examples": [
                  "20"
                ]
              },
              "customerAccount": {
                "type": "string",
                "examples": [
                  "20"
                ]
              }
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "currencies": {
              "type": "object",
              "properties": {
                "USD": {
                  "type": "object",
                  "properties": {
                    "currency": {
                      "type": "string",
                      "examples": [
                        "USD"
                      ]
                    },
                    "total": {
                      "type": "string",
                      "examples": [
                        "3"
                      ]
                    },
                    "value": {
                      "type": "string",
                      "examples": [
                        "30000"
                      ]
                    }
                  }
                }
              }
            },
            "total": {
              "type": "integer",
              "default": 0,
              "examples": [
                3
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
export default ListAllDeals
