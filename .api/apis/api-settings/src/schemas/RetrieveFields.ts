const RetrieveFields = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int32",
            "default": 100,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The number of fields returned per request."
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
    }
  }
} as const;
export default RetrieveFields
