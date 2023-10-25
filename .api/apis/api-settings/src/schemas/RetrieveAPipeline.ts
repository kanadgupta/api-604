const RetrieveAPipeline = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Pipeline's id"
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
        "dealGroup": {
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
                "0"
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
                "2017-03-30T12:11:30-05:00"
              ]
            },
            "currency": {
              "type": "string",
              "examples": [
                "eur"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "4"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "dealGroupGroups": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealGroups/4/dealGroupGroups"
                  ]
                },
                "dealGroupUsers": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealGroups/4/dealGroupUsers"
                  ]
                },
                "stages": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealGroups/4/stages"
                  ]
                }
              }
            },
            "stages": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "9"
                ]
              }
            },
            "title": {
              "type": "string",
              "examples": [
                "Qualifications"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-03-30T13:44:32-05:00"
              ]
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
              "cdate": {},
              "color": {
                "type": "string",
                "examples": [
                  "18D499"
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
                  "9"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealStages/9/group"
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
                  "To Contact"
                ]
              },
              "udate": {},
              "width": {
                "type": "string",
                "examples": [
                  "280"
                ]
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
export default RetrieveAPipeline
