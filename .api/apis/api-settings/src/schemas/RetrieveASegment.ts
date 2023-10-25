const RetrieveASegment = {
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
            "description": "ID of the segment to be retrieved"
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
        "segment": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "Segment of test"
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
                "0"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveASegment
