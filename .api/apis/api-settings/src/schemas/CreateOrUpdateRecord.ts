const CreateOrUpdateRecord = {
  "body": {
    "type": "object",
    "properties": {
      "record": {
        "properties": {
          "id": {
            "type": "string",
            "description": "The Record's id",
            "examples": [
              "test-obj-1"
            ]
          },
          "externalId": {
            "type": "string",
            "description": "The Record's external id",
            "examples": [
              "test-obj-1"
            ]
          },
          "fields": {
            "type": "array",
            "items": {
              "properties": {
                "id": {
                  "type": "string",
                  "description": "id of the field",
                  "examples": [
                    "my-number-field"
                  ]
                },
                "value": {
                  "type": "string",
                  "description": "Data type, appropriate for the field",
                  "examples": [
                    100
                  ]
                }
              },
              "type": "object"
            }
          },
          "relationships": {
            "type": "array",
            "items": {
              "properties": {
                "primary-contact": {
                  "type": "array",
                  "description": "List of Contact integers",
                  "default": [],
                  "items": {
                    "type": "integer",
                    "format": "int32",
                    "minimum": -2147483648,
                    "maximum": 2147483647
                  }
                }
              },
              "type": "object"
            }
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
          "schemaId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of schema"
          }
        },
        "required": [
          "schemaId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "record": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "test-obj-1"
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
                "account": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      123
                    ]
                  }
                }
              }
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
    "422": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "Invalid value for field \"{field_name}\""
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  "{field_name} cannot accept a value that is not defined in the schema."
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "examples": [
                      "pointer"
                    ]
                  },
                  "value": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/{field_name}"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateOrUpdateRecord
