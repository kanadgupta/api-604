const GetASingleRecordUsingExternalId = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "schemdId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of schema"
          },
          "externalId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "External ID for record"
          }
        },
        "required": [
          "schemdId",
          "externalId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "record": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "1fba439a-208e-48e6-bd23-f6c97c3e0519"
              ]
            },
            "externalId": {
              "type": "string",
              "examples": [
                "test-obj-1"
              ]
            },
            "schemaId": {
              "type": "string",
              "examples": [
                "6449c3f3-b68d-46d1-850b-c8aea998ce1b"
              ]
            },
            "fields": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "examples": [
                      "my-number-field"
                    ]
                  },
                  "value": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      100
                    ]
                  }
                }
              }
            },
            "relationships": {
              "type": "object",
              "properties": {
                "primary-contact": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "examples": [
                      "14"
                    ]
                  }
                }
              }
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2021-04-16T16:12:22.222685095Z"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2021-04-16T16:13:12.022671090Z"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  400
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Bad Request"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetASingleRecordUsingExternalId
