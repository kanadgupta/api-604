const ListAllWhitelistedDomains = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "siteTrackingDomains": {
          "type": "array",
          "items": {
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllWhitelistedDomains
