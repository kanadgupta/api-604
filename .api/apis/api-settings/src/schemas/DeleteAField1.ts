const DeleteAField1 = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "schemaId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Schema ID of the field to be deleted"
          },
          "fieldId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Field ID of the field to be deleted"
          }
        },
        "required": [
          "schemaId",
          "fieldId"
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
    "202": {
      "oneOf": [
        {
          "title": "Accepted",
          "type": "object",
          "properties": {
            "schema": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "examples": [
                    "82ec659f-8283-4e88-9df3-26f4585fec02"
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
                    "2021-10-04T20:08:09.574382410Z"
                  ]
                },
                "updatedTimestamp": {
                  "type": "string",
                  "examples": [
                    "2022-06-10T14:19:06.834158129Z"
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
                      },
                      "inherited": {
                        "type": "boolean",
                        "default": true,
                        "examples": [
                          false
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
                      },
                      "inherited": {
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
          }
        },
        {
          "type": "object",
          "properties": {
            "schema": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "examples": [
                    "82ec659f-8283-4e88-9df3-26f4585fec02"
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
                    "2021-10-04T20:08:09.574382410Z"
                  ]
                },
                "updatedTimestamp": {
                  "type": "string",
                  "examples": [
                    "2022-06-10T14:19:06.834158129Z"
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
                      },
                      "inherited": {
                        "type": "boolean",
                        "default": true,
                        "examples": [
                          false
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
                      },
                      "inherited": {
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
          }
        }
      ],
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default DeleteAField1
