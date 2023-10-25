const GetConnection = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the connection to retrieve"
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
        "connection": {
          "type": "object",
          "properties": {
            "isInternal": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "service": {
              "type": "string",
              "examples": [
                "fooCommerce"
              ]
            },
            "externalid": {
              "type": "string",
              "examples": [
                "toystore123"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Toystore, Inc."
              ]
            },
            "logoUrl": {
              "type": "string",
              "examples": [
                "http://example.com/i/foo.png"
              ]
            },
            "linkUrl": {
              "type": "string",
              "examples": [
                "http://example.com/foo/"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2017-02-02T14:56:05-06:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-02-02T14:56:05-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "customers": {
                  "type": "string",
                  "examples": [
                    "/connections/1/customers"
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
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetConnection
