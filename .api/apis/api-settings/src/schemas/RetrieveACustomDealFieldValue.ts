const RetrieveACustomDealFieldValue = {
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
            "description": "ID of the dealCustomFieldData to retrieve"
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
        "dealCustomFieldDatum": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "dealCustomFieldMetumId": {
              "type": "integer",
              "default": 0,
              "examples": [
                5
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
                5
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2018-10-29 20:40:38"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2018-11-06 02:21:36"
              ]
            },
            "fieldValue": {
              "type": "string",
              "examples": [
                "New title"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "deal": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/dealCustomFieldData/1/deal"
                  ]
                },
                "dealCustomFieldMetum": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/dealCustomFieldData/1/dealCustomFieldMetum"
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
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  404
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Not Found"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveACustomDealFieldValue
