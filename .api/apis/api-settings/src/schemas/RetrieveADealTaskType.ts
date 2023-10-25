const RetrieveADealTaskType = {
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
            "description": "Deal task type's id"
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
        "dealTasktype": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2017-03-02T14:22:51-06:00"
              ]
            },
            "defduration": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "id": {
              "type": "string",
              "examples": [
                "5"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
            },
            "status": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "title": {
              "type": "string",
              "examples": [
                "Skype"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2017-03-02T14:22:51-06:00"
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
export default RetrieveADealTaskType
