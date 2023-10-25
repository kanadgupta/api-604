const AddDomainToWhitelist = {
  "body": {
    "type": "object",
    "properties": {
      "siteTrackingDomain": {
        "properties": {
          "name": {
            "type": "string",
            "description": "The domain name to add to the whitelist.",
            "examples": [
              "example.com"
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
    "200": {
      "type": "object",
      "properties": {
        "siteTrackingDomain": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "example.com"
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
export default AddDomainToWhitelist
