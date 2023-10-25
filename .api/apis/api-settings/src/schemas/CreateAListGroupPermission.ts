const CreateAListGroupPermission = {
  "body": {
    "type": "object",
    "properties": {
      "listGroup": {
        "properties": {
          "listid": {
            "type": "integer",
            "description": "ID of the list",
            "format": "int32",
            "examples": [
              19
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "groupid": {
            "type": "integer",
            "description": "ID of the group that list should be associated with",
            "format": "int32",
            "examples": [
              1
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          }
        },
        "required": [
          "listid",
          "groupid"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "listGroup": {
          "type": "object",
          "properties": {
            "list": {
              "type": "integer",
              "default": 0,
              "examples": [
                19
              ]
            },
            "group": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "list": {
                  "type": "string",
                  "examples": [
                    "https://account.api-us1.com/api/3/listGroups/55/list"
                  ]
                },
                "group": {
                  "type": "string",
                  "examples": [
                    "https://account.api-us1.com/api/3/listGroups/55/group"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "55"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Forbidden"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateAListGroupPermission
