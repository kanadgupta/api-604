const CreateAnAccount1 = {
  "body": {
    "type": "object",
    "properties": {
      "accountContact": {
        "properties": {
          "account": {
            "type": "integer",
            "description": "Account ID",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "contact": {
            "type": "integer",
            "description": "Contact ID",
            "format": "int32",
            "examples": [
              2
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "jobTitle": {
            "type": "string",
            "description": "Job Title of the contact at the account",
            "examples": [
              "Product Manager"
            ]
          }
        },
        "required": [
          "account",
          "contact"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "accountContact": {
          "type": "object",
          "properties": {
            "account": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "contact": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
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
                    "http://hosted.localdev/api/3/accountContacts/2/account"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/accountContacts/1/contact"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "The account attribute was not provided"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "code": {
                "type": "string",
                "examples": [
                  "field_missing"
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "pointer": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/account"
                    ]
                  }
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
export default CreateAnAccount1
