const CreateADealRole = {
  "body": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "Title for the new deal role"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "dealRole": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "Finance"
              ]
            },
            "created_timestamp": {
              "type": "string",
              "examples": [
                "2021-04-14T21:34:55-05:00"
              ]
            },
            "updated_timestamp": {
              "type": "string",
              "examples": [
                "2021-04-14T21:34:55-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contactDeals": {
                  "type": "string",
                  "examples": [
                    "https://example.activehosted.com/api/3/dealRoles/3/contactDeals"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "3"
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
export default CreateADealRole
