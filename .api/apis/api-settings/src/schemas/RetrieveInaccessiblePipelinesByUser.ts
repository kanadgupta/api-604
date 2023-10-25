const RetrieveInaccessiblePipelinesByUser = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "dealIds[]": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32",
              "minimum": -2147483648,
              "maximum": 2147483647
            },
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Deal Ids"
          },
          "userId": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "User's Id"
          }
        },
        "required": [
          "dealIds[]",
          "userId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "dealGroups": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "p1"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
                ]
              },
              "autoassign": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "allusers": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "allgroups": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "win_probability_initialize_date": {
                "type": "string",
                "examples": [
                  "0000-00-00 00:00:00"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2021-08-10T12:16:06-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2021-11-09T10:09:25-06:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "stages": {
                    "type": "string",
                    "examples": [
                      "http://hosted.localdev/api/3/dealGroups/1/stages"
                    ]
                  },
                  "dealGroupUsers": {
                    "type": "string",
                    "examples": [
                      "http://hosted.localdev/api/3/dealGroups/1/dealGroupUsers"
                    ]
                  },
                  "dealGroupGroups": {
                    "type": "string",
                    "examples": [
                      "http://hosted.localdev/api/3/dealGroups/1/dealGroupGroups"
                    ]
                  },
                  "winProbabilityFeatures": {
                    "type": "string",
                    "examples": [
                      "http://hosted.localdev/api/3/dealGroups/1/winProbabilityFeatures"
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
    "422": {
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
                  422
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Invalid Input Parameter"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  "Parameter userId is required."
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
export default RetrieveInaccessiblePipelinesByUser
