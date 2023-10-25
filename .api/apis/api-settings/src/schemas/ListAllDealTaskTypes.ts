const ListAllDealTaskTypes = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "dealTasktypes": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cdate": {},
              "defduration": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "links": {
                "type": "array",
                "items": {}
              },
              "status": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Call"
                ]
              },
              "udate": {}
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "4"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllDealTaskTypes
