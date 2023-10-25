const CreateADealNew = {
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
            "description": "Deal’s account id",
            "examples": [
              "45"
            ]
          },
          "contact": {
            "type": "string",
            "description": "Deal's primary contact's id.",
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
            "description": "Deal's pipeline id. Required if `deal.stage` is not provided. If `deal.group` is not provided, the stage's pipeline will be assigned to the deal automatically.",
            "examples": [
              "1"
            ]
          },
          "stage": {
            "type": "string",
            "description": "Deal's stage id. Required if `deal.group` is not provided. If `deal.stage` is not provided, the deal will be assigned with the first stage in the pipeline provided in `deal.group`.",
            "examples": [
              "1"
            ]
          },
          "owner": {
            "type": "string",
            "description": "Deal's owner id. Required if pipeline's auto-assign option is disabled.",
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
            "description": "Deal's status. See [available values](#section-deals-parameters-available-values).",
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
        "required": [
          "title",
          "value",
          "currency",
          "group",
          "stage",
          "owner"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateADealNew
