const GetOrder = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "ecomOrderId": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the order to retrieve."
          }
        },
        "required": [
          "ecomOrderId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "ecomOrder": {
          "type": "object",
          "properties": {
            "customerid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "connectionid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "state": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "source": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "externalid": {
              "type": "string",
              "examples": [
                "1233456789"
              ]
            },
            "externalcheckoutid": {},
            "orderNumber": {
              "type": "string",
              "examples": [
                "123456789"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "alice@example.com"
              ]
            },
            "totalPrice": {
              "type": "string",
              "examples": [
                "1000"
              ]
            },
            "discountAmount": {
              "type": "string",
              "examples": [
                "100"
              ]
            },
            "shippingAmount": {
              "type": "string",
              "examples": [
                "120"
              ]
            },
            "taxAmount": {
              "type": "string",
              "examples": [
                "120"
              ]
            },
            "totalProducts": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "currency": {
              "type": "string",
              "examples": [
                "usd"
              ]
            },
            "shippingMethod": {
              "type": "string",
              "examples": [
                "ground shipping"
              ]
            },
            "orderUrl": {
              "type": "string",
              "examples": [
                "https://examplestore.com/orders/123456789"
              ]
            },
            "externalCreatedDate": {
              "type": "string",
              "examples": [
                "2019-06-29T14:44:49-05:00"
              ]
            },
            "externalUpdatedDate": {
              "type": "string",
              "examples": [
                "2019-06-29T14:44:49-05:00"
              ]
            },
            "abandonedDate": {},
            "createdDate": {
              "type": "string",
              "examples": [
                "2019-06-29T14:44:51-05:00"
              ]
            },
            "updatedDate": {
              "type": "string",
              "examples": [
                "2019-06-29T14:44:51-05:00"
              ]
            },
            "orderDate": {
              "type": "string",
              "examples": [
                "2019-06-29T14:44:49-05:00"
              ]
            },
            "tstamp": {
              "type": "string",
              "examples": [
                "2019-06-29T14:44:51-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "connection": {
                  "type": "string",
                  "examples": [
                    "https://exampleaccount.api-us1.com/api/3/ecomOrders/1/connection"
                  ]
                },
                "customer": {
                  "type": "string",
                  "examples": [
                    "https://exampleaccount.api-us1.com/api/3/ecomOrders/1/customer"
                  ]
                },
                "orderProducts": {
                  "type": "string",
                  "examples": [
                    "https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderProducts"
                  ]
                },
                "orderDiscounts": {
                  "type": "string",
                  "examples": [
                    "https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderDiscounts"
                  ]
                },
                "orderActivities": {
                  "type": "string",
                  "examples": [
                    "https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderActivities"
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
            },
            "customer": {
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
export default GetOrder
