const ListAllConnections = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[service]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the external service name."
          },
          "filters[externalid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the external id associated with a connection."
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
        "connections": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "service": {
                "type": "string",
                "examples": [
                  "shopify"
                ]
              },
              "externalid": {
                "type": "string",
                "examples": [
                  "foo.myshopify.com"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  "Foo, Inc."
                ]
              },
              "isInternal": {
                "type": "string",
                "examples": [
                  "1"
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
              "lastSync": {
                "type": "string",
                "examples": [
                  "2017-02-02T13:09:07-06:00"
                ]
              },
              "logoUrl": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "linkUrl": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-02-02T13:09:07-06:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2017-02-02T13:09:12-06:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "customers": {
                    "type": "string",
                    "examples": [
                      "/api/3/connections/1/customers"
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
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
    }
  }
} as const;
export default ListAllConnections
