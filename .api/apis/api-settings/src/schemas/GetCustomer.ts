const GetCustomer = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the customer to retrieve"
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
                "3"
              ]
            },
            "externalid": {
              "type": "string",
              "examples": [
                "1440117293120"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "john.doe@example.com"
              ]
            },
            "totalRevenue": {
              "type": "string",
              "examples": [
                "150761"
              ]
            },
            "totalOrders": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "totalProducts": {
              "type": "string",
              "examples": [
                "3"
              ]
            },
            "avgRevenuePerOrder": {
              "type": "string",
              "examples": [
                "150761"
              ]
            },
            "avgProductCategory": {
              "type": "string",
              "examples": [
                "Musical Instrument"
              ]
            },
            "tstamp": {
              "type": "string",
              "examples": [
                "2019-01-01T10:23:22-06:00"
              ]
            },
            "acceptsMarketing": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "connection": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/ecomCustomers/15/connection"
                  ]
                },
                "orders": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/ecomCustomers/15/orders"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "15"
              ]
            },
            "connection": {
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
export default GetCustomer
