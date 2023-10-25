const BulkCreateACustomDealFieldValue = {
  "body": {
    "type": "object",
    "properties": {
      "array": {
        "properties": {
          "dealId": {
            "type": "integer",
            "description": "The ID of the deal this field value relates to",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "customFieldId": {
            "type": "integer",
            "description": "The ID of the custom field metum this field value relates to",
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
          "dealId",
          "customFieldId",
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
            "the bulk insert was successful"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default BulkCreateACustomDealFieldValue
