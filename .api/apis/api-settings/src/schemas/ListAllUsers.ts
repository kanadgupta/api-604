const ListAllUsers = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "users": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "username": {
                "type": "string",
                "examples": [
                  "admin"
                ]
              },
              "firstName": {
                "type": "string",
                "examples": [
                  "John"
                ]
              },
              "lastName": {
                "type": "string",
                "examples": [
                  "Doe"
                ]
              },
              "email": {
                "type": "string",
                "examples": [
                  "johndoe@activecampaign.com"
                ]
              },
              "phone": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "signature": {},
              "links": {
                "type": "object",
                "properties": {
                  "lists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/users/1/lists"
                    ]
                  },
                  "userGroup": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/users/1/userGroup"
                    ]
                  },
                  "dealGroupTotals": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/users/1/dealGroupTotals"
                    ]
                  },
                  "dealGroupUsers": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/users/1/dealGroupUsers"
                    ]
                  },
                  "configs": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/users/1/configs"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              }
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
              "type": "string",
              "examples": [
                "2"
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
export default ListAllUsers
