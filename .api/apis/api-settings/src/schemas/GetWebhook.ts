const GetWebhook = {
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
            "$schema": "https://json-schema.org/draft/2020-12/schema#"
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
        "webhook": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2016-01-01T12:00:00-00:00"
              ]
            },
            "listid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "My hook"
              ]
            },
            "url": {
              "type": "string",
              "examples": [
                "http://example.com/my-hook"
              ]
            },
            "events": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "subscribe"
                ]
              }
            },
            "sources": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "admin"
                ]
              }
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
export default GetWebhook
