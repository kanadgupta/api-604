const RetrieveContactGeoIps = {
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
        "geoIps": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "49"
                ]
              },
              "campaignid": {
                "type": "string",
                "examples": [
                  "11"
                ]
              },
              "messageid": {
                "type": "string",
                "examples": [
                  "12"
                ]
              },
              "geoaddrid": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "ip4": {
                "type": "string",
                "examples": [
                  "1123637995"
                ]
              },
              "tstamp": {
                "type": "string",
                "examples": [
                  "2021-05-12T11:10:06-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "geoAddress": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/geoIps/4/geoAddress"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "4"
                ]
              },
              "geoAddress": {
                "type": "string",
                "examples": [
                  "2"
                ]
              }
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
export default RetrieveContactGeoIps
