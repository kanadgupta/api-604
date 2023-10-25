const CreateContactTag = {
  "body": {
    "type": "object",
    "properties": {
      "contactTag": {
        "properties": {
          "contact": {
            "type": "integer",
            "description": "The id of the Contact",
            "default": 1,
            "format": "int32",
            "examples": [
              "1"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "tag": {
            "type": "integer",
            "description": "The id of the tag",
            "default": 20,
            "format": "int32",
            "examples": [
              "20"
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
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
        "contactTag": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2017-06-08T16:11:53-05:00"
              ]
            },
            "contact": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "contact": {
                  "type": "string",
                  "examples": [
                    "/1/contact"
                  ]
                },
                "tag": {
                  "type": "string",
                  "examples": [
                    "/1/tag"
                  ]
                }
              }
            },
            "tag": {
              "type": "string",
              "examples": [
                "20"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
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
                  404
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Not Found"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  "Contact not found"
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
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  422
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Missing attribute"
                ]
              },
              "source": {
                "type": "object",
                "properties": {
                  "pointer": {
                    "type": "string",
                    "examples": [
                      "/data/attributes/contact"
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
export default CreateContactTag
