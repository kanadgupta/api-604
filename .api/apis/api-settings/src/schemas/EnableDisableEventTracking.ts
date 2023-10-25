const EnableDisableEventTracking = {
  "body": {
    "type": "object",
    "properties": {
      "eventTracking": {
        "properties": {
          "enabled": {
            "type": "boolean",
            "description": "Whether event tracking should be enabled",
            "examples": [
              true
            ]
          }
        },
        "required": [
          "enabled"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default EnableDisableEventTracking
