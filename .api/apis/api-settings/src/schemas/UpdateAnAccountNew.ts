const UpdateAnAccountNew = {
  "body": {
    "type": "object",
    "properties": {
      "account": {
        "properties": {
          "name": {
            "type": "string",
            "description": "Account's name",
            "examples": [
              "Exmaple Account"
            ]
          },
          "accountUrl": {
            "type": "string",
            "description": "Account's website",
            "examples": [
              "https://www.example.com"
            ]
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
          },
          "owner": {
            "type": "integer",
            "description": "The userId of the Account owner.",
            "default": 1,
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
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
            "description": "Account's id"
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
        "account": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "Exmaple Account"
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
                "2019-04-03T13:57:31-05:00"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2019-06-12T16:55:32-05:00"
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
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateAnAccountNew
