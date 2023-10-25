const RetrieveASecondaryContact = {
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
            "description": "Secondary Contact's id"
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
        "contactDeal": {
          "type": "object",
          "properties": {
            "deal": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "contact": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2019-02-25T08:16:56-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "deal": {
                  "type": "string",
                  "examples": [
                    "/api/3/contactDeals/1/deal"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "/api/3/contactDeals/1/contact"
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
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for SubscriberDeal with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveASecondaryContact
