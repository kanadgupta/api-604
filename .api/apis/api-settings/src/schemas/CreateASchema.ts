const CreateASchema = {
  "body": {
    "type": "object",
    "properties": {
      "schema": {
        "description": "schema.description",
        "properties": {
          "slug": {
            "type": "string",
            "examples": [
              "my-object"
            ]
          },
          "labels": {
            "properties": {
              "singular": {
                "type": "string",
                "description": "Singular label for Schema",
                "examples": [
                  "My Object"
                ]
              },
              "plural": {
                "type": "string",
                "description": "Plural label for Schema",
                "examples": [
                  "My Objects"
                ]
              }
            },
            "required": [],
            "type": "object"
          },
          "description": {
            "type": "string",
            "description": "Description of the Schema",
            "examples": [
              "Sample Schema"
            ]
          },
          "fields": {
            "type": "array",
            "description": "List of Schema fields",
            "items": {
              "properties": {
                "id": {
                  "type": "string",
                  "examples": [
                    "my-number-field"
                  ]
                },
                "slug": {
                  "type": "string"
                },
                "labels": {
                  "type": "object",
                  "properties": {
                    "singular": {
                      "type": "string",
                      "description": "human-readable singular name",
                      "examples": [
                        "Number"
                      ]
                    },
                    "plural": {
                      "type": "string",
                      "description": "human-readable plural name",
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
                "scale": {
                  "type": "integer",
                  "format": "int32",
                  "minimum": -2147483648,
                  "maximum": 2147483647
                },
                "isRequired": {
                  "type": "boolean"
                }
              },
              "type": "object"
            }
          },
          "relationships": {
            "type": "array",
            "items": {
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
                      "description": "human-readable singular name",
                      "examples": [
                        "Primary Contact"
                      ]
                    },
                    "plural": {
                      "type": "string",
                      "description": "human-readable plural name",
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
                  "type": "boolean"
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
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "2123028c-64e6-40e2-97bc-9d63a2ca920b"
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
                "2021-03-19T18:23:17.153996399Z"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2021-03-19T18:23:17.153996399Z"
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
    "422": {
      "oneOf": [
        {
          "title": "invalid field value",
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
                      "Invalid value for field \"schema.fields.labels\""
                    ]
                  },
                  "detail": {
                    "type": "string",
                    "examples": [
                      "Schema fields must provide labels"
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
                          "/data/attributes/schema/fields/labels"
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
          "title": "slug conflict",
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
                      "Invalid value for field \"schema.slug\""
                    ]
                  },
                  "detail": {
                    "type": "string",
                    "examples": [
                      "Schema slug must be unique"
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
                          "/data/attributes/schema/slug"
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
export default CreateASchema
