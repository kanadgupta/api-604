const UpdateAnAssociation1 = {
  "body": {
    "type": "object",
    "properties": {
      "accountContact": {
        "properties": {
          "account": {
            "type": "integer",
            "description": "Account ID",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "contact": {
            "type": "integer",
            "description": "Contact ID",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "jobTitle": {
            "type": "string",
            "description": "Job Title of the contact at the account",
            "examples": [
              "Product Manager"
            ]
          }
        },
        "required": [
          "account",
          "contact"
        ],
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
            "description": "Association's ID"
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
      "type": "object",
      "properties": {
        "accountContact": {
          "type": "object",
          "properties": {
            "account": {
              "type": "string",
              "examples": [
                "3"
              ]
            },
            "contact": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "jobTitle": {
              "type": "string",
              "examples": [
                "CEO"
              ]
            },
            "createdTimestamp": {
              "type": "string",
              "examples": [
                "2019-06-26T11:26:15-05:00"
              ]
            },
            "updatedTimestamp": {
              "type": "string",
              "examples": [
                "2019-06-26T11:29:57-05:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "account": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/accountContacts/19/account"
                  ]
                },
                "contact": {
                  "type": "string",
                  "examples": [
                    "http://hosted.localdev/api/3/accountContacts/19/contact"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "19"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default UpdateAnAssociation1
