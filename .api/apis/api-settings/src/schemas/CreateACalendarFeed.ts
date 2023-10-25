const CreateACalendarFeed = {
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
              "All"
            ]
          },
          "notification": {
            "type": "boolean",
            "description": "Whether or not this calendar has notifications",
            "examples": [
              1
            ]
          }
        },
        "required": [
          "title",
          "type"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "calendar": {
          "type": "object",
          "properties": {
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
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "notification": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
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
            "token": {
              "type": "string",
              "examples": [
                "5540950ac4ed4f11591db934b701aff8"
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
export default CreateACalendarFeed
