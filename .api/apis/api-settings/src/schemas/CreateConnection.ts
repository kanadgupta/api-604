const CreateConnection = {
  "body": {
    "type": "object",
    "properties": {
      "connection": {
        "properties": {
          "service": {
            "type": "string",
            "description": "The name of the service.",
            "examples": [
              "fooCommerce"
            ]
          },
          "externalid": {
            "type": "string",
            "description": "The id of the account in the external service.",
            "examples": [
              "toystore123"
            ]
          },
          "name": {
            "type": "string",
            "description": "The name associated with the account in the external service. Often this will be a company name (e.g., 'My Toystore, Inc.').",
            "examples": [
              "Toystore, Inc."
            ]
          },
          "logoUrl": {
            "type": "string",
            "description": "The URL to a logo image for the external service.",
            "examples": [
              "http://example.com/i/foo.png"
            ]
          },
          "linkUrl": {
            "type": "string",
            "description": "The URL to a page where the integration with the external service can be managed in the third-party's website.",
            "examples": [
              "http://example.com/foo/"
            ]
          }
        },
        "required": [
          "service",
          "externalid",
          "name",
          "logoUrl",
          "linkUrl"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
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
    }
  }
} as const;
export default CreateConnection
