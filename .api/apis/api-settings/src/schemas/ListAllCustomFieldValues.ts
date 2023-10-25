const ListAllCustomFieldValues = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[fieldid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the field the value belongs to."
          },
          "filters[val]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Value of the custom field for a specific contact"
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
        "fieldValues": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "contact": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "field": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "value": {
                "type": "string",
                "examples": [
                  "Burger"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-09-29T12:03:11-06:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2018-09-29T12:03:11-06:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "owner": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/1/owner"
                    ]
                  },
                  "field": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/fieldValues/1/field"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "owner": {
                "type": "string",
                "examples": [
                  "5"
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
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllCustomFieldValues
