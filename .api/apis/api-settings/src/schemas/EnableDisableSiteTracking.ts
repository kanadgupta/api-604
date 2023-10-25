const EnableDisableSiteTracking = {
  "body": {
    "type": "object",
    "properties": {
      "siteTracking": {
        "properties": {
          "enabled": {
            "type": "boolean",
            "description": "Whether site tracking should be enabled",
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
      "type": "object",
      "properties": {
        "siteTracking": {
          "type": "object",
          "properties": {
            "enabled": {
              "type": "boolean",
              "default": true,
              "examples": [
                true
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
export default EnableDisableSiteTracking
