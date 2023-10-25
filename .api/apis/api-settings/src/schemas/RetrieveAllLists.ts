const RetrieveAllLists = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[name]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the name of the list"
          },
          "limit": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Limit the number of returned results"
          },
          "filters[name][<operator>]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filters lists by list name according to the operator specified. Operators currently supported: eq, neq, lt, lte, gt, gte, contains, starts_with"
          },
          "orders[name]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Orders filtered results by weight, ascending order, or descending order. If weight is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results."
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
        "lists": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "stringid": {
                "type": "string",
                "examples": [
                  "email-subscription"
                ]
              },
              "userid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  "Email Subscription"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-06T16:30:41-05:00"
                ]
              },
              "p_use_tracking": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "p_use_analytics_read": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "p_use_analytics_link": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "p_use_twitter": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "p_use_facebook": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "p_embed_image": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "p_use_captcha": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "send_last_broadcast": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "private": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "analytics_domains": {},
              "analytics_source": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "analytics_ua": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "twitter_token": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "twitter_token_secret": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "facebook_session": {},
              "carboncopy": {},
              "subscription_notify": {},
              "unsubscription_notify": {},
              "require_name": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "get_unsubscribe_reason": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "to_name": {
                "type": "string",
                "examples": [
                  "Subscriber"
                ]
              },
              "optinoptout": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "sender_name": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_addr1": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_addr2": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_city": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_state": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_zip": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_country": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_phone": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "sender_url": {
                "type": "string",
                "examples": [
                  "http://www.ilankreimont.com"
                ]
              },
              "sender_reminder": {
                "type": "string",
                "examples": [
                  "You signed up for my mailing list."
                ]
              },
              "fulladdress": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "optinmessageid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "optoutconf": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "deletestamp": {},
              "udate": {},
              "links": {
                "type": "object",
                "properties": {
                  "contactGoalLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/lists/1/contactGoalLists"
                    ]
                  },
                  "user": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/lists/1/user"
                    ]
                  },
                  "addressLists": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/lists/1/addressLists"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "user": {
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
                "4"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "default": 0,
                "examples": [
                  403
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  "Forbidden"
                ]
              },
              "detail": {
                "type": "string",
                "examples": [
                  "You do not have permission to view lists."
                ]
              }
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAllLists
