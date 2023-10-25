const RetrieveAFieldvalues = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the fieldValue to retrieve"
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
        "fieldValue": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "field": {},
            "value": {},
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-18T10:30:31-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-09-18T10:30:31-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "owner": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/fieldValues/2/owner"
                  ]
                },
                "field": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/fieldValues/2/field"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "owner": {}
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for FieldValue with id 10"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAFieldvalues
