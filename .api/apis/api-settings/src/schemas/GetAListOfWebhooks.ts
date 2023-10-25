const GetAListOfWebhooks = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[name]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by webhook name"
          },
          "filters[url]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by webhook url"
          },
          "filters[listid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by webhook's associated list"
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
export default GetAListOfWebhooks
