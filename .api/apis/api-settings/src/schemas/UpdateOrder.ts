const UpdateOrder = {
  "body": {
    "type": "object",
    "properties": {
      "ecomOrder": {
        "properties": {
          "externalid": {
            "type": "string",
            "description": "The id of the order in the external service. ONLY REQUIRED IF EXTERNALCHECKOUTID NOT INCLUDED.",
            "examples": [
              "3246315237"
            ]
          },
          "externalcheckoutid": {
            "type": "string",
            "description": "The id of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED."
          },
          "email": {
            "type": "string",
            "description": "The email address of the customer who placed the order.",
            "examples": [
              "alice@example.com"
            ]
          },
          "orderProducts": {
            "description": "ecomOrder.orderProducts.description",
            "properties": {
              "name": {
                "type": "string",
                "description": "The name of the product"
              },
              "price": {
                "type": "integer",
                "description": "The price of the product, in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.",
                "format": "int32",
                "minimum": -2147483648,
                "maximum": 2147483647
              },
              "quantity": {
                "type": "integer",
                "description": "The quantity ordered.",
                "format": "int32",
                "minimum": -2147483648,
                "maximum": 2147483647
              },
              "externalid": {
                "type": "string",
                "description": "The id of the product in the external service."
              },
              "category": {
                "type": "string",
                "description": "The category of the product."
              },
              "sku": {
                "type": "string",
                "description": "The SKU for the product"
              },
              "description": {
                "type": "string",
                "description": "The description of the product"
              },
              "imageUrl": {
                "type": "string",
                "description": "An Image URL that displays an image of the product"
              },
              "productUrl": {
                "type": "string",
                "description": "A URL linking to the product in your store"
              }
            },
            "required": [],
            "type": "object"
          },
          "totalPrice": {
            "type": "integer",
            "description": "The total price of the order in cents, including tax and shipping charges. (i.e. $456.78 => 45678). Must be greater than or equal to zero.",
            "format": "int32",
            "examples": [
              9111
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "shippingAmount": {
            "type": "integer",
            "description": "The total shipping amount in cents for the order",
            "format": "int32",
            "examples": [
              200
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "taxAmount": {
            "type": "integer",
            "description": "The total tax amount for the order in cents",
            "format": "int32",
            "examples": [
              500
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "discountAmount": {
            "type": "integer",
            "description": "The total discount amount for the order in cents",
            "format": "int32",
            "examples": [
              100
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "currency": {
            "type": "string",
            "description": "The currency of the order (3-digit ISO code, e.g., 'USD').",
            "examples": [
              "USD"
            ]
          },
          "orderUrl": {
            "type": "string",
            "description": "The URL for the order in the external service."
          },
          "externalUpdatedDate": {
            "type": "string",
            "description": "The date the order was updated.",
            "examples": [
              "2016-09-15T17:41:39-04:00"
            ]
          },
          "abandonedDate": {
            "type": "string",
            "description": "The date the cart was abandoned. REQUIRED ONLY IF INCLUDING EXTERNALCHECKOUTID."
          },
          "shippingMethod": {
            "type": "string",
            "description": "The shipping method of the order.",
            "examples": [
              "UPS Ground"
            ]
          },
          "orderNumber": {
            "type": "string",
            "description": "The order number in your system. This can be different than the external ID.",
            "examples": [
              "12345-1"
            ]
          },
          "orderDiscounts": {
            "properties": {
              "name": {
                "type": "string",
                "description": "The discount code or name of the discount"
              },
              "type": {
                "type": "string",
                "description": "The type of discount, either 'order' for discount on the order, or 'shipping' for free shipping."
              },
              "discountAmount": {
                "type": "string",
                "description": "The amount of the discount in cents."
              }
            },
            "required": [],
            "type": "object"
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
            "description": "The ID of the order to update"
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
        "ecomOrderProducts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "orderid": {
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
              "externalid": {
                "type": "string",
                "examples": [
                  "PROD12345"
                ]
              },
              "sku": {
                "type": "string",
                "examples": [
                  "POGO-12"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  "Pogo Stick"
                ]
              },
              "description": {
                "type": "string",
                "examples": [
                  "lorem ipsum..."
                ]
              },
              "price": {
                "type": "string",
                "examples": [
                  "4900"
                ]
              },
              "quantity": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "category": {
                "type": "string",
                "examples": [
                  "Toys"
                ]
              },
              "imageUrl": {
                "type": "string",
                "examples": [
                  "https://example.com/product.jpg"
                ]
              },
              "productUrl": {
                "type": "string",
                "examples": [
                  "https://store.example.com/product12345"
                ]
              },
              "createdDate": {
                "type": "string",
                "examples": [
                  "2019-09-05T13:55:37-05:00"
                ]
              },
              "updatedDate": {
                "type": "string",
                "examples": [
                  "2019-09-05T13:55:37-05:00"
                ]
              },
              "tstamp": {
                "type": "string",
                "examples": [
                  "2019-09-05T13:55:37-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "ecomOrder": {
                    "type": "string",
                    "examples": [
                      "https://youraccounthere.api-us1.com/api/3/ecomOrderProducts/1/ecomOrder"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "ecomOrder": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "ecomOrderDiscounts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "examples": [
                  "1OFF"
                ]
              },
              "type": {
                "type": "string",
                "examples": [
                  "order"
                ]
              },
              "orderid": {
                "type": "string",
                "examples": [
                  "5355"
                ]
              },
              "discountAmount": {
                "type": "string",
                "examples": [
                  "100"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "createdDate": {
                "type": "string",
                "examples": [
                  "2019-09-05T12:16:18-05:00"
                ]
              },
              "updatedDate": {
                "type": "string",
                "examples": [
                  "2019-09-05T12:16:18-05:00"
                ]
              }
            }
          }
        },
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
                "3246315237"
              ]
            },
            "orderNumber": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "alice@example.com"
              ]
            },
            "totalPrice": {
              "type": "integer",
              "default": 0,
              "examples": [
                9111
              ]
            },
            "discountAmount": {
              "type": "integer",
              "default": 0,
              "examples": [
                100
              ]
            },
            "shippingAmount": {
              "type": "integer",
              "default": 0,
              "examples": [
                200
              ]
            },
            "taxAmount": {
              "type": "integer",
              "default": 0,
              "examples": [
                500
              ]
            },
            "totalProducts": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "currency": {
              "type": "string",
              "examples": [
                "USD"
              ]
            },
            "shippingMethod": {
              "type": "string",
              "examples": [
                "UPS Ground"
              ]
            },
            "orderUrl": {
              "type": "string",
              "examples": [
                "https://example.com/orders/3246315233"
              ]
            },
            "externalCreatedDate": {
              "type": "string",
              "examples": [
                "2016-09-13T16:41:39-05:00"
              ]
            },
            "externalUpdatedDate": {
              "type": "string",
              "examples": [
                "2016-09-15T16:41:39-05:00"
              ]
            },
            "createdDate": {
              "type": "string",
              "examples": [
                "2019-09-05T12:52:13-05:00"
              ]
            },
            "updatedDate": {
              "type": "string",
              "examples": [
                "2019-09-05T13:55:37-05:00"
              ]
            },
            "orderProducts": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "3"
                ]
              }
            },
            "orderDiscounts": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "customer": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "orderDate": {
              "type": "string",
              "examples": [
                "2016-09-13T16:41:39-05:00"
              ]
            },
            "tstamp": {
              "type": "string",
              "examples": [
                "2019-09-05T13:55:37-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "connection": {
                  "type": "string",
                  "examples": [
                    "https://youraccounthere.api-us1.com/api/3/ecomOrders/1/connection"
                  ]
                },
                "customer": {
                  "type": "string",
                  "examples": [
                    "https://youraccounthere.api-us1.com/api/3/ecomOrders/1/customer"
                  ]
                },
                "orderProducts": {
                  "type": "string",
                  "examples": [
                    "https://youraccounthere.api-us1.com/api/3/ecomOrders/1/orderProducts"
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
                    "https://youraccounthere.api-us1.com/api/3/ecomOrders/1/orderActivities"
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
export default UpdateOrder
