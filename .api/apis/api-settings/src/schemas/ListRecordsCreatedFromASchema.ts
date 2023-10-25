const ListRecordsCreatedFromASchema = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "schemaId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of schema"
          }
        },
        "required": [
          "schemaId"
        ]
      },
      {
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32",
            "default": 20,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The number of records to return for each call. Maximum value is 100."
          },
          "offset": {
            "type": "integer",
            "format": "int32",
            "default": 0,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Offset index of records to return"
          },
          "filters": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Use ?filters[relationships.{your-contact-relationship}][eq]={contactId} to filter records to a specific contact."
          }
        },
        "required": [
          "filters"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "records": {
          "type": "array",
          "items": {
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "count": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "limit": {
              "type": "integer",
              "default": 0,
              "examples": [
                20
              ]
            },
            "offset": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
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
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Not Found"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListRecordsCreatedFromASchema
