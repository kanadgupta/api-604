const BulkUpdateDealOwners = {
  "body": {
    "type": "object",
    "properties": {
      "deals": {
        "type": "array",
        "items": {
          "properties": {
            "id": {
              "type": "string",
              "description": "id of the Deal",
              "examples": [
                1
              ]
            },
            "ownerId": {
              "type": "string",
              "description": "id of the Deal's Owner",
              "examples": [
                1
              ]
            }
          },
          "type": "object"
        }
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "success": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "1"
            ]
          }
        },
        "nochange": {
          "type": "array",
          "items": {
            "type": "string",
            "examples": [
              "3"
            ]
          }
        },
        "failed": {
          "type": "array",
          "items": {}
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
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
                  422
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "ownerId is required for a deal '1'."
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
export default BulkUpdateDealOwners
