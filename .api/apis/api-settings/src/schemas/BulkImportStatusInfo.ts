const BulkImportStatusInfo = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "batchId": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "examples": [
            "completed"
          ]
        },
        "success": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "123"
            ]
          }
        },
        "failure": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "invalid.email@invalidDomain"
            ]
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {
        "success": {
          "type": "integer",
          "default": 0,
          "examples": [
            0
          ]
        },
        "message": {
          "type": "string",
          "examples": [
            "'batchId' is a required field."
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default BulkImportStatusInfo
