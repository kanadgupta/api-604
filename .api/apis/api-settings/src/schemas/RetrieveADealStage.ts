const RetrieveADealStage = {
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
            "description": "Deal stage's id"
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
        "dealStage": {
          "type": "object",
          "properties": {
            "cardRegion1": {
              "type": "string",
              "examples": [
                "title"
              ]
            },
            "cardRegion2": {
              "type": "string",
              "examples": [
                "next-action"
              ]
            },
            "cardRegion3": {
              "type": "string",
              "examples": [
                "show-avatar"
              ]
            },
            "cardRegion4": {
              "type": "string",
              "examples": [
                "contact-fullname-orgname"
              ]
            },
            "cardRegion5": {
              "type": "string",
              "examples": [
                "value"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2017-01-20T09:27:32-06:00"
              ]
            },
            "color": {
              "type": "string",
              "examples": [
                "C481DF"
              ]
            },
            "dealOrder": {
              "type": "string",
              "examples": [
                "score DESC"
              ]
            },
            "group": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "group": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealStages/1/group"
                  ]
                }
              }
            },
            "order": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "title": {
              "type": "string",
              "examples": [
                "Stage 1"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-03-02T11:41:01-06:00"
              ]
            },
            "width": {
              "type": "string",
              "examples": [
                "280"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveADealStage
