const RemoveEventNameOnly = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "eventName": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Name of event to delete. Spaces in names are allowed, but must be encoded (for example, \"my%20event\")."
          }
        },
        "required": [
          "eventName"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RemoveEventNameOnly
