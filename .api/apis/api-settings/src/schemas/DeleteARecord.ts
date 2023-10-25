const DeleteARecord = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "schemaId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of schema"
          },
          "recordId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of record"
          }
        },
        "required": [
          "schemaId",
          "recordId"
        ]
      }
    ]
  },
  "response": {
    "202": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  400
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Bad Request"
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default DeleteARecord
