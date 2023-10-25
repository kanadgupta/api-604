const ListAllDealStages = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[title]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by deal stages' titles. Any stages whose titles partial-match the filter value are returned"
          },
          "filters[d_groupid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by pipeline's id"
          },
          "orders[title]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by deal stage's title"
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
        "dealStages": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cardRegion1": {
                "type": "string",
                "examples": [
                  "title"
                ]
              },
              "cardRegion2": {
                "type": "string",
                "examples": [
                  "next-action"
                ]
              },
              "cardRegion3": {
                "type": "string",
                "examples": [
                  "show-avatar"
                ]
              },
              "cardRegion4": {
                "type": "string",
                "examples": [
                  "contact-fullname-orgname"
                ]
              },
              "cardRegion5": {
                "type": "string",
                "examples": [
                  "value"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-03-01T15:52:42-06:00"
                ]
              },
              "color": {
                "type": "string",
                "examples": [
                  "32B0FC"
                ]
              },
              "dealOrder": {
                "type": "string",
                "examples": [
                  "next-action DESC"
                ]
              },
              "group": {
                "type": "string",
                "examples": [
                  "4"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "15"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealStages/15/group"
                    ]
                  }
                }
              },
              "order": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Initial Contact"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2017-03-01T15:52:42-06:00"
                ]
              },
              "width": {
                "type": "string",
                "examples": [
                  "280"
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
export default ListAllDealStages
