const SetConfig = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the config to edit"
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
        "config": {
          "type": "object",
          "properties": {
            "keyname": {
              "type": "string",
              "examples": [
                "pagination.users_index"
              ]
            },
            "section": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "item": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "val": {
              "type": "string",
              "examples": [
                "20"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-08-08T13:38:38-05:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-09-20T14:07:07-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "owner": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/configs/6/owner"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "6"
              ]
            },
            "owner": {
              "type": "string",
              "examples": [
                "1"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for ConfigResult with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default SetConfig
