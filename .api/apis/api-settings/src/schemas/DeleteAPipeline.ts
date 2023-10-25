const DeleteAPipeline = {
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
            "description": "Pipeline's id"
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
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default DeleteAPipeline
