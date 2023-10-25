const CreateWebhook = {
  "body": {
    "type": "object",
    "properties": {
      "webhook": {
        "properties": {
          "name": {
            "type": "string",
            "description": "A name (or label) to give this webhook.",
            "examples": [
              "My Hook"
            ]
          },
          "url": {
            "type": "string",
            "description": "The URL where the webhook will send the POST request when the event occurs. Note that for https endpoints, we only can send webhooks on port 443, the default https port.",
            "examples": [
              "http://example.com/my-hook"
            ]
          },
          "events": {
            "type": "array",
            "description": "The [event(s)](#section-events) that will trigger the webhook to fire.",
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
            "description": "The id of a list associated with an event. If set, only events happening on this list id will trigger the webhook. This parameter has no effect on the following webhook events:     \"subscriber_note\",    \"contact_tag_added\",    \"contact_tag_removed\",    \"contact_task_add\",    \"list_add\",    \"sms_sent\",    \"sms_reply\",    \"sms_unsub\",    \"deal_add\",    \"deal_update\",    \"deal_note_add\",    \"deal_pipeline_add\",    \"deal_stage_add\",    \"deal_task_add\",    \"deal_tasktype_add\",    \"deal_task_complete\",    \"account_add\",    \"account_update\",    \"account_contact_add\",    \"account_contact_update\",",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "name",
          "url",
          "events",
          "sources"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
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
    }
  }
} as const;
export default CreateWebhook
