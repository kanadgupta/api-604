const DeleteACustomFieldRelationshipToLists = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "fieldRelId": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Field relationship ID to be deleted"
          }
        },
        "required": [
          "fieldRelId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "Forbidden"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default DeleteACustomFieldRelationshipToLists
