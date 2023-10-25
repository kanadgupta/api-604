const ListAllSavedResponses = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "savedResponses": {
          "type": "array",
          "items": {
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
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "1"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllSavedResponses
