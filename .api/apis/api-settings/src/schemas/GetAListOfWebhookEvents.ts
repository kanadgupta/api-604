const GetAListOfWebhookEvents = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "webhookEvents": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "bounce"
            ]
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "integer",
              "default": 0,
              "examples": [
                25
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetAListOfWebhookEvents
