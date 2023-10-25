const ListAllAccounts = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "search": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Search by name"
          },
          "count_deals": {
            "type": "boolean",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Whether to compute the contactCount and dealCount counts for the number of contacts/deals associated with each account. Set it to true to include the right counts. If set to false or omitted from the call, then contactCount and dealCount will not be counted and be simply displayed as 0."
          }
        },
        "required": []
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
export default ListAllAccounts
