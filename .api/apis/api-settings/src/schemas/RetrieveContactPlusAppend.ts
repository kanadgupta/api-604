const RetrieveContactPlusAppend = {
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
            "description": "ID of the contact"
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
        "plusAppend": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "string",
              "examples": [
                "3"
              ]
            },
            "last_updated_rapleaf": {},
            "last_updated_fliptop": {},
            "last_updated_fullcontact": {},
            "imageUrl": {
              "type": "string",
              "examples": [
                "https://img.fullcontact.com/static/ece148ad832u8f2c66f23442_3e5923f243234234cec57395be553465p96u9345u69u3456354345634"
              ]
            },
            "membershipsFacebook": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "membershipsTwitter": {
              "type": "string",
              "examples": [
                "https://twitter.com/twitterHandleHere"
              ]
            },
            "membershipsLinkedin": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contact": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/plusAppends/2/contact"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Subscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactPlusAppend
