const CreateADealStage = {
  "body": {
    "type": "object",
    "properties": {
      "dealStage": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Deal stage's title",
            "examples": [
              "Initial Contact"
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
            "description": "Order of the deal stage. If more than one deal stage share the same order value, the order of those deal stages may not be always the same. If `dealStage.order` is not provided, the order is assigned with `(the highest order of deal stages within the same pipeline) + 1`",
            "default": null,
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
            "default": "next-action DESC",
            "examples": [
              "next-action DESC"
            ]
          },
          "cardRegion1": {
            "type": "string",
            "description": "What to show in upper-left corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "default": "title",
            "examples": [
              "title"
            ]
          },
          "cardRegion2": {
            "type": "string",
            "description": "What to show in upper-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "default": "next-action",
            "examples": [
              "next-action"
            ]
          },
          "cardRegion3": {
            "type": "string",
            "description": "Whether to show the avatar in Deal Cards. Can be one of `show-avatar` and `hide-avatar`. If set to `show-avatar`, deal cards will show the avatars. If set to `hide-avatar`, deal cards will hide the avatars",
            "default": "show-avatar",
            "examples": [
              "show-avatar"
            ]
          },
          "cardRegion4": {
            "type": "string",
            "description": "What to show next to the avatar in Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "default": "contact-fullname-orgname",
            "examples": [
              "contact-fullname-orgname"
            ]
          },
          "cardRegion5": {
            "type": "string",
            "description": "What to show in lower-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)",
            "default": "value",
            "examples": [
              "value"
            ]
          },
          "color": {
            "type": "string",
            "description": "Deal Stage's color. 6-character HEX color code without the hashtag. e.g. \"434343\" to assign the hex color value \"#434343\"",
            "default": "3f3f3f",
            "examples": [
              "32B0FC"
            ]
          },
          "width": {
            "type": "integer",
            "description": "Deal stage's width in pixels, without `px` unit",
            "default": 280,
            "format": "int32",
            "examples": [
              360
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "title",
          "group"
        ],
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
                "2017-03-01T15:55:58-06:00"
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
                "Initial Contact"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-03-01T15:55:58-06:00"
              ]
            },
            "width": {
              "type": "integer",
              "default": 0,
              "examples": [
                280
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
export default CreateADealStage
