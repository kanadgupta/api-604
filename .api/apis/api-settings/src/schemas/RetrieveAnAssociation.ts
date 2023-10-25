const RetrieveAnAssociation = {
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
            "description": "Association's ID"
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
        "accountContact": {
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
                "1"
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
                "2019-06-26T11:26:09-05:00"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2019-06-26T11:26:09-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "account": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/accountContacts/18/account"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/accountContacts/18/contact"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "18"
              ]
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
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
                          "SELECT  * FROM em_customer_account_subscriber t   WHERE 1 AND id = '18' LIMIT 0, 1"
                        ]
                      },
                      "time": {
                        "type": "number",
                        "default": 0,
                        "examples": [
                          0.31304359436035
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
                          "SELECT  * FROM em_customer_account_subscriber t   WHERE 1 AND id = '18' LIMIT 0, 1"
                        ]
                      },
                      "time": {
                        "type": "number",
                        "default": 0,
                        "examples": [
                          0.31304359436035
                        ]
                      }
                    }
                  }
                },
                "total": {
                  "type": "number",
                  "default": 0,
                  "examples": [
                    0.31304359436035
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
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for CustomerAccountSubscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAnAssociation
