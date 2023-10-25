const CreateAnAccountNew = {
  "body": {
    "type": "object",
    "properties": {
      "account": {
        "properties": {
          "name": {
            "type": "string",
            "description": "Account's name",
            "examples": [
              "Example Account"
            ]
          },
          "accountUrl": {
            "type": "string",
            "description": "Account's website",
            "examples": [
              "https://www.example.com"
            ]
          },
          "owner": {
            "type": "integer",
            "description": "The userId of the account owner.",
            "default": 1,
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "fields": {
            "type": "array",
            "description": "Account's custom field values `{customFieldId: int, fieldValue: string, fieldCurrency?:string}[]`",
            "items": {
              "properties": {
                "customFieldId": {
                  "type": "integer",
                  "description": "Field ID, ID of the Custom Field Meta Data",
                  "format": "int32",
                  "examples": [
                    9
                  ],
                  "minimum": -2147483648,
                  "maximum": 2147483647
                },
                "fieldValue": {
                  "type": "string",
                  "description": "Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).",
                  "examples": [
                    "500-1000"
                  ]
                },
                "fieldCurrency": {
                  "type": "string",
                  "description": "Required only for the `currency` field type. The three letter currency code for the currency value"
                }
              },
              "required": [
                "customFieldId",
                "fieldValue"
              ],
              "type": "object"
            }
          }
        },
        "required": [
          "name"
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
        "account": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "Example Account"
              ]
            },
            "accountUrl": {
              "type": "string",
              "examples": [
                "https://www.example.com"
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2019-06-12T16:52:16-05:00"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2019-06-12T16:52:16-05:00"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
            },
            "fields": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "customFieldId": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      9
                    ]
                  },
                  "fieldValue": {
                    "type": "string",
                    "examples": [
                      "501 - 1000"
                    ]
                  },
                  "accountId": {
                    "type": "string",
                    "examples": [
                      "1"
                    ]
                  }
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
                  "The account name was not provided."
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
                      "/data/attributes/name"
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
export default CreateAnAccountNew
