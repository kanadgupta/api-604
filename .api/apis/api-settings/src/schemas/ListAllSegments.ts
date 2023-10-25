const ListAllSegments = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "segments": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "examples": [
                  "Segment of Automation 1"
                ]
              },
              "logic": {
                "type": "string",
                "examples": [
                  "and"
                ]
              },
              "hidden": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "seriesid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "array",
                "items": {}
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
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllSegments
