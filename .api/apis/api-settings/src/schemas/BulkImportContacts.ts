const BulkImportContacts = {
  "body": {
    "type": "object",
    "required": [
      "contacts"
    ],
    "properties": {
      "contacts": {
        "type": "array",
        "description": "An array of objects containing information about a single contact. Up to 250 contacts may be included in a single request. The suggested minimum number of contacts is 10. If less than that, then contact/sync api request should be used.",
        "items": {
          "properties": {
            "email": {
              "type": "string",
              "description": "The contact's email.",
              "examples": [
                "someone@somewhere.com"
              ]
            },
            "first_name": {
              "type": "string",
              "description": "The contact's first name",
              "examples": [
                "Jane"
              ]
            },
            "last_name": {
              "type": "string",
              "description": "The contact's last name.",
              "examples": [
                "Doe"
              ]
            },
            "phone": {
              "type": "string",
              "description": "The contact’s phone number.",
              "examples": [
                "123-456-7890"
              ]
            },
            "customer_acct_name": {
              "type": "string",
              "description": "The name of the contact’s account.",
              "examples": [
                "ActiveCampaign"
              ]
            },
            "tags": {
              "type": "array",
              "description": "Each string in the array will be added as a single tag to the contact. New tags will be created if they do not already exist.",
              "default": [],
              "items": {
                "type": "string",
                "examples": [
                  "dictumst"
                ]
              }
            },
            "fields": {
              "type": "array",
              "description": "A list of custom fields to apply to the contact. Each field must contain two fields: Each contact may have up to N custom fields.",
              "items": {
                "properties": {
                  "id": {
                    "type": "integer",
                    "description": "The ID of the custom field. Custom fields must be referenced by the ID that ActiveCampaign assigns to them. You can retrieve the ID number for a custom field by using the \"List all custom fields\" API call.",
                    "format": "int32",
                    "examples": [
                      1
                    ],
                    "minimum": -2147483648,
                    "maximum": 2147483647
                  },
                  "value": {
                    "type": "string",
                    "description": "The value of the custom field. Multiple values may be populated for multi-value fields by separating the different values by the double-pipe delimiter (“||”).",
                    "examples": [
                      "foo"
                    ]
                  }
                },
                "required": [
                  "id",
                  "value"
                ],
                "type": "object"
              }
            },
            "subscribe": {
              "type": "array",
              "description": "An array of lists to subscribe the contact to. Contacts may not be subscribed to lists which they have previously unsubscribed from. Each list object contains a single field.",
              "items": {
                "properties": {
                  "listid": {
                    "type": "string",
                    "description": "The ID of the list to subscribe the contact to or unsubscribe the contact from. Lists must be referenced by the ID that ActiveCampaign assigns to them.  You can find the list ID by clicking the list in your ActiveCampaign account then viewing the URL bar. It will look something like this: /app/contacts/?listid=19&status=1  You can also retrieve the ID number for a list by using the \"Retrieve all lists\" API call.",
                    "examples": [
                      1
                    ]
                  }
                },
                "type": "object"
              }
            },
            "unsubscribe": {
              "type": "array",
              "description": "An array of lists to unsubscribe the contact to. Each list object contains a single field.",
              "items": {
                "properties": {
                  "listid": {
                    "type": "string",
                    "description": "The ID of the list to subscribe the contact to or unsubscribe the contact from. Lists must be referenced by the ID that ActiveCampaign assigns to them.  You can find the list ID by clicking the list in your ActiveCampaign account then viewing the URL bar. It will look something like this: /app/contacts/?listid=19&status=1  You can also retrieve the ID number for a list by using the \"Retrieve all lists\" API call.",
                    "examples": [
                      3
                    ]
                  }
                },
                "type": "object"
              }
            }
          },
          "required": [
            "email"
          ],
          "type": "object"
        }
      },
      "callback": {
        "type": "object",
        "description": "Callback function to notify users when an import is complete.",
        "required": [
          "url",
          "requestType"
        ],
        "properties": {
          "url": {
            "type": "string",
            "description": "The URL endpoint which the importer will make a request to once the import has completed.",
            "examples": [
              "www.your_web_server.com"
            ]
          },
          "requestType": {
            "type": "string",
            "description": "Can be set to either “GET” or “POST”. Determines the type of HTTP request which will be sent to the specified endpoint.",
            "default": "POST",
            "examples": [
              "POST"
            ]
          },
          "detailed_results": {
            "type": "string",
            "description": "When set to “true” and the requestType parameter is set to “POST”, the callback will include the number of successes and failures in the originating request, as well as an array of error messages for each failed contact.",
            "default": "true",
            "examples": [
              "true"
            ]
          },
          "params": {
            "type": "array",
            "description": "A list of parameters to include in the callback request. Add each parameter in the form of a key-value pair. For a GET request, each parameter will be appended to the end of the URL in a query string. For a POST request, parameters will be included in the body of the request.",
            "items": {
              "properties": {
                "key": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "headers": {
            "type": "array",
            "description": "A list of headers to include in the callback request. Add each header in the form of a key-value pair.",
            "items": {
              "properties": {
                "key": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          }
        }
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "Content-Type": {
            "type": "string",
            "default": "application/json",
            "$schema": "https://json-schema.org/draft/2020-12/schema#"
          },
          "Api-Token": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "Success": {
          "type": "integer",
          "default": 0,
          "examples": [
            1
          ]
        },
        "queued_contacts": {
          "type": "integer",
          "default": 0,
          "examples": [
            1
          ]
        },
        "batchId": {
          "type": "string",
          "examples": [
            "0641fbdd-f62f-4c2c-ba02-3a83d5d11ac9"
          ]
        },
        "message": {
          "type": "string",
          "examples": [
            "Contact import queued"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "400": {
      "oneOf": [
        {
          "title": "Contact Create Fail",
          "type": "object",
          "properties": {
            "success": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "message": {
              "type": "string",
              "examples": [
                "JSON payload did not pass validation. Please fix failure Reasons and retry. The import was not queued for processing."
              ]
            },
            "failureReasons": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "contact": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      230
                    ]
                  },
                  "failureReason": {
                    "type": "string",
                    "examples": [
                      "Field‘ email’ incorrect format"
                    ]
                  }
                }
              }
            }
          }
        },
        {
          "title": "Other Error",
          "type": "object",
          "properties": {
            "success": {
              "type": "integer",
              "default": 0,
              "examples": [
                0
              ]
            },
            "message": {
              "type": "string",
              "examples": [
                "Rate limit exceeded."
              ]
            },
            "failureReasons": {
              "type": "array",
              "items": {
                "type": "string",
                "examples": [
                  "Up to 100 imports may be requested per minute.Please batch contacts into larger requests, or retry this request in a minute."
                ]
              }
            }
          }
        }
      ],
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default BulkImportContacts
