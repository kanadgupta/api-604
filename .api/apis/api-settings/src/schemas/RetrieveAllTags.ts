const RetrieveAllTags = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "search": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by name of tag(s); \"contains\" operator is assumed."
          },
          "filters[search][<operator>]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filters tags by tag name according to the operator specified. Operators currently supported: `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `contains`, `starts_with`"
          },
          "orders[search]": {
            "type": "string",
            "enum": [
              "weight",
              "asc",
              "desc"
            ],
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Orders filtered results by weight, ascending order, or descending order. If `weight` is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results."
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
        "tags": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "tagType": {
                "type": "string",
                "examples": [
                  "contact"
                ]
              },
              "tag": {
                "type": "string",
                "examples": [
                  "one"
                ]
              },
              "description": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-17T09:43:15-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "contactGoalTags": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/tags/1/contactGoalTags"
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "5"
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
export default RetrieveAllTags
