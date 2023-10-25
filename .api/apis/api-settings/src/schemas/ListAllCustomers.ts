const ListAllCustomers = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[email]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the email address of a customer."
          },
          "filters[externalid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the id of the customer in the external service."
          },
          "filters[connectionid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the id of the connection object for the service where the customer originates."
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "ecomCustomers": {
          "type": "array",
          "items": {
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "3"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllCustomers
