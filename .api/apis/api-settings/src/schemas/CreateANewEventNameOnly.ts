const CreateANewEventNameOnly = {
  "body": {
    "type": "object",
    "properties": {
      "eventTrackingEvent": {
        "properties": {
          "name": {
            "type": "string",
            "description": "The name of the event",
            "examples": [
              "my new fab event"
            ]
          }
        },
        "required": [
          "name"
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
        "eventTrackingEvent": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "my new fab event"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateANewEventNameOnly
