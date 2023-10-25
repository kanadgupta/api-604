const ListAllGroups = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "groups": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "examples": [
                  "TEST TITLE"
                ]
              },
              "descript": {
                "type": "string",
                "examples": [
                  "This is a group for admin users (people that can manage content)"
                ]
              },
              "unsubscribelink": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "optinconfirm": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "p_admin": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgListAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgListEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgListDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgListHeaders": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgListEmailaccount": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgListBounce": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgMessageAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgMessageEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgMessageDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgMessageSend": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactMerge": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactImport": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactApprove": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactExport": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactSync": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactFilters": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgContactActions": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "pgContactFields": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pg_user_add": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pg_user_edit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pg_user_delete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgGroupAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgGroupEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgGroupDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgTemplateAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgTemplateEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgTemplateDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgPersonalizationAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgPersonalizationEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgPersonalizationDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgAutomationManage": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgFormEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgReportsCampaign": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgReportsList": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgReportsUser": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgReportsTrend": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgStartupReports": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgStartupGettingstarted": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgDeal": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgDealDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgDealReassign": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgDealGroupAdd": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgDealGroupEdit": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgDealGroupDelete": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "pgSavedResponsesManage": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "sdate": {
                "type": "string",
                "examples": [
                  "2018-09-20T10:51:14-05:00"
                ]
              },
              "reqApproval": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "reqApproval1st": {
                "type": "string",
                "examples": [
                  "2"
                ]
              },
              "reqApprovalNotify": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "socialdata": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "userGroups": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groups/3/userGroups"
                    ]
                  },
                  "groupLimit": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groups/3/groupLimit"
                    ]
                  },
                  "dealGroupGroups": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groups/3/dealGroupGroups"
                    ]
                  },
                  "listGroups": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groups/3/listGroups"
                    ]
                  },
                  "addressGroups": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groups/3/addressGroups"
                    ]
                  },
                  "automationGroups": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/groups/3/automationGroups"
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
    }
  }
} as const;
export default ListAllGroups
