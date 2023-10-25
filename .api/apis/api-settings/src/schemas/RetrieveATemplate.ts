const RetrieveATemplate = {
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
            "description": "ID of the template to retrieve"
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
        "template": {
          "type": "object",
          "properties": {
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "ed_instanceid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "ed_version": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Test 2"
              ]
            },
            "subject": {},
            "content": {
              "type": "string",
              "examples": [
                "sdsf"
              ]
            },
            "categoryid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "used": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "waitpreview": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "importnum": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-08-28 11:54:54"
              ]
            },
            "preview_content": {},
            "modified": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "hidden": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Template with id 10"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveATemplate
