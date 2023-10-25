const ListAllPipelines = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[title]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by pipeline's title. The filter matches any pipeline titles that contain the provided title (i.e. \"Contact\" matches all of \"In Contact\", \"To Contact\", and \"Contact Pipeline\")."
          },
          "filters[have_stages]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by whether pipelines have deal stages. Can be either `1` or `0`. If `1`, only pipelines with at least one stage will be returned."
          },
          "orders[title]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by Pipeline's title"
          },
          "orders[popular]": {
            "type": "string",
            "default": "ASC",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by number of deals each pipeline has. If pipelines have same number of deals, pipelines' created dates are used to determine the order."
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
        "dealGroups": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "allgroups": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "allusers": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "autoassign": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2017-01-16T14:51:57-06:00"
                ]
              },
              "currency": {
                "type": "string",
                "examples": [
                  "usd"
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
                  "dealGroupGroups": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroups/1/dealGroupGroups"
                    ]
                  },
                  "dealGroupUsers": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroups/1/dealGroupUsers"
                    ]
                  },
                  "stages": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroups/1/stages"
                    ]
                  }
                }
              },
              "stages": {
                "type": "array",
                "items": {
                  "type": "string",
                  "examples": [
                    "1"
                  ]
                }
              },
              "title": {
                "type": "string",
                "examples": [
                  "Pipeline A"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2017-03-01T11:06:32-06:00"
                ]
              }
            }
          }
        },
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
                  "2017-01-20T09:27:32-06:00"
                ]
              },
              "color": {
                "type": "string",
                "examples": [
                  "C481DF"
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
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealStages/1/group"
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
                  "Stage 1"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2017-03-01T11:06:14-06:00"
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
export default ListAllPipelines
