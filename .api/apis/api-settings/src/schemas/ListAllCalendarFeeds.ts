const ListAllCalendarFeeds = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "calendars": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "userid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Calendar Title"
                ]
              },
              "type": {
                "type": "string",
                "examples": [
                  "All"
                ]
              },
              "token": {
                "type": "string",
                "examples": [
                  "4d9af6b9d5056ef1ca4a31c12c0e105c"
                ]
              },
              "notification": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-11-15T22:36:05-06:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2018-11-15T22:36:05-06:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "calendarRels": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/calendars/2/calendarRels"
                    ]
                  },
                  "calendarUsers": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/:version/calendars/2/calendarUsers"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "2"
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
export default ListAllCalendarFeeds
