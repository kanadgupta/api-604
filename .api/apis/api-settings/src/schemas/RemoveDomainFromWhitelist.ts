const RemoveDomainFromWhitelist = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The domain name to remove from the whitelist"
          }
        },
        "required": [
          "name"
        ]
      }
    ]
  },
  "response": {
    "204": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RemoveDomainFromWhitelist
