const UpdateASchema = {
  "body": {
    "type": "object",
    "properties": {
      "schema": {
        "description": "schema.description",
        "properties": {
          "slug": {
            "type": "string",
            "examples": [
              "stripe-order"
            ]
          },
          "labels": {
            "properties": {
              "singular": {
                "type": "string",
                "description": "Singular label for Schema",
                "examples": [
                  "Stripe Order"
                ]
              },
              "plural": {
                "type": "string",
                "description": "Plural label for Schema",
                "examples": [
                  "Stripe Orders"
                ]
              }
            },
            "required": [],
            "type": "object"
          },
          "description": {
            "type": "string",
            "description": "Text description of the Schema",
            "examples": [
              "Orders placed through the Stripe integration"
            ]
          },
          "appId": {
            "type": "string",
            "examples": [
              "123456"
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
                    "name"
                  ]
                },
                "value": {
                  "type": "string",
                  "description": "Data type, appropriate for the field"
                }
              },
              "type": "object"
            }
          },
          "icons": {
            "properties": {
              "default": {
                "type": "string",
                "description": "URI location of the default icon shown on Schema",
                "examples": [
                  "https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png"
                ]
              }
            },
            "required": [],
            "type": "object"
          },
          "relationships": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "labels": {
                "type": "object",
                "properties": {
                  "singular": {
                    "type": "string",
                    "description": "human-readable singular name"
                  },
                  "plural": {
                    "type": "string",
                    "description": "human-readable plural name"
                  }
                }
              },
              "description": {
                "type": "string"
              },
              "namespace": {
                "type": "string"
              },
              "hasMany": {
                "type": "boolean"
              }
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
          ":id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Id of Schema being updated"
          }
        },
        "required": [
          ":id"
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
      },
      {
        "type": "object",
        "properties": {
          "validateOnly": {
            "type": "boolean",
            "default": false,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "When set to `true` the API will validate the schema update without saving changes"
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
                "schema-9999-9999"
              ]
            },
            "slug": {
              "type": "string",
              "examples": [
                "stripe-order"
              ]
            },
            "labels": {
              "type": "object",
              "properties": {
                "singular": {
                  "type": "string",
                  "examples": [
                    "Stripe Order"
                  ]
                },
                "plural": {
                  "type": "string",
                  "examples": [
                    "Stripe Orders"
                  ]
                }
              }
            },
            "description": {
              "type": "string",
              "examples": [
                "Orders placed through the Stripe integration"
              ]
            },
            "appId": {
              "type": "string",
              "examples": [
                "123456"
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
                      "name"
                    ]
                  },
                  "labels": {
                    "type": "object",
                    "properties": {
                      "singular": {
                        "type": "string",
                        "examples": [
                          "Product Name"
                        ]
                      },
                      "plural": {
                        "type": "string",
                        "examples": [
                          "Product Name"
                        ]
                      }
                    }
                  },
                  "description": {
                    "type": "string",
                    "examples": [
                      "Name of the product from the Stripe integration"
                    ]
                  },
                  "isRequired": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
                    ]
                  },
                  "origin": {
                    "type": "string",
                    "examples": [
                      "stripe"
                    ]
                  },
                  "type": {
                    "type": "string",
                    "examples": [
                      "text"
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
                    "https://activehosted.com/temp-placeholder.svg"
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
                      "Products purchased in this Stripe order"
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
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2021-04-13T21:12:53.390Z"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2021-04-13T21:12:53.390Z"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
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
                  "{description}"
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
export default UpdateASchema
