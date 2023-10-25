const RetrieveADeal = {
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
            "description": "The Deal's id"
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
        "deal": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "isDisabled": {
              "type": "boolean",
              "default": true,
              "examples": [
                true
              ]
            },
            "title": {
              "type": "string",
              "examples": [
                "Demo Requested"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveADeal
