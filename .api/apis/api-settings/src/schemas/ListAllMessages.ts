const ListAllMessages = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "messages": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "userid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "ed_instanceid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "ed_version": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-17T09:47:38-05:00"
                ]
              },
              "mdate": {
                "type": "string",
                "examples": [
                  "2018-08-17T09:47:38-05:00"
                ]
              },
              "name": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "fromname": {
                "type": "string",
                "examples": [
                  "John Doe"
                ]
              },
              "fromemail": {
                "type": "string",
                "examples": [
                  "noreply@example.com"
                ]
              },
              "reply2": {
                "type": "string",
                "examples": [
                  "hello@example.com"
                ]
              },
              "priority": {
                "type": "string",
                "examples": [
                  "3"
                ]
              },
              "charset": {
                "type": "string",
                "examples": [
                  "utf-8"
                ]
              },
              "encoding": {
                "type": "string",
                "examples": [
                  "quoted-printable"
                ]
              },
              "format": {
                "type": "string",
                "examples": [
                  "mime"
                ]
              },
              "subject": {
                "type": "string",
                "examples": [
                  "Update your subscription to %LISTNAME%"
                ]
              },
              "preheader_text": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "text": {
                "type": "string",
                "examples": [
                  " \n\n**Update your subscription details for %LISTNAME%** \n\n \n\nYou or someone entering your email has requested to update your\nsubscription details for the address %EMAIL%.\n\n**To update your subscription details click the link below.**\n\nUpdate My Subscription <%LINK%> \n\n \n\n{\"If you believe that this is a mistake and you did not intend on\nupdating your subscription to this list, you can ignore this message and\nnothing else will happen.\"|alang\n\n "
                ]
              },
              "html": {
                "type": "string",
                "examples": [
                  "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html lang=\"en\" style=\"margin: 0; outline: none; padding: 0;\">\n<head>\n    <!--[if !mso]><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]-->\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <meta http-equiv=\"Content-Language\" content=\"en-us\">\n    <title>Preview</title>\n    <style>\n        .ExternalClass         .ExternalClass p,\n        .ExternalClass ul,\n        .ExternalClass ol         .undoreset div p,\n        .undoreset p     </style>\n    <style>\n        @media only screen and (max-width: 600px),\n        only screen and (max-device-width: 600px)             *             table             thead,\n            tbody,\n            tr             th,\n            td,\n            p         }\n    </style>\n</head>\n<body style=\"font-family: Arial; line-height: 1.1; margin: 0px; background-color: #F2F2F2; width: 100%; text-align: center;\">\n    <div class=\"divbody\" style=\"margin: 0px; outline: none; padding: 0px; font-family: arial; line-height: 1.1; width: 100%; background-color: #F2F2F2; background: #F2F2F2; text-align: center;\">\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"font-size: 16px;\">\n            <tr>\n                <td valign=\"top\" height=\"40\" align=\"center\">&nbsp;</td>\n            </tr>\n            <tr>\n                <td align=\"center\" valign=\"top\" width=\"100%\">\n                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" bgcolor=\"#F2F2F2\" style=\"font-size: 16px; min-width: 650px;\">\n                        <tr>\n                            <td valign=\"top\" align=\"center\">\n                                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"font-size: 16px;\">\n                                    <tr>\n                                        <td valign=\"top\" style=\"padding: 0;\">\n                                            <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 14px;\">\n                                                <tr style=\"margin: 0; padding: 0;\">\n                                                    <td valign=\"top\">\n                                                        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 14px;\">\n                                                            <tr>\n                                                                <td valign=\"top\" align=\"center\" style=\"Margin:0; padding:0; font-size:20px; font-family:Arial,Helvetica; line-height:26px; text-align:center!important;\"><strong style=\"font-weight:bold;\">Update your subscription details for %LISTNAME%</strong>\n                                                                </td>\n                                                            </tr>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td height=\"20\">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td valign=\"top\" style=\"padding: 0;\">\n                                            <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 14px;\">\n                                                <tr style=\"margin: 0; padding: 0;\">\n                                                    <td valign=\"top\">\n                                                        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 14px;\">\n                                                            <tr>\n                                                                <td valign=\"top\" align=\"center\" width=\"610\" style=\"color: inherit; font-size: inherit; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;\">You or someone entering your email has requested to update your subscription details for the address %EMAIL%.</td>\n                                                            </tr>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td valign=\"top\" style=\"padding: 20px;\">\n                                            <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; border-collapse: initial !important;\">\n                                                <tr style=\"background-color: #ffffff;\">\n                                                    <td valign=\"top\" style=\"border-color: #c2c2c2; border-style: solid; border-width: 1px;\">\n                                                        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px;\">\n                                                            <tr>\n                                                                <td valign=\"top\" align=\"center\" style=\"padding:20px; font-size:16px; font-family:Arial,Helvetica; text-align:center;\"><strong style=\"font-weight:bold;\">To update your subscription details click the link below.</strong></td> </tr> <tr> <td valign=\"top\" align=\"center\"> <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px;\"> <tr> <td valign=\"top\" align=\"left\" width=\"558\">\n                                                                                <div class=\"button-wrapper\" style=\"margin: 0; outline: none; padding: 0; text-align: center;\">\n                                                                                    <!--[if mso]> <v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" href=\"%LINK%\" style=\"v-text-anchor:middle; width: 558px; height: 50px;\" arcsize=\"10%\" strokecolor=\"#4DCBA9\" strokeweight=\"1pt\" fillcolor=\"#4DCBA9\" > <w:anchorlock/> <center style=\"color:#ffffff;font-family:'Arial'; font-size:16px;\">Update My Subscription</center> </v:roundrect> <![endif]-->\n                                                                                    <a href=\"%LINK%\" style=\"margin: 0; outline: none; padding: 16px; background-color: #4DCBA9; border: 1px solid #4DCBA9; border-radius: 4px; color: #ffffff; font-family: Arial; font-size: 16px; display: inline-block; text-align: center; text-decoration: none; mso-hide: all;\"> <span style=\"color:#ffffff;\">Update My Subscription</span> </a>\n                                                                                </div>\n                                                                            </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td height=\"20\">&nbsp;</td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td valign=\"top\" style=\"padding: 0;\">\n            <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 14px;\">\n                <tr style=\"margin: 0; padding: 0;\">\n                    <td valign=\"top\" style=\"padding: 20px;\">\n                        <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 14px;\">\n                            <tr>\n                                <td valign=\"top\" height=\"25\" align=\"center\" style=\"Margin:0; padding:0; font-size:13px; line-height:13px; font-family:Arial,Helvetica; text-align:center!important; line-height:20px; text-align:center!important;\">{\"If you believe that this is a mistake and you did not intend on updating your subscription to this list, you can ignore this message and nothing else will happen.\"|alang</td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td valign=\"top\" height=\"40\" align=\"center\">&nbsp;</td>\n    </tr>\n    </table>\n    </div>\n</body>\n\n</html>"
                ]
              },
              "htmlfetch": {
                "type": "string",
                "examples": [
                  "now"
                ]
              },
              "textfetch": {
                "type": "string",
                "examples": [
                  "now"
                ]
              },
              "hidden": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "preview_mime": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "preview_data": {},
              "links": {
                "type": "object",
                "properties": {
                  "user": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/messages/2/user"
                    ]
                  }
                }
              },
              "id": {
                "type": "string",
                "examples": [
                  "2"
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
export default ListAllMessages
