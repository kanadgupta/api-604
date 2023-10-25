const CreateOrder = {
  "body": {
    "type": "object",
    "properties": {
      "ecomOrder": {
        "properties": {
          "externalid": {
            "type": "string",
            "description": "The id of the order in the external service. ONLY REQUIRED IF EXTERNALCHECKOUTID NOT INCLUDED.",
            "examples": [
              "3246315233"
            ]
          },
          "externalcheckoutid": {
            "type": "string",
            "description": "The id of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED."
          },
          "source": {
            "type": "integer",
            "description": "The order source code. 0 - historical, 1 - real-time. Only real-time orders (source = 1) will show up on your Ecommerce Dashboard and trigger the “Makes a purchase” automation start, abandoned cart actions, customer conversions, or revenue attributions.",
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
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
            "required": [
              "name",
              "price",
              "quantity",
              "externalid"
            ],
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
          "connectionid": {
            "type": "integer",
            "description": "The id of the connection from which this order originated.",
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "customerid": {
            "type": "integer",
            "description": "The id of the customer associated with this order.",
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "orderUrl": {
            "type": "string",
            "description": "The URL for the order in the external service.",
            "examples": [
              "https://example.com/orders/3246315233"
            ]
          },
          "externalCreatedDate": {
            "type": "string",
            "description": "The date the order was placed.",
            "format": "date",
            "examples": [
              "2016-09-13T17:41:39-04:00"
            ]
          },
          "externalUpdatedDate": {
            "type": "string",
            "description": "The date the order was updated.",
            "examples": [
              "2016-09-14T17:41:39-04:00"
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
            "description": "The order number. This can be different than the externalid.",
            "examples": [
              "myorder-123"
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
                "type": "integer",
                "description": "The amount of the discount in cents.",
                "format": "int32",
                "minimum": -2147483648,
                "maximum": 2147483647
              }
            },
            "required": [],
            "type": "object"
          }
        },
        "required": [
          "externalid",
          "externalcheckoutid",
          "source",
          "email",
          "totalPrice",
          "currency",
          "connectionid",
          "customerid",
          "externalCreatedDate",
          "abandonedDate"
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
        "connections": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "service": {
                "type": "string",
                "examples": [
                  "example"
                ]
              },
              "externalid": {
                "type": "string",
                "examples": [
                  "examplestore"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  "My Example Store"
                ]
              },
              "isInternal": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "connectionType": {
                "type": "string",
                "examples": [
                  "ecommerce"
                ]
              },
              "status": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "syncStatus": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "sync_request_time": {},
              "sync_start_time": {},
              "lastSync": {},
              "logoUrl": {
                "type": "string",
                "examples": [
                  "https://myexamplestore.com/images/logo.jpg"
                ]
              },
              "linkUrl": {
                "type": "string",
                "examples": [
                  "https://myexamplestore.com"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-01-12T13:13:53-06:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2018-01-12T13:13:53-06:00"
                ]
              },
              "credentialExpiration": {},
              "links": {
                "type": "object",
                "properties": {
                  "options": {
                    "type": "string",
                    "examples": [
                      "https://exampleaccount.api-us1.com/api/3/connections/1/options"
                    ]
                  },
                  "customers": {
                    "type": "string",
                    "examples": [
                      "https://exampleaccount.api-us1.com.api-us1.com/api/3/connections/1/customers"
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
              "serviceName": {
                "type": "string",
                "examples": [
                  "shopify"
                ]
              }
            }
          }
        },
        "ecomOrderProducts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "externalid": {
                "type": "string",
                "examples": [
                  "PROD12345"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  "Pogo Stick"
                ]
              },
              "price": {
                "type": "integer",
                "default": 0,
                "examples": [
                  4900
                ]
              },
              "quantity": {
                "type": "integer",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "category": {
                "type": "string",
                "examples": [
                  "Toys"
                ]
              },
              "sku": {
                "type": "string",
                "examples": [
                  "POGO-12"
                ]
              },
              "description": {
                "type": "string",
                "examples": [
                  "lorem ipsum..."
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
            "externalid": {
              "type": "string",
              "examples": [
                "3246315234"
              ]
            },
            "source": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "alice@example.com"
              ]
            },
            "currency": {
              "type": "string",
              "examples": [
                "USD"
              ]
            },
            "connectionid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "customerid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "orderUrl": {
              "type": "string",
              "examples": [
                "https://example.com/orders/3246315233"
              ]
            },
            "shippingMethod": {
              "type": "string",
              "examples": [
                "UPS Ground"
              ]
            },
            "totalPrice": {
              "type": "integer",
              "default": 0,
              "examples": [
                9111
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
            "discountAmount": {
              "type": "integer",
              "default": 0,
              "examples": [
                100
              ]
            },
            "externalCreatedDate": {
              "type": "string",
              "examples": [
                "2016-09-13T16:41:39-05:00"
              ]
            },
            "totalProducts": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
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
            },
            "state": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "connection": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "orderProducts": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
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
                "2019-09-05T12:16:18-05:00"
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
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateOrder
