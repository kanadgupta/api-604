const UpdateAField = {
  "body": {
    "type": "object",
    "properties": {
      "field": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Possible Values: dropdown, hidden, checkbox, date, datetime, text, textarea, NULL, listbox, radio",
            "examples": [
              "textarea"
            ]
          },
          "title": {
            "type": "string",
            "description": "Title of the field being updated",
            "examples": [
              "Title"
            ]
          },
          "descript": {
            "type": "string",
            "description": "Description of field being updated",
            "examples": [
              "Field  description"
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
            "description": "Show this field in the contact list view (No longer Used)",
            "examples": [
              1
            ]
          },
          "visible": {
            "type": "boolean",
            "description": "Setting to show/hide field",
            "examples": [
              1
            ]
          },
          "service": {
            "type": "string",
            "description": "Possible Vales: nimble, contactually, mindbody, salesforce, highrise, google_spreadsheets, pipedrive, onepage, google_contacts, freshbooks, shopify, zendesk, etsy, NULL, bigcommerce, capsule, bigcommerce_oauth, sugarcrm, zohocrm, batchbook",
            "examples": [
              "google"
            ]
          },
          "ordernum": {
            "type": "string",
            "description": "Order of appearance in ‘My Fields’ tab.",
            "examples": [
              3
            ]
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
          "id": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the field to update"
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
        "field": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "Title"
              ]
            },
            "descript": {
              "type": "string",
              "examples": [
                "Field  description"
              ]
            },
            "type": {
              "type": "string",
              "examples": [
                "textarea"
              ]
            },
            "isrequired": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "perstag": {
              "type": "string",
              "examples": [
                "PERSONALIZEDTAG"
              ]
            },
            "defval": {
              "type": "string",
              "examples": [
                "Defaut Value"
              ]
            },
            "show_in_list": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "rows": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "cols": {
              "type": "integer",
              "default": 0,
              "examples": [
                2
              ]
            },
            "visible": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "service": {
              "type": "string",
              "examples": [
                "google"
              ]
            },
            "ordernum": {
              "type": "integer",
              "default": 0,
              "examples": [
                3
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-09-25T16:06:08-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-09-29T18:23:20-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "options": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/fields/3/options"
                  ]
                },
                "relations": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/fields/3/relations"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "3"
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
    }
  }
} as const;
export default UpdateAField
