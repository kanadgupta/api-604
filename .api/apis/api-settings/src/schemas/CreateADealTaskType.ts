const CreateADealTaskType = {
  "body": {
    "type": "object",
    "properties": {
      "dealTasktype": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Deal task type's title. The title should be unique among deal task types.",
            "examples": [
              "Skype"
            ]
          },
          "status": {
            "type": "string",
            "description": "0 - Active status, 1 - Disabled status",
            "enum": [
              "0",
              "1"
            ]
          }
        },
        "required": [
          "title"
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
        "dealTasktype": {
          "type": "object",
          "properties": {
            "cdate": {
              "type": "string",
              "examples": [
                "2017-03-02T14:28:53-06:00"
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
                "7"
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
                "2017-03-02T14:28:53-06:00"
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
export default CreateADealTaskType
