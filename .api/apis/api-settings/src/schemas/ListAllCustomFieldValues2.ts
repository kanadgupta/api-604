const ListAllCustomFieldValues2 = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[customerAccountId]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter results by a specific account (note that Id uses a capital I)"
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
        "accountCustomFieldData": {
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
              "accountCustomFieldMetumId": {
                "type": "integer",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "accountId": {
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
                  "account": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/accountCustomFieldData/3/account"
                    ]
                  },
                  "accountCustomFieldMetum": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/accountCustomFieldData/3/accountCustomFieldMetum"
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
export default ListAllCustomFieldValues2
