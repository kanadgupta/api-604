const ListAllSecondaryContacts = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "contactDeals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "deal": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2019-02-25T08:16:56-06:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "deal": {
                    "type": "string",
                    "examples": [
                      "/api/3/contactDeals/1/deal"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "/api/3/contactDeals/1/contact"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
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
                "1"
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
export default ListAllSecondaryContacts
