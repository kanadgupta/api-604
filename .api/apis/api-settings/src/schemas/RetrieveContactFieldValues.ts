const RetrieveContactFieldValues = {
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
            "description": "ID of the contact"
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
        "fieldValues": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "field": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "United States"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2021-05-12T14:19:38-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2021-05-12T14:54:57-05:00"
                ]
              },
              "created_by": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "updated_by": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/1/owner"
                    ]
                  },
                  "field": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/1/field"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "5"
                ]
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
            "No Result found for Subscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactFieldValues
