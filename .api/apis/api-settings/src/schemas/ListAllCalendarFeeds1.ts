const ListAllCalendarFeeds1 = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          ":id": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the calendar feed to retrieve"
          }
        },
        "required": [
          ":id"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "calendar": {
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
                "5540950ac4ed4f11591db934b701aff8"
              ]
            },
            "notification": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-11-15T22:26:35-06:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-11-15T22:26:35-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "calendarRels": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/calendars/1/calendarRels"
                  ]
                },
                "calendarUsers": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/calendars/1/calendarUsers"
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
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Calendar with id 1"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllCalendarFeeds1
