const UpdateAPipeline = {
  "body": {
    "type": "object",
    "properties": {
      "dealGroup": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Pipeline's title",
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
                "2017-03-30T12:11:30-05:00"
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
                  "4"
                ]
              }
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
                  "4"
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
                  "dealGroup": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroupUsers/4/dealGroup"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "/api/3/dealGroupUsers/4/user"
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
export default UpdateAPipeline
