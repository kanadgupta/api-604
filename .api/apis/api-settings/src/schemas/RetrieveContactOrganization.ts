const RetrieveContactOrganization = {
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
        "organization": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "M Corp"
              ]
            },
            "created_timestamp": {
              "type": "string",
              "examples": [
                "2021-05-21T16:15:47-05:00"
              ]
            },
            "updated_timestamp": {
              "type": "string",
              "examples": [
                "2021-08-24T06:28:56-05:00"
              ]
            },
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "9"
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
            "No Result found for Subscriber with id 100"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactOrganization
