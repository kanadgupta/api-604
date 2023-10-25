const ListAllCustomFielddataFieldValues = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[dealId]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter results by a specific deal (note that Id uses a capital I)"
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
        "dealCustomFieldData": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "examples": [
                  "3"
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
                  1
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
                  "2018-11-06 02:26:07"
                ]
              },
              "updatedTimestamp": {
                "type": "string",
                "examples": [
                  "2018-11-06 02:26:07"
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
                      "https://:account.api-us1.com/api/:version/dealCustomFieldData/3/deal"
                    ]
                  },
                  "dealCustomFieldMetum": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/dealCustomFieldData/3/dealCustomFieldMetum"
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
export default ListAllCustomFielddataFieldValues
