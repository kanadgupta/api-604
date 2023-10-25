const UpdateWebhook = {
  "body": {
    "type": "object",
    "properties": {
      "webhook": {
        "properties": {
          "name": {
            "type": "string",
            "description": "A name (or label) to give the webhook.",
            "examples": [
              "My Hook"
            ]
          },
          "url": {
            "type": "string",
            "description": "The URL where the webhook will send the POST request when the event occurs.",
            "examples": [
              "http://example.com/my-hook"
            ]
          },
          "events": {
            "type": "array",
            "description": "The The [event(s)](#section-events) that will trigger the webhook to fire. that will trigger the webhook to fire.",
            "items": {
              "type": "string",
              "examples": [
                "subscribe"
              ]
            }
          },
          "sources": {
            "type": "array",
            "description": "The [source(s)](#section-sources) causing an event to occur.",
            "items": {
              "type": "string",
              "examples": [
                "public"
              ]
            }
          },
          "listid": {
            "type": "integer",
            "description": "The id of a list associated with an event (required for some events).",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
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
            "description": "The webhook id"
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
                "My Hook"
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
                  "public"
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
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateWebhook
