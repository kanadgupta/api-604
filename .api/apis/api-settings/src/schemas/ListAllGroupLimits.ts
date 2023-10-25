const ListAllGroupLimits = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "groupLimits": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "groupid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "limitMail": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "limitMailType": {
                "type": "string",
                "examples": [
                  "month"
                ]
              },
              "limitContact": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "limitList": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "limitCampaign": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "limitCampaignType": {
                "type": "string",
                "examples": [
                  "month"
                ]
              },
              "limitAttachment": {
                "type": "string",
                "examples": [
                  "-1"
                ]
              },
              "limitUser": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "abuseRatio": {
                "type": "string",
                "examples": [
                  "4"
                ]
              },
              "forceSenderInfo": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "group": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groupLimits/1/group"
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
              "group": {
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
                "4"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllGroupLimits
