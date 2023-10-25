const RetrieveACampaign = {
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
            "description": "ID of campaign to retrieve"
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
        "campaign": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "examples": [
                "single"
              ]
            },
            "userid": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "segmentid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "bounceid": {
              "type": "string",
              "examples": [
                "-1"
              ]
            },
            "realcid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "sendid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "threadid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "seriesid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "formid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "basetemplateid": {
              "type": "string",
              "examples": [
                "13b1432dc41b75dda9ff86d84a8593d2b2b9419f"
              ]
            },
            "basemessageid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "addressid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "source": {
              "type": "string",
              "examples": [
                "web"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Matt Litmus test"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-10-10T11:59:43-05:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-10-10T12:00:23-05:00"
              ]
            },
            "sdate": {},
            "ldate": {},
            "send_amt": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "total_amt": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "opens": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "uniqueopens": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "linkclicks": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "uniquelinkclicks": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "subscriberclicks": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "forwards": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "uniqueforwards": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "hardbounces": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "softbounces": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "unsubscribes": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "unsubreasons": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "updates": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "socialshares": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "replies": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "uniquereplies": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "status": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "public": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "mail_transfer": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "mail_send": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "mail_cleanup": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "mailer_log_file": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "tracklinks": {
              "type": "string",
              "examples": [
                "all"
              ]
            },
            "tracklinksanalytics": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "trackreads": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "trackreadsanalytics": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "analytics_campaign_name": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "tweet": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "facebook": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "survey": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "embed_images": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "htmlunsub": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "textunsub": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "htmlunsubdata": {},
            "textunsubdata": {},
            "recurring": {
              "type": "string",
              "examples": [
                "day1"
              ]
            },
            "willrecur": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "split_type": {
              "type": "string",
              "examples": [
                "even"
              ]
            },
            "split_content": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "split_offset": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "split_offset_type": {
              "type": "string",
              "examples": [
                "day"
              ]
            },
            "split_winner_messageid": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "split_winner_awaiting": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "responder_offset": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "responder_type": {
              "type": "string",
              "examples": [
                "subscribe"
              ]
            },
            "responder_existing": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "reminder_field": {
              "type": "string",
              "examples": [
                "sdate"
              ]
            },
            "reminder_format": {},
            "reminder_type": {
              "type": "string",
              "examples": [
                "month_day"
              ]
            },
            "reminder_offset": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "reminder_offset_type": {
              "type": "string",
              "examples": [
                "day"
              ]
            },
            "reminder_offset_sign": {
              "type": "string",
              "examples": [
                "+"
              ]
            },
            "reminder_last_cron_run": {},
            "activerss_interval": {
              "type": "string",
              "examples": [
                "day1"
              ]
            },
            "activerss_url": {},
            "activerss_items": {
              "type": "string",
              "examples": [
                "10"
              ]
            },
            "ip4": {
              "type": "string",
              "examples": [
                "643992596"
              ]
            },
            "laststep": {
              "type": "string",
              "examples": [
                "designer"
              ]
            },
            "managetext": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "schedule": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "scheduleddate": {},
            "waitpreview": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "deletestamp": {},
            "replysys": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/campaigns/1/user"
                  ]
                },
                "automation": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/campaigns/1/automation"
                  ]
                },
                "campaignMessage": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/campaigns/1/campaignMessage"
                  ]
                },
                "links": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/campaigns/1/links"
                  ]
                },
                "aggregateRevenues": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/campaigns/1/aggregateRevenues"
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
            },
            "automation": {}
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveACampaign
