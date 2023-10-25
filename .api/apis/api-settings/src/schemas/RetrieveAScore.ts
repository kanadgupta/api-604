const RetrieveAScore = {
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
            "description": "ID of the score to retrieve"
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
        "score": {
          "type": "object",
          "properties": {
            "reltype": {
              "type": "string",
              "examples": [
                "contact"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Link Engagement Score"
              ]
            },
            "descript": {
              "type": "string",
              "examples": [
                "+50 points when user clicks any link sent"
              ]
            },
            "status": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-12-13T15:05:42-06:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-12-13T16:23:07-06:00"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
            },
            "id": {
              "type": "string",
              "examples": [
                "2"
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
            "No Result found for Score with id 1"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAScore
