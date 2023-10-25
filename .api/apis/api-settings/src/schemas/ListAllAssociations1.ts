const ListAllAssociations1 = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[contact]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by Contact ID"
          },
          "filters[account]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by Account ID"
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
        "accountContacts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "account": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "jobTitle": {
                "type": "string",
                "examples": [
                  "Product Manager"
                ]
              },
              "createdTimestamp": {
                "type": "string",
                "examples": [
                  "2019-06-26T10:49:10-05:00"
                ]
              },
              "updatedTimestamp": {
                "type": "string",
                "examples": [
                  "2019-06-26T10:49:10-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "account": {
                    "type": "string",
                    "examples": [
                      "http://hosted.localdev/api/3/accountContacts/17/account"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "http://hosted.localdev/api/3/accountContacts/17/contact"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "17"
                ]
              }
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "3"
              ]
            },
            "queryLog": {
              "type": "object",
              "properties": {
                "queries": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "stmt": {
                        "type": "string",
                        "examples": [
                          "SELECT  COUNT(DISTINCT t.id) AS `__count` FROM em_customer_account_subscriber t   WHERE 1"
                        ]
                      },
                      "time": {
                        "type": "number",
                        "default": 0,
                        "examples": [
                          0.3669261932373
                        ]
                      }
                    }
                  }
                },
                "by_time": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "stmt": {
                        "type": "string",
                        "examples": [
                          "SELECT  COUNT(DISTINCT t.id) AS `__count` FROM em_customer_account_subscriber t   WHERE 1"
                        ]
                      },
                      "time": {
                        "type": "number",
                        "default": 0,
                        "examples": [
                          0.3669261932373
                        ]
                      }
                    }
                  }
                },
                "total": {
                  "type": "number",
                  "default": 0,
                  "examples": [
                    0.54502487182617
                  ]
                },
                "mode": {
                  "type": "string",
                  "examples": [
                    "read/write"
                  ]
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllAssociations1
