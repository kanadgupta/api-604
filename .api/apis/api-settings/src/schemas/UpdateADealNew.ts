const UpdateADealNew = {
  "body": {
    "type": "object",
    "properties": {
      "deal": {
        "description": "deal.description",
        "properties": {
          "title": {
            "type": "string",
            "description": "Deal's title.",
            "examples": [
              "AC Deal"
            ]
          },
          "description": {
            "type": "string",
            "description": "Deal's description",
            "examples": [
              "This deal is an important deal"
            ]
          },
          "account": {
            "type": "string",
            "description": "Deal's account id",
            "examples": [
              "45"
            ]
          },
          "contact": {
            "type": "string",
            "description": "Deal's primary contact id.",
            "examples": [
              "51"
            ]
          },
          "value": {
            "type": "integer",
            "description": "Deal's value in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.",
            "format": "int32",
            "examples": [
              45600
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "currency": {
            "type": "string",
            "description": "Deal's currency in 3-digit ISO format, lowercased.",
            "examples": [
              "usd"
            ]
          },
          "group": {
            "type": "string",
            "description": "Deal's pipeline id. Deal's stage or `deal.stage` should belong to `deal.group`.",
            "examples": [
              "1"
            ]
          },
          "stage": {
            "type": "string",
            "description": "Deal's stage id. `deal.stage` should belong to Deal's pipeline or `deal.group`.",
            "default": "0",
            "examples": [
              "1"
            ]
          },
          "owner": {
            "type": "string",
            "description": "Deal's owner id.",
            "examples": [
              "1"
            ]
          },
          "percent": {
            "type": "integer",
            "description": "Deal's percentage.",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "status": {
            "type": "integer",
            "description": "Deal's status (0=\"open\", 1=\"won\", or 2=\"lost\")",
            "default": 0,
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "fields": {
            "type": "array",
            "description": "Deal's custom field values `{customFieldId: string, fieldValue: string, fieldCurrency?:string}[]`",
            "items": {
              "properties": {
                "customFieldId": {
                  "type": "integer",
                  "description": "Field ID, ID of the Custom Field Meta Data",
                  "format": "int32",
                  "examples": [
                    1
                  ],
                  "minimum": -2147483648,
                  "maximum": 2147483647
                },
                "fieldValue": {
                  "type": "string",
                  "description": "Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).",
                  "examples": [
                    "First field value"
                  ]
                },
                "fieldCurrency": {
                  "type": "string",
                  "description": "Required only for the `currency` field type. The three letter currency code for the currency value"
                }
              },
              "required": [
                "customFieldId",
                "fieldValue"
              ],
              "type": "object"
            }
          }
        },
        "required": [],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
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
            "description": "The Deal's id"
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
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateADealNew
