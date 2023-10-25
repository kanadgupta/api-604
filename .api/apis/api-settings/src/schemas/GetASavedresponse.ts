const GetASavedresponse = {
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
            "description": "ID of the saved Response to recieve"
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
        "savedResponse": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "Response title"
              ]
            },
            "subject": {
              "type": "string",
              "examples": [
                "Response subject"
              ]
            },
            "body": {
              "type": "string",
              "examples": [
                "Response body"
              ]
            },
            "ldate": {},
            "last_sent_user_id": {},
            "cdate": {
              "type": "string",
              "examples": [
                "2018-11-16T02:50:54-06:00"
              ]
            },
            "mdate": {},
            "links": {
              "type": "object",
              "properties": {
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/savedResponses/1/user"
                  ]
                },
                "savedResponseCategorySavedResponse": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/savedResponses/1/savedResponseCategorySavedResponse"
                  ]
                }
              }
            },
            "id": {
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
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default GetASavedresponse
