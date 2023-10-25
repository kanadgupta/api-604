const UpdateAnAddress = {
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
            "type": "string"
          },
          "address_1": {
            "type": "string"
          },
          "address_2": {
            "type": "string"
          },
          "city": {
            "type": "string",
            "examples": [
              "New Test City"
            ]
          },
          "state": {
            "type": "string",
            "examples": [
              "Florida"
            ]
          },
          "zip": {
            "type": "string",
            "examples": [
              "12345"
            ]
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
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          ":id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the Address being changed"
          }
        },
        "required": [
          ":id"
        ]
      }
    ]
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
                "New Test Company Name"
              ]
            },
            "address1": {
              "type": "string",
              "examples": [
                "111 New Test Address"
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
                "New Test City"
              ]
            },
            "state": {
              "type": "string",
              "examples": [
                "Florida"
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
                "12345"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Address with id 3"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateAnAddress
