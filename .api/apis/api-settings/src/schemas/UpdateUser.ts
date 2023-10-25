const UpdateUser = {
  "body": {
    "type": "object",
    "properties": {
      "user": {
        "properties": {
          "username": {
            "type": "string",
            "description": "Username. Username cannot be changed!"
          },
          "password": {
            "type": "string",
            "description": "Password. Example: 'newpassword'"
          },
          "email": {
            "type": "string",
            "description": "Email address of the user. Example: 'test@example.com'"
          },
          "firstName": {
            "type": "string",
            "description": "First name of the user. Example: 'FirstName'"
          },
          "lastName": {
            "type": "string",
            "description": "Last name of the user. Example: 'LastName'"
          },
          "group": {
            "type": "integer",
            "description": "Assign to Groups",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
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
            "description": "ID of the user"
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
        "userGroups": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "userid": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "groupid": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "group": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/userGroups/3/group"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/userGroups/3/user"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "group": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "user": {
                "type": "string",
                "examples": [
                  "3"
                ]
              }
            }
          }
        },
        "user": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "examples": [
                "user"
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
                "johndoe@example.com"
              ]
            },
            "phone": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "signature": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "userGroup": {
              "type": "string",
              "examples": [
                "3"
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
export default UpdateUser
