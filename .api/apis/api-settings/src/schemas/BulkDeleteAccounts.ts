const BulkDeleteAccounts = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "ids": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32",
              "minimum": -2147483648,
              "maximum": 2147483647
            },
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Array with integers representing ID's of accounts to be deleted"
          }
        },
        "required": [
          "ids"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default BulkDeleteAccounts
