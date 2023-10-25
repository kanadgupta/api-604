const CreateAnAddress = {
  "body": {
    "type": "object",
    "properties": {
      "address": {
        "properties": {
          "groupid": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "global": {
            "type": "string"
          },
          "company_name": {
            "type": "string",
            "examples": [
              "TEST NAME"
            ]
          },
          "address_1": {
            "type": "string",
            "examples": [
              "TEST ADDRESS"
            ]
          },
          "address_2": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "state": {
            "type": "string"
          },
          "zip": {
            "type": "string"
          },
          "district": {
            "type": "string",
            "description": "(Optional for countries that use it)"
          },
          "country": {
            "type": "string",
            "description": "Accepts a (2) two character string - country code (eg 'US', 'CA', 'MX')",
            "examples": [
              "US"
            ]
          },
          "allgroup": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "is_default": {
            "type": "boolean",
            "description": "Indicates default address"
          }
        },
        "required": [
          "company_name",
          "address_1",
          "country"
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
        "address": {
          "type": "object",
          "properties": {
            "companyName": {
              "type": "string",
              "examples": [
                "TEST NAME"
              ]
            },
            "address1": {
              "type": "string",
              "examples": [
                "TEST ADDRESS"
              ]
            },
            "country": {
              "type": "integer",
              "default": 0,
              "examples": [
                3
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "addressGroup": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/addresses/3/addressGroup"
                  ]
                },
                "addressList": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/addresses/3/addressList"
                  ]
                },
                "forms": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/addresses/3/forms"
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
export default CreateAnAddress
