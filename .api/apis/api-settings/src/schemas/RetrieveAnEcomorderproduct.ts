const RetrieveAnEcomorderproduct = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The ID of the product you'd like returned."
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
        "ecomOrderProduct": {
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
                "1269385775"
              ]
            },
            "sku": {
              "type": "string",
              "examples": [
                "SKATE-8"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "My Cool Skateboard"
              ]
            },
            "description": {
              "type": "string",
              "examples": [
                "This skateboard is so cool, it rides itself"
              ]
            },
            "price": {
              "type": "string",
              "examples": [
                "5000"
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
                "skateboards"
              ]
            },
            "imageUrl": {
              "type": "string",
              "examples": [
                "https://example.com/images/skateboard.jpg"
              ]
            },
            "productUrl": {
              "type": "string",
              "examples": [
                "http://example.com/products/skate-8"
              ]
            },
            "createdDate": {
              "type": "string",
              "examples": [
                "2019-06-28T18:04:19-05:00"
              ]
            },
            "updatedDate": {
              "type": "string",
              "examples": [
                "2019-06-28T18:04:19-05:00"
              ]
            },
            "tstamp": {
              "type": "string",
              "examples": [
                "2019-06-28T18:04:19-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "ecomOrder": {
                  "type": "string",
                  "examples": [
                    "https://commissiontheatre.api-us1.com/api/3/ecomOrderProducts/1/ecomOrder"
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
            "ecomOrder": {
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
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for EcomOrderProduct with id {the id requested}"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAnEcomorderproduct
