const CreateANewGroup = {
  "body": {
    "type": "object",
    "properties": {
      "group": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of the group to be created",
            "examples": [
              "TEST TITLE"
            ]
          },
          "descript": {
            "type": "string",
            "description": "Group description",
            "examples": [
              "Description Text"
            ]
          },
          "pgMessageAdd": {
            "type": "boolean",
            "description": "Permission for adding messages",
            "default": false,
            "examples": [
              1
            ]
          },
          "unsubscribelink": {
            "type": "boolean",
            "description": "Whether or not to force unsubscribe links",
            "default": false,
            "examples": [
              "0"
            ]
          },
          "optinconfirm": {
            "type": "boolean",
            "description": "Whether or not to force optin confirm for this group",
            "default": false,
            "examples": [
              "0"
            ]
          },
          "pgListAdd": {
            "type": "boolean",
            "description": "Permission for adding lists",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgListEdit": {
            "type": "boolean",
            "description": "Permission for editing lists",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgListDelete": {
            "type": "boolean",
            "description": "Permission for deleting lists",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgListHeaders": {
            "type": "boolean",
            "description": "Permission for managing custom email headers",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgListEmailaccount": {
            "type": "boolean",
            "description": "Permission for managing Unsubscribe By Email",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgListBounce": {
            "type": "boolean",
            "description": "Permission for accessing list bounce settings",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgMessageEdit": {
            "type": "boolean",
            "description": "Permission for editing messages",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgMessageDelete": {
            "type": "boolean",
            "description": "Permission for deleting messages",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgMessageSend": {
            "type": "boolean",
            "description": "Permission for sending messages",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactAdd": {
            "type": "boolean",
            "description": "Permission for adding contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactEdit": {
            "type": "boolean",
            "description": "Permission for editing contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactDelete": {
            "type": "boolean",
            "description": "Permission for deleting contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactMerge": {
            "type": "boolean",
            "description": "Permission for merging contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactImport": {
            "type": "boolean",
            "description": "Permission for importing contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactApprove": {
            "type": "boolean",
            "description": "Permission for approving contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactExport": {
            "type": "boolean",
            "description": "Permission for exporting contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactSync": {
            "type": "boolean",
            "description": "Permission for syncing contacts",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactFilters": {
            "type": "boolean",
            "description": "Permission for managing contact list segments",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactActions": {
            "type": "boolean",
            "description": "Permission for managing contact actions",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgContactFields": {
            "type": "boolean",
            "description": "Permission for managing contact custom fields",
            "default": false,
            "examples": [
              1
            ]
          },
          "pg_user_add": {
            "type": "boolean",
            "description": "Permission for adding users",
            "default": false,
            "examples": [
              "0"
            ]
          },
          "pg_user_edit": {
            "type": "boolean",
            "description": "Permission for editing users",
            "default": false,
            "examples": [
              "0"
            ]
          },
          "pg_user_delete": {
            "type": "boolean",
            "description": "Permission for deleting users",
            "default": false,
            "examples": [
              "0"
            ]
          },
          "pgGroupAdd": {
            "type": "boolean",
            "description": "Permission for adding groups",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgGroupEdit": {
            "type": "boolean",
            "description": "Permission for editing groups",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgGroupDelete": {
            "type": "boolean",
            "description": "Permission for deleting groups",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgTemplateAdd": {
            "type": "boolean",
            "description": "Permission for adding templates",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgTemplateEdit": {
            "type": "boolean",
            "description": "Permission for editing templates",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgTemplateDelete": {
            "type": "boolean",
            "description": "Permission for deleting templates",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgPersonalizationAdd": {
            "type": "boolean",
            "description": "Permission for adding personalization tags",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgPersonalizationEdit": {
            "type": "boolean",
            "description": "Permission for editing personalization tags",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgPersonalizationDelete": {
            "type": "boolean",
            "description": "Permission for deleting personalization tags",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgAutomationManage": {
            "type": "boolean",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgFormEdit": {
            "type": "boolean",
            "description": "Permission for editing subscription forms",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgReportsCampaign": {
            "type": "boolean",
            "description": "Permission for viewing campaign reports",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgReportsList": {
            "type": "boolean",
            "description": "Permission for viewing list reports",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgReportsUser": {
            "type": "boolean",
            "description": "Permission for viewing user reports",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgStartupReports": {
            "type": "boolean",
            "description": "Campaign ID of last campaign report viewed to decide whether to show link on startup",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgReportsTrend": {
            "type": "boolean",
            "description": "Permission for viewing trend reports",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgStartupGettingstarted": {
            "type": "boolean",
            "description": "Whether or not to show the \"getting started\" tutorial on overview page",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgDeal": {
            "type": "boolean",
            "description": "Permission for viewing deals",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgDealDelete": {
            "type": "boolean",
            "description": "Permission for deleting deals",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgDealReassign": {
            "type": "boolean",
            "description": "Permission for reassigning deals",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgDealGroupAdd": {
            "type": "boolean",
            "description": "Permission for adding deal groups",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgDealGroupEdit": {
            "type": "boolean",
            "description": "Permission for editing deal groups",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgDealGroupDelete": {
            "type": "boolean",
            "description": "Permission for deleting deals groups",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgSavedResponsesManage": {
            "type": "boolean",
            "description": "Permission for managing saved responses",
            "default": false,
            "examples": [
              1
            ]
          },
          "pgTagManage": {
            "type": "boolean",
            "description": "Permission for managing tags",
            "default": false
          },
          "reqApproval": {
            "type": "boolean",
            "description": "Whether or not this group requires all campaigns to be approved",
            "default": false,
            "examples": [
              1
            ]
          },
          "reqApproval1st": {
            "type": "boolean",
            "description": "Whether or not this group requires first campaign to be approved",
            "default": false,
            "examples": [
              1
            ]
          },
          "reqApprovalNotify": {
            "type": "string",
            "description": "Who to notify for approval related issues (email)",
            "examples": [
              "JohnDoe@gmail.com"
            ]
          },
          "socialdata": {
            "type": "boolean",
            "description": "Whether or not to show social links in campaigns sent from this group",
            "default": false
          }
        },
        "required": [
          "title"
        ],
        "type": "object"
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "group": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "examples": [
                "My Groups Title"
              ]
            },
            "p_admin": {
              "type": "integer",
              "default": 0,
              "examples": [
                1
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "userGroups": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/groups/7/userGroups"
                  ]
                },
                "groupLimit": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/groups/7/groupLimit"
                  ]
                },
                "dealGroupGroups": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/groups/7/dealGroupGroups"
                  ]
                },
                "listGroups": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/groups/7/listGroups"
                  ]
                },
                "addressGroups": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/groups/7/addressGroups"
                  ]
                },
                "automationGroups": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/:version/groups/7/automationGroups"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "7"
              ]
            }
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateANewGroup
