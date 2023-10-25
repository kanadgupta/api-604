const GetBranding = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32",
            "default": null,
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#"
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
export default GetBranding
