const LocalEvents = {
  "body": {
    "type": "object",
    "properties": {
      "localEvent": {
        "type": "object",
        "description": "Data about local event sent by TrackCmp",
        "properties": {
          "email": {
            "type": "string",
            "description": "Email of the contact"
          },
          "tstamp": {
            "type": "string",
            "description": "Time the event happened.",
            "format": "date-time"
          },
          "input": {
            "type": "string",
            "description": "Example: \"{\\\"event\\\":\\\"__pagevisit\\\",\\\"url\\\":\\\"www.url.com\\\"}\"",
            "format": "json"
          }
        }
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Email message"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default LocalEvents
