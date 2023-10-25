const ListAllDealRoles = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "search": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "(optional string used to search for matching titles)"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "dealRoles": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "Contributor"
                ]
              },
              "created_timestamp": {
                "type": "string",
                "examples": [
                  "2019-09-10T13:01:49-05:00"
                ]
              },
              "updated_timestamp": {
                "type": "string",
                "examples": [
                  "2019-09-10T13:01:49-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "contactDeals": {
                    "type": "string",
                    "examples": [
                      "https://example.activehosted.com/api/3/dealRoles/2/contactDeals"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "2"
                ]
              }
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "2"
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
export default ListAllDealRoles
