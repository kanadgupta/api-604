const CreateUser = {
  "body": {
    "type": "object",
    "properties": {
      "user": {
        "properties": {
          "username": {
            "type": "string",
            "description": "Username",
            "examples": [
              "jdoe"
            ]
          },
          "email": {
            "type": "string",
            "description": "Email address",
            "examples": [
              "johndoe@example.com"
            ]
          },
          "firstName": {
            "type": "string",
            "description": "First name",
            "examples": [
              "John"
            ]
          },
          "lastName": {
            "type": "string",
            "description": "Last name",
            "examples": [
              "Doe"
            ]
          },
          "group": {
            "type": "integer",
            "description": "Group ID",
            "default": null,
            "format": "int32",
            "examples": [
              4
            ],
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "password": {
            "type": "string",
            "description": "Plain text password",
            "examples": [
              "myPa$$w0rd"
            ]
          }
        },
        "required": [],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "user": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "examples": [
                "jdoe"
              ]
            },
            "email": {
              "type": "string",
              "examples": [
                "johndoe@example.com"
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
            "lang": {
              "type": "string",
              "examples": [
                "english"
              ]
            },
            "localZoneid": {
              "type": "string",
              "examples": [
                "America/New_York"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2022-02-02T16:01:44-06:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2022-02-02T16:01:44-06:00"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "lists": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/lists"
                  ]
                },
                "userGroup": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/userGroup"
                  ]
                },
                "dealGroupTotals": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/dealGroupTotals"
                  ]
                },
                "dealGroupUsers": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/dealGroupUsers"
                  ]
                },
                "configs": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/configs"
                  ]
                },
                "dealConnection": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/dealConnection"
                  ]
                },
                "userConversationsPermission": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/userConversationsPermission"
                  ]
                },
                "seatUser": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/users/3/seatUser"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "3"
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
export default CreateUser
