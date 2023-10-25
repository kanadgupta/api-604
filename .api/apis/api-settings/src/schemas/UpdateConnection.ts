const UpdateConnection = {
  "body": {
    "type": "object",
    "properties": {
      "connection": {
        "properties": {
          "service": {
            "type": "string",
            "description": "The name of the service."
          },
          "externalid": {
            "type": "string",
            "description": "The id of the account in the external service.",
            "examples": [
              "johndoe@example.com"
            ]
          },
          "name": {
            "type": "string",
            "description": "The name associated with the account in the external service.",
            "examples": [
              "Acme, Inc."
            ]
          },
          "logoUrl": {
            "type": "string",
            "description": "The URL to a logo image for the third-party service."
          },
          "linkUrl": {
            "type": "string",
            "description": "The link to the third-party integrator's site."
          },
          "status": {
            "type": "integer",
            "description": "The status of the connection (0 = error; 1 = connected)",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "syncStatus": {
            "type": "integer",
            "description": "The status of a sync triggered on the connection (0 = sync stopped; 1 = sync running).",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
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
            "description": "The id of the connection to update"
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
            "service": {
              "type": "string",
              "examples": [
                "fooCommerce"
              ]
            },
            "externalid": {
              "type": "string",
              "examples": [
                "johndoe@example.com"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Acme, Inc."
              ]
            },
            "isInternal": {
              "type": "string",
              "examples": [
                "0"
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
            "logoUrl": {
              "type": "string",
              "examples": [
                "http://foocorp.net/i/path3523.png"
              ]
            },
            "linkUrl": {
              "type": "string",
              "examples": [
                "http://example.com/"
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
                "2017-02-03T15:54:51-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "customers": {
                  "type": "string",
                  "examples": [
                    "/api/3/connections/2/customers"
                  ]
                }
              }
            },
            "id": {
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
export default UpdateConnection
