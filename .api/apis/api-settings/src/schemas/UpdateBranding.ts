const UpdateBranding = {
  "body": {
    "type": "object",
    "properties": {
      "branding": {
        "properties": {
          "groupid": {
            "type": "integer",
            "description": "The group ID. This value will always be 3.",
            "default": 3,
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647
          },
          "siteName": {
            "type": "string",
            "description": "Title of software. Example: 'ActiveCampaign Email Marketing'"
          },
          "siteLogo": {
            "type": "string"
          },
          "siteLogoSmall": {
            "type": "string",
            "description": "URL of small logo. Small logos appear in the header of the admin panel."
          },
          "headerTextValue": {
            "type": "string",
            "description": "Content of non-removable header. Example: text header content"
          },
          "headerHtmlValue": {
            "type": "string",
            "description": "Content of non-removable header. Example: <p>header content here</p>"
          },
          "footerTextValue": {
            "type": "string",
            "description": "Content of non-removeable footer. Example: text footer content"
          },
          "footerHtmlValue": {
            "type": "string",
            "description": "Content of non-removeable footer. Example: <p>footer content here</p>"
          },
          "copyright": {
            "type": "boolean",
            "description": "unknown"
          },
          "version": {
            "type": "boolean",
            "description": "unknown"
          },
          "license": {
            "type": "boolean",
            "description": "unknown"
          },
          "links": {
            "type": "boolean",
            "description": "External links. To enable (which is the default) exclude this parameter entirely. To disable (remove our branding), just pass this parameter with any value."
          },
          "help": {
            "type": "string"
          },
          "adminTemplateHtm": {
            "type": "string",
            "description": "The actual HTML template (ONLY AVAILABLE FOR CERTAIN PLANS)"
          },
          "adminTemplateCss": {
            "type": "string",
            "description": "The actual CSS. Example: test color: green; (ONLY AVAILABLE FOR CERTAIN PLANS)"
          },
          "publicTemplateHtm": {
            "type": "string",
            "description": "The actual HTML template (ONLY AVAILABLE FOR CERTAIN PLANS)"
          },
          "publicTemplateCss": {
            "type": "string",
            "description": "The actual CSS. Example: test color: green; (ONLY AVAILABLE FOR CERTAIN PLANS)"
          },
          "favicon": {
            "type": "string",
            "description": "URL of the favicon."
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
            "default": 1,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Branding ID"
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
        "branding": {
          "type": "object",
          "properties": {
            "groupid": {
              "type": "string",
              "examples": [
                "3"
              ]
            },
            "siteName": {
              "type": "string",
              "examples": [
                "ActiveCampaign Email Marketing"
              ]
            },
            "siteLogo": {
              "type": "string",
              "examples": [
                "http://mysite.com/logo.jpg"
              ]
            },
            "siteLogoSmall": {
              "type": "string",
              "examples": [
                "http://mysite.com/logo_small.jpg"
              ]
            },
            "headerTextValue": {
              "type": "string",
              "examples": [
                "my custom text header"
              ]
            },
            "headerHtmlValue": {
              "type": "string",
              "examples": [
                "<p>my custom HTML header</p>"
              ]
            },
            "footerTextValue": {
              "type": "string",
              "examples": [
                "my custom text footer"
              ]
            },
            "footerHtmlValue": {
              "type": "string",
              "examples": [
                "<p>my custom HTML footer</p>"
              ]
            },
            "copyright": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "version": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "license": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "links": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "help": {
              "type": "string",
              "examples": [
                "1"
              ]
            },
            "adminTemplateHtm": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "adminTemplateCss": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "publicTemplateHtm": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "publicTemplateCss": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "favicon": {},
            "id": {
              "type": "string",
              "examples": [
                "1"
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
export default UpdateBranding
