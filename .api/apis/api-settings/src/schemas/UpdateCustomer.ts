const UpdateCustomer = {
  "body": {
    "type": "object",
    "properties": {
      "ecomCustomer": {
        "properties": {
          "externalid": {
            "type": "string",
            "description": "The id of the customer in the external service.",
            "examples": [
              "98765"
            ]
          },
          "connectionid": {
            "type": "string",
            "description": "The id of the connection object for the service where the customer originates."
          },
          "email": {
            "type": "string",
            "description": "The email address of the customer."
          },
          "acceptsMarketing": {
            "type": "string",
            "description": "Indication of whether customer has opt-ed in to marketing communications. 0 = not opted-in, 1 = opted-in. A value of 0 means the contact will match the \"Has not opted in to marketing\" segment condition and a value of 1 means the contact will match the \"Has opted in to marketing\" segment condition."
          }
        },
        "required": [],
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
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the customer to update"
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
                "98765"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "alice@example.com"
              ]
            },
            "totalRevenue": {
              "type": "string",
              "examples": [
                "3280"
              ]
            },
            "totalOrders": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "totalProducts": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "avgRevenuePerOrder": {
              "type": "string",
              "examples": [
                "2285"
              ]
            },
            "avgProductCategory": {
              "type": "string",
              "examples": [
                "Electronics"
              ]
            },
            "tstamp": {
              "type": "string",
              "examples": [
                "2017-02-06T14:05:31-06:00"
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
    }
  }
} as const;
export default UpdateCustomer
