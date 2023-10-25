const CreateAChildSchema = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Id of the parent schema the new child schema will extend"
          }
        },
        "required": [
          "id"
        ]
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
                "475c4ea7-65cc-4d59-a690-6ac232633fca"
              ]
            },
            "parentId": {
              "type": "string",
              "examples": [
                "230f6065-a8e5-4df2-a70a-f6832d004d8d"
              ]
            },
            "slug": {
              "type": "string",
              "examples": [
                "app-cxapp-studio-app-id-event-tickets"
              ]
            },
            "appId": {
              "type": "string",
              "examples": [
                "cxapp-studio-app-id"
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
                  },
                  "inherited": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
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
                  "inherited": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
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
export default CreateAChildSchema
