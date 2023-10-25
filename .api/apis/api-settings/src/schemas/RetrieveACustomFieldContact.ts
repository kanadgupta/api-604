const RetrieveACustomFieldContact = {
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
            "description": "ID of the field to retrieve"
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
        "fieldOptions": {
          "type": "array",
          "items": {}
        },
        "fieldRels": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "field": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "relid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "dorder": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-17T11:09:43-05:00"
                ]
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "field": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "test"
              ]
            },
            "descript": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "type": {
              "type": "string",
              "examples": [
                "text"
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
                "TEST"
              ]
            },
            "defval": {
              "type": "string",
              "examples": [
                ""
              ]
            },
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
                "1"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-08-17T11:09:43-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-08-17T11:09:43-05:00"
              ]
            },
            "options": {
              "type": "array",
              "items": {}
            },
            "relations": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            },
            "links": {
              "type": "object",
              "properties": {
                "options": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/fields/1/options"
                  ]
                },
                "relations": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/fields/1/relations"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "1"
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
export default RetrieveACustomFieldContact
