const RetrieveContactAccountContacts = {
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
            "description": "ID of the contact"
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
        "accountContacts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "account": {
                "type": "string",
                "examples": [
                  "9"
                ]
              },
              "contact": {
                "type": "string",
                "examples": [
                  "7"
                ]
              },
              "jobTitle": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "createdTimestamp": {
                "type": "string",
                "examples": [
                  "2021-05-21T16:30:23-05:00"
                ]
              },
              "updatedTimestamp": {
                "type": "string",
                "examples": [
                  "2021-05-21T16:30:23-05:00"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "account": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/accountContacts/7/account"
                    ]
                  },
                  "contact": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/accountContacts/7/contact"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "7"
                ]
              }
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
            "No Result found for Subscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactAccountContacts
