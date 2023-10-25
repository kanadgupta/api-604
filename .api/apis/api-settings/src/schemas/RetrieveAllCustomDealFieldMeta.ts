const RetrieveAllCustomDealFieldMeta = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32",
            "default": 100,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The number of fields returned per request."
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
        "dealCustomFieldMeta": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "fieldLabel": {
                "type": "string",
                "examples": [
                  "Text Example"
                ]
              },
              "fieldType": {
                "type": "string",
                "examples": [
                  "text"
                ]
              },
              "fieldOptions": {},
              "fieldDefault": {
                "type": "integer",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "fieldDefaultCurrency": {},
              "isFormVisible": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "isRequired": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "displayOrder": {
                "type": "integer",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "personalization": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "knownFieldId": {},
              "hideFieldFlag": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "createdTimestamp": {
                "type": "string",
                "examples": [
                  "2019-04-23 15:34:00"
                ]
              },
              "updatedTimestamp": {
                "type": "string",
                "examples": [
                  "2019-05-03 15:16:51"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "dealCustomFieldData": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/dealCustomFieldMeta/1/dealCustomFieldData"
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
export default RetrieveAllCustomDealFieldMeta
