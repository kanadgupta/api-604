const UpdateADealStage = {
  "body": {
    "type": "object",
    "properties": {
      "dealStage": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Deal stage's title",
            "examples": [
              "Qualifications - Low"
            ]
          },
          "group": {
            "type": "string",
            "description": "Deal stage's pipeline id",
            "examples": [
              "4"
            ]
          },
          "order": {
            "type": "integer",
            "description": "Order of the deal stage. If more than one deal stage share the same order value, the order of those deal stages may not be always the same",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "dealOrder": {
            "type": "string",
            "description": "Option and direction to be used to sort deals in the deal stage. The option and direction should be delimited by a space. Direction can be either \"ASC\" or \"DESC\". See [available options](#section-deal-stage-parameters-available-values)",
            "examples": [
              "title ASC"
            ]
          },
          "cardRegion1": {
            "type": "string",
            "description": "What to show in upper-left corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "examples": [
              "contact-orgname"
            ]
          },
          "cardRegion2": {
            "type": "string",
            "description": "What to show in upper-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "examples": [
              "next-action"
            ]
          },
          "cardRegion3": {
            "type": "string",
            "description": "Whether to show the avatar in Deal Cards. Can be one of `show-avatar` and `hide-avatar`. If set to `show-avatar`, deal cards will show the avatars. If set to `hide-avatar`, deal cards will hide the avatars",
            "examples": [
              "hide-avatar"
            ]
          },
          "cardRegion4": {
            "type": "string",
            "description": "What to show next to the avatar in Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "examples": [
              "contact-fullname-orgname"
            ]
          },
          "cardRegion5": {
            "type": "string",
            "description": "What to show in lower-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "examples": [
              "value"
            ]
          },
          "color": {
            "type": "string",
            "description": "Deal Stage's color. 6-character HEX color code without the hashtag. e.g. \"434343\" to assign the hex color value \"#434343\"",
            "examples": [
              "696969"
            ]
          },
          "width": {
            "type": "integer",
            "description": "Deal stage's width in pixels, without `px` unit",
            "format": "int32",
            "examples": [
              270
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
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
            "description": "Deal stage's id"
          }
        },
        "required": [
          "id"
        ]
      },
      {
        "type": "object",
        "properties": {
          "reorder": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`"
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
        "dealStage": {
          "type": "object",
          "properties": {
            "cardRegion1": {
              "type": "string",
              "examples": [
                "contact-orgname"
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
                "hide-avatar"
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
                "2017-03-01T15:55:58-06:00"
              ]
            },
            "color": {
              "type": "string",
              "examples": [
                "696969"
              ]
            },
            "dealOrder": {
              "type": "string",
              "examples": [
                "title ASC"
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
                "16"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "group": {
                  "type": "string",
                  "examples": [
                    "/api/3/dealStages/16/group"
                  ]
                }
              }
            },
            "order": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "title": {
              "type": "string",
              "examples": [
                "Qualifications - Low"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-03-01T16:03:57-06:00"
              ]
            },
            "width": {
              "type": "integer",
              "default": 0,
              "examples": [
                270
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
export default UpdateADealStage
