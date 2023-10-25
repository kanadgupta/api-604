const ListAllAddresses = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "addresses": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "companyName": {
                "type": "string",
                "examples": [
                  "Test Company Name"
                ]
              },
              "address1": {
                "type": "string",
                "examples": [
                  "Test Address"
                ]
              },
              "address2": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "city": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "state": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "district": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "zip": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "country": {
                "type": "string",
                "examples": [
                  "US"
                ]
              },
              "allgroup": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "isDefault": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "addressGroup": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/addresses/1/addressGroup"
                    ]
                  },
                  "addressList": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/addresses/1/addressList"
                    ]
                  },
                  "forms": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/addresses/1/forms"
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
export default ListAllAddresses
