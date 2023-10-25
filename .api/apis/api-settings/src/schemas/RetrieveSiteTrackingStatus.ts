const RetrieveSiteTrackingStatus = {
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
export default RetrieveSiteTrackingStatus
