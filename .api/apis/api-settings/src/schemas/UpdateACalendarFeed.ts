const UpdateACalendarFeed = {
  "body": {
    "type": "object",
    "properties": {
      "calendar": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of the calendar feed",
            "examples": [
              "Calendar Title"
            ]
          },
          "type": {
            "type": "string",
            "description": "Possible Values: 'All', 'Deals', or 'Contacts'",
            "examples": [
              "Deals"
            ]
          },
          "notification": {
            "type": "boolean",
            "description": "Whether or not this calendar has notifications"
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
          ":id": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the calendar feed to update"
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
                "Deals"
              ]
            },
            "token": {
              "type": "string",
              "examples": [
                "5540950ac4ed4f11591db934b701aff8"
              ]
            },
            "notification": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
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
                "2018-11-16T02:11:40-06:00"
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
    }
  }
} as const;
export default UpdateACalendarFeed
