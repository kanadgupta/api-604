const RetrieveAnAccount = {
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
            "description": "Account's ID"
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
        "account": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "Example Account"
              ]
            },
            "accountUrl": {
              "type": "string",
              "examples": [
                "https://www.example.com"
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2019-05-15T15:58:16-05:00"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2019-05-15T15:58:16-05:00"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
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
export default RetrieveAnAccount
