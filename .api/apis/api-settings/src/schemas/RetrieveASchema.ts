const RetrieveASchema = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Id of the Schema"
          }
        },
        "required": [
          "id"
        ]
      },
      {
        "type": "object",
        "properties": {
          "showFields": {
            "type": "string",
            "default": "all",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default."
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
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "6449c3f3-b68d-46d1-850b-c8aea998ce1b"
              ]
            },
            "slug": {
              "type": "string",
              "examples": [
                "my-object"
              ]
            },
            "visibility": {
              "type": "string",
              "examples": [
                "private"
              ]
            },
            "labels": {
              "type": "object",
              "properties": {
                "singular": {
                  "type": "string",
                  "examples": [
                    "My Object"
                  ]
                },
                "plural": {
                  "type": "string",
                  "examples": [
                    "My Objects"
                  ]
                }
              }
            },
            "description": {
              "type": "string",
              "examples": [
                "Sample Schema"
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2021-04-16T15:08:25.783751329Z"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2021-04-16T15:08:25.783751329Z"
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
                  "labels": {
                    "type": "object",
                    "properties": {
                      "singular": {
                        "type": "string",
                        "examples": [
                          "Number"
                        ]
                      },
                      "plural": {
                        "type": "string",
                        "examples": [
                          "Numbers"
                        ]
                      }
                    }
                  },
                  "type": {
                    "type": "string",
                    "examples": [
                      "number"
                    ]
                  },
                  "required": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      false
                    ]
                  },
                  "scale": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      0
                    ]
                  }
                }
              }
            },
            "icons": {
              "type": "object",
              "properties": {
                "default": {
                  "type": "string",
                  "examples": [
                    "https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png"
                  ]
                }
              }
            },
            "relationships": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "examples": [
                      "primary-contact"
                    ]
                  },
                  "labels": {
                    "type": "object",
                    "properties": {
                      "singular": {
                        "type": "string",
                        "examples": [
                          "Primary Contact"
                        ]
                      },
                      "plural": {
                        "type": "string",
                        "examples": [
                          "Primary Contacts"
                        ]
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "examples": [
                      "Primary contact to this object"
                    ]
                  },
                  "namespace": {
                    "type": "string",
                    "examples": [
                      "contacts"
                    ]
                  },
                  "hasMany": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      false
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
export default RetrieveASchema
