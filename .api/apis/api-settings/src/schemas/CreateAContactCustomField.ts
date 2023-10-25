const CreateAContactCustomField = {
  "body": {
    "type": "object",
    "properties": {
      "field": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of the field being created",
            "examples": [
              "Field Title"
            ]
          },
          "type": {
            "type": "string",
            "description": "Possible Values: dropdown, hidden, checkbox, date, text, datetime, textarea, NULL, listbox, radio",
            "examples": [
              "textarea"
            ]
          },
          "descript": {
            "type": "string",
            "description": "Description of field being created",
            "examples": [
              "Field description"
            ]
          },
          "perstag": {
            "type": "string",
            "description": "The perstag that represents the field being created",
            "examples": [
              "Personalized Tag"
            ]
          },
          "defval": {
            "type": "string",
            "description": "Default value of the field being created",
            "examples": [
              "Defaut Value"
            ]
          },
          "show_in_list": {
            "type": "boolean",
            "description": "Show this field in the contact list view (Deprecated - no longer used)"
          },
          "rows": {
            "type": "integer",
            "description": "Num of rows for a textarea (Deprecated - no longer used)",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "cols": {
            "type": "integer",
            "description": "Num of columns for a textarea (Deprecated - no longer used)",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "visible": {
            "type": "boolean",
            "description": "Show or hide this field when using the Form Builder",
            "examples": [
              1
            ]
          },
          "service": {
            "type": "string",
            "description": "Possible Vales: nimble, contactually, mindbody, salesforce, highrise, google_spreadsheets, pipedrive, onepage, google_contacts, freshbooks, shopify, zendesk, etsy, NULL, bigcommerce, capsule, bigcommerce_oauth, sugarcrm, zohocrm, batchbook"
          },
          "ordernum": {
            "type": "integer",
            "description": "Order of appearance in ‘My Fields’ tab.",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "title",
          "type"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "fieldOptions": {
          "type": "array",
          "items": {}
        },
        "fieldRels": {
          "type": "array",
          "items": {}
        },
        "fields": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "Another Test Title"
                ]
              },
              "descript": {},
              "type": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "isrequired": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "perstag": {
                "type": "string",
                "examples": [
                  "ANOTHER_TEST_TITLE"
                ]
              },
              "defval": {},
              "show_in_list": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "rows": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cols": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "visible": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "service": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "ordernum": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-11-15T21:43:38-06:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2018-11-15T21:43:38-06:00"
                ]
              },
              "options": {
                "type": "array",
                "items": {}
              },
              "relations": {
                "type": "array",
                "items": {}
              },
              "links": {
                "type": "object",
                "properties": {
                  "options": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/fields/2/options"
                    ]
                  },
                  "relations": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/fields/2/relations"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "2"
                ]
              }
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "2"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Forbidden"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
      "oneOf": [
        {
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
                      "The field title was not provided."
                    ]
                  },
                  "detail": {
                    "type": "string",
                    "examples": [
                      ""
                    ]
                  },
                  "code": {
                    "type": "string",
                    "examples": [
                      "field_missing"
                    ]
                  }
                }
              }
            }
          }
        },
        {
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
                      "There is already a field with this personalization tag"
                    ]
                  },
                  "detail": {
                    "type": "string",
                    "examples": [
                      "There is already a personalization tag named 'Perstag' -- choose another name"
                    ]
                  },
                  "code": {
                    "type": "string",
                    "examples": [
                      "field_invalid"
                    ]
                  }
                }
              }
            }
          }
        },
        {
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
                      "There is already a field with this title"
                    ]
                  },
                  "detail": {
                    "type": "string",
                    "examples": [
                      "There is already a field named 'Test Title' -- choose another name"
                    ]
                  },
                  "code": {
                    "type": "string",
                    "examples": [
                      "duplicate"
                    ]
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
export default CreateAContactCustomField
