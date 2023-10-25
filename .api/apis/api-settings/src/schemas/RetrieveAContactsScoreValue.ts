const RetrieveAContactsScoreValue = {
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
            "description": "id of the Contact"
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
        "scoreValues": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "score": {
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
              "deal": {},
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-03-08T14:01:16-06:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2018-10-22T20:15:28-05:00"
                ]
              },
              "scoreValue": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "score": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/scoreValues/1/score"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/scoreValues/1/contact"
                    ]
                  },
                  "deal": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/scoreValues/1/deal"
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
export default RetrieveAContactsScoreValue
