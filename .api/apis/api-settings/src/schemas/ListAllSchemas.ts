const ListAllSchemas = {
  "metadata": {
    "allOf": [
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
            "description": "The number of schemas to retrieve for each API call. Maximum value is 100."
          },
          "offset": {
            "type": "integer",
            "format": "int32",
            "default": 0,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Offset index of items to return"
          },
          "orders": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Array of sorting criteria to fetch items"
          },
          "filters": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filters schemas by different criteria"
          },
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
        "schemas": {
          "type": "array",
          "items": {
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
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllSchemas
