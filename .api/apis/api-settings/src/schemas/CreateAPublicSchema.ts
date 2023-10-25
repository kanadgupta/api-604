const CreateAPublicSchema = {
  "body": {
    "type": "object",
    "properties": {
      "schema": {
        "description": "schema.description",
        "properties": {
          "slug": {
            "type": "string",
            "examples": [
              "event-tickets"
            ]
          },
          "appId": {
            "type": "string",
            "examples": [
              "cxapp-studio-app-id"
            ]
          },
          "labels": {
            "type": "object",
            "properties": {
              "singular": {
                "type": "string",
                "description": "human-readable singular name",
                "examples": [
                  "Event Ticket"
                ]
              },
              "plural": {
                "type": "string",
                "description": "human-readable plural name",
                "examples": [
                  "Event Tickets"
                ]
              }
            }
          },
          "description": {
            "type": "string",
            "examples": [
              "Event Tickets"
            ]
          },
          "fields": {
            "type": "array",
            "items": {
              "properties": {
                "id": {
                  "type": "string",
                  "examples": [
                    "name"
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
                        "Name"
                      ]
                    },
                    "plural": {
                      "type": "string",
                      "description": "human-readable plural name",
                      "examples": [
                        "Names"
                      ]
                    }
                  }
                },
                "type": {
                  "type": "string",
                  "examples": [
                    "textarea"
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
                    "Primary contact that owns a ticket"
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
    "200": {
      "type": "object",
      "properties": {
        "schema": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "230f6065-a8e5-4df2-a70a-f6832d004d8d"
              ]
            },
            "slug": {
              "type": "string",
              "examples": [
                "app-230f6065-a8e5-4df2-a70a-f6832d004d8d-event-tickets"
              ]
            },
            "visibility": {
              "type": "string",
              "examples": [
                "public"
              ]
            },
            "labels": {
              "type": "object",
              "properties": {
                "singular": {
                  "type": "string",
                  "examples": [
                    "Event Ticket"
                  ]
                },
                "plural": {
                  "type": "string",
                  "examples": [
                    "Event Tickets"
                  ]
                }
              }
            },
            "description": {
              "type": "string",
              "examples": [
                "Event Tickets"
              ]
            },
            "appId": {
              "type": "string",
              "examples": [
                "cxapp-studio-app-id"
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
                          "Name"
                        ]
                      },
                      "plural": {
                        "type": "string",
                        "examples": [
                          "Names"
                        ]
                      }
                    }
                  },
                  "type": {
                    "type": "string",
                    "examples": [
                      "textarea"
                    ]
                  }
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
                      "Primary contact that owns a ticket"
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
export default CreateAPublicSchema
