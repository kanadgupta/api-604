const CreateCustomDealFieldValue = {
  "body": {
    "type": "object",
    "properties": {
      "dealCustomFieldDatum": {
        "properties": {
          "dealId": {
            "type": "integer",
            "description": "The ID of the deal this field value relates to",
            "format": "int32",
            "examples": [
              "2"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "customFieldId": {
            "type": "integer",
            "description": "The ID of the custom field metum this field value relates to",
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "fieldValue": {
            "type": "string",
            "description": "Values for the field. (For `currency` field only, this needs to be in cents: eg, 10050 = 100.5)",
            "examples": [
              "test title"
            ]
          },
          "fieldCurrency": {
            "type": "string",
            "description": "Currency code for the money value",
            "default": "Default Currency for Field"
          }
        },
        "required": [
          "dealId",
          "customFieldId",
          "fieldValue"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "dealCustomFieldDatum": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "5"
              ]
            },
            "dealCustomFieldMetumId": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "dealId": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "customFieldId": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2018-11-06 02:27:05"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2018-11-06 02:27:05"
              ]
            },
            "fieldValue": {
              "type": "string",
              "examples": [
                "test title"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "deal": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/dealCustomFieldData/5/deal"
                  ]
                },
                "dealCustomFieldMetum": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/dealCustomFieldData/5/dealCustomFieldMetum"
                  ]
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
      "oneOf": [
        {
          "type": "object",
          "properties": {
            "errors": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "status": {
                    "type": "string",
                    "examples": [
                      "422"
                    ]
                  },
                  "title": {
                    "type": "string",
                    "examples": [
                      "The given data was invalid."
                    ]
                  },
                  "detail": {
                    "type": "string",
                    "examples": [
                      "The deal id field is required."
                    ]
                  }
                }
              }
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "errors": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "detail": {
                    "type": "string",
                    "examples": [
                      "A related deal was not found."
                    ]
                  }
                }
              }
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "errors": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "detail": {
                    "type": "string",
                    "examples": [
                      "A custom field value must be provided."
                    ]
                  }
                }
              }
            }
          }
        },
        {
          "type": "object",
          "properties": {
            "errors": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "detail": {
                    "type": "string",
                    "examples": [
                      "The custom field value `abc` could not be saved to the custom field of type `date`."
                    ]
                  }
                }
              }
            }
          }
        }
      ],
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateCustomDealFieldValue
