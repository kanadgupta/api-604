const ListAllScores = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "scores": {
          "type": "array",
          "items": {
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "4"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllScores
