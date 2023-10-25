const BulkUpdateACustomAccountFieldValue = {
  "body": {
    "type": "object",
    "properties": {
      "array": {
        "properties": {
          "id": {
            "type": "integer",
            "description": "ID of the dealCustomFieldData to update",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "fieldValue": {
            "type": "string",
            "description": "Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)"
          },
          "fieldCurrency": {
            "type": "string",
            "description": "Currency code for the money value"
          }
        },
        "required": [
          "id",
          "fieldValue"
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
        "message": {
          "type": "string",
          "examples": [
            "AccountCustomFieldDatas with ID(s): 1, 2, 3, 4, 5 successfully bulk updated."
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default BulkUpdateACustomAccountFieldValue
