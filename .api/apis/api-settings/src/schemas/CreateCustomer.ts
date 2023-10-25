const CreateCustomer = {
  "body": {
    "type": "object",
    "properties": {
      "ecomCustomer": {
        "properties": {
          "connectionid": {
            "type": "string",
            "description": "The id of the connection object for the service where the customer originates.",
            "examples": [
              "1"
            ]
          },
          "externalid": {
            "type": "string",
            "description": "The id of the customer in the external service.",
            "examples": [
              "56789"
            ]
          },
          "email": {
            "type": "string",
            "description": "The email address of the customer.",
            "examples": [
              "alice@example.com"
            ]
          },
          "acceptsMarketing": {
            "type": "string",
            "description": "Indication of whether customer has opt-ed in to marketing communications. 0 = not opted-in, 1 = opted-in. A value of 0 means the contact will match the \"Has not opted in to marketing\" segment condition and a value of 1 means the contact will match the \"Has opted in to marketing\" segment condition.",
            "examples": [
              "1"
            ]
          }
        },
        "required": [
          "connectionid",
          "externalid",
          "email"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "ecomCustomer": {
          "type": "object",
          "properties": {
            "connectionid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "externalid": {
              "type": "string",
              "examples": [
                "56789"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "alice@example.com"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "connection": {
                  "type": "string",
                  "examples": [
                    "/api/3/ecomCustomers/1/connection"
                  ]
                },
                "orders": {
                  "type": "string",
                  "examples": [
                    "/api/3/ecomCustomers/1/orders"
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
            "connection": {
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
export default CreateCustomer
