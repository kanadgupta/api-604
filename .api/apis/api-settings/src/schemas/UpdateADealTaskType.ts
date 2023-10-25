const UpdateADealTaskType = {
  "body": {
    "type": "object",
    "properties": {
      "dealTasktype": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Deal task type's title. The title should be unique among deal task types.",
            "examples": [
              "Meet in person"
            ]
          },
          "status": {
            "type": "string",
            "description": "0 - Active status, 1 - Disabled status\n\nDefault: `0`",
            "default": "0",
            "enum": [
              "0",
              "1"
            ],
            "examples": [
              1
            ]
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
            "description": "Deal task type's id"
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
        "dealTasktype": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2017-03-02T14:28:53-06:00"
              ]
            },
            "defduration": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "7"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
            },
            "status": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "title": {
              "type": "string",
              "examples": [
                "Meet in person"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-03-02T14:32:20-06:00"
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
export default UpdateADealTaskType
