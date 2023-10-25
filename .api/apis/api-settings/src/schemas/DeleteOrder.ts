const DeleteOrder = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "ecomOrderId": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "The id of the order to delete."
          }
        },
        "required": [
          "ecomOrderId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default DeleteOrder
