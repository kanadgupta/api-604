const RetrieveLinksAssociatedCampaign = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of campaign to retrieve Links for"
          }
        },
        "required": [
          "id"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "links": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "campaignid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "messageid": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "link": {
                "type": "string",
                "examples": [
                  "open"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  "Read Tracker"
                ]
              },
              "ref": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "tracked": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "campaign": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/links/1/campaign"
                    ]
                  },
                  "message": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/links/1/message"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "campaign": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "message": {
                "type": "string",
                "examples": [
                  "3"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveLinksAssociatedCampaign
