const CreateAPipeline = {
  "body": {
    "type": "object",
    "properties": {
      "dealGroup": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Pipeline's title.",
            "examples": [
              "Qualifications"
            ]
          },
          "currency": {
            "type": "string",
            "description": "Default currency to assign to new deals that belong to this deal group.",
            "examples": [
              "eur"
            ]
          },
          "allgroups": {
            "type": "integer",
            "description": "Whether all user groups have permission to manage this pipeline. Can be either `1` or `0`. If `1`, all user groups can manage this pipeline. If `0`, only user groups in `dealGroup.groups` parameter can manage this pipeline.",
            "default": 1,
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "allusers": {
            "type": "integer",
            "description": "Whether new deals get auto-assigned to all users. Can be either `1` or `0`. If `1`, new deals are auto-assigned to all users unless auto-assign is disabled. If `0`, new deals are auto-assigned to only the users in `dealGroup.users` parameter.",
            "default": 0,
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "autoassign": {
            "type": "integer",
            "description": "Deal auto-assign option. Can be one of `0`, `1`, and `2`. If `0`, auto-assign is disabled. If `1`, Round Robin method is used to auto-assign new deals. If `2`, deals are distributed based on deal values.",
            "default": 1,
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "users": {
            "type": "array",
            "description": "List of user ids to auto-assign new deals to unless auto-assign option is disabled.",
            "items": {
              "type": "string",
              "examples": [
                "3"
              ]
            }
          },
          "groups": {
            "type": "array",
            "description": "List of user group ids to allow managing this pipeline.",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "title",
          "currency"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "dealGroup": {
          "type": "object",
          "properties": {
            "allgroups": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "allusers": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "autoassign": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2017-03-30T12:12:41-05:00"
              ]
            },
            "currency": {
              "type": "string",
              "examples": [
                "eur"
              ]
            },
            "dealGroupGroups": {
              "type": "array",
              "items": {}
            },
            "dealGroupUsers": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "6"
                ]
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "5"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "dealGroupGroups": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealGroups/5/dealGroupGroups"
                  ]
                },
                "dealGroupUsers": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealGroups/5/dealGroupUsers"
                  ]
                },
                "stages": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealGroups/5/stages"
                  ]
                }
              }
            },
            "stages": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "12"
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
                "2017-03-30T12:12:41-05:00"
              ]
            }
          }
        },
        "dealGroupGroups": {
          "type": "array",
          "items": {}
        },
        "dealGroupUsers": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cdate": {},
              "dealGroup": {
                "type": "string",
                "examples": [
                  "5"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "6"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "dealGroup": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroupUsers/6/dealGroup"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroupUsers/6/user"
                    ]
                  }
                }
              },
              "user": {
                "type": "string",
                "examples": [
                  "3"
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
                  "5"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "12"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "group": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealStages/12/group"
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
export default CreateAPipeline
