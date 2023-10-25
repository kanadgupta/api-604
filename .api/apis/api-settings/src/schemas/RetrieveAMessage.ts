const RetrieveAMessage = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the message to retrieve"
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
        "message": {
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
                "1"
              ]
            },
            "ed_version": {
              "type": "string",
              "examples": [
                "2"
              ]
            },
            "cdate": {
              "type": "string",
              "examples": [
                "2018-08-17T13:47:32-05:00"
              ]
            },
            "mdate": {
              "type": "string",
              "examples": [
                "2018-08-17T13:47:32-05:00"
              ]
            },
            "name": {
              "type": "string",
              "examples": [
                "Please confirm your subscription to %LISTNAME%"
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
                ""
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
                "8bit"
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
                "Please confirm your subscription to %LISTNAME%"
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
                " \n\nThank you for subscribing to %LISTNAME%!\n\nYou or someone has subscribed to this list on %SUBDATE% using the\naddress %EMAIL%.\n\nTo confirm that you wish to be subscribed, please click the link below:\n\nConfirm My Subscription <%CONFIRMLINK%> \n\nIf you believe that this is a mistake and you did not intend on\nsubscribing to this list,\nyou can ignore this message and nothing else will happen."
              ]
            },
            "html": {
              "type": "string",
              "examples": [
                "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html lang=\"en\" style=\"margin: 0; outline: none; padding: 0;\"><head><!--[if !mso]><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]--><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Language\" content=\"locale_contentlang\"><meta name=\"format-detection\" content=\"telephone=no\"><meta name=\"format-detection\" content=\"date=no\"><meta name=\"format-detection\" content=\"address=no\"><meta name=\"format-detection\" content=\"email=no\"><title>Preview</title><style data-ac-keep=\"true\">\n.ExternalClass {width:100%; background:inherit; background-color:inherit;}\n.ExternalClass p, .ExternalClass ul, .ExternalClass ol { Margin: 0; }\n.undoreset div p, .undoreset p { margin-bottom: 20px; }\ndiv[class^=\"aolmail_divbody\"] { overflow: auto; }\n[owa] #ac-footer { padding: 20px 0px!important; background:inherit; background-color:inherit; }\n</style><style data-ac-keep=\"true\">\n@media only screen and (max-width: 600px) {\t/*-------------------------------------------------------------------------*\\ Abandoned Cart widget \\*------------------------------------------------------------------------*/ .td_abandoned-cart img {display: block;padding-right: 0 !important;padding-bottom: 0 !important;width: 100% !important;max-width: 100% !important;height: auto !important;} body { padding: 0!important; font-size:1em!important; } * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } *[class].divbody {-webkit-text-size-adjust:none !important; width:auto !important;} *[class].td_picture img {width:auto !important;} *[class].td_text { line-height: 110%; } *[class].td_button { width: auto; } /* Collapse all block elements */ :not(.body) table { display: block!important; float:none!important; border-collapse:collapse !important; width:100% !important; min-width:100% !important; clear:both!important; } :not(.body) thead, :not(.body) tbody, :not(.body) tr { display:block!important; float:none!important; width:100% !important; } :not(.body) th, :not(.body) td, :not(.body) p { display:block!important; float:none!important; width:100% !important; clear:both!important; } /* Remove browser default styling for elements */ ul, ol { margin-left: 20px; margin-bottom: 10px; margin-top: 10px; -webkit-margin-before: 0; -webkit-margin-after: 0; -webkit-padding-start: 0; } /* Set default height for spacer once collapse */ *[class].spacer { height: auto!important; } a[href^=date]{ color:inherit !important; text-decoration:none !important;} a[href^=telephone]{ color:inherit !important; text-decoration:none !important;} a[href^=address]{ color:inherit !important; text-decoration:none !important;} a[href^=email]{ color:inherit !important; text-decoration:none !important;} /* Default table cell height */ td[height=\"10\"]{height:10px!important;font-size:10px!important;line-height:10px!important;}\ntd[height=\"13\"]{height:13px!important;font-size:13px!important;line-height:13px!important;}\ntd[height=\"14\"]{height:14px!important;font-size:14px!important;line-height:14px!important;}\ntd[height=\"12\"]{height:12px!important;font-size:12px!important;line-height:12px!important;} /* Default social icons */ *[class].ac-social-icon-16 {width:16px !important; height:16px !important;} *[class].ac-social-icon-24 {width:24px !important; height:24px !important;} *[class].ac-social-icon-28 {width:28px !important; height:28px !important;} *[class].__ac_social_icons { margin-right: 0px !important; } }\n</style><style data-ac-keep=\"true\"> </style><!--[if !mso]><!-- webfonts --><!--<![endif]--><!--[if lt mso 12]> <![endif]--></head><body id=\"ac-designer\" class=\"body\" style=\"font-family: Arial; line-height: 1.1; margin: 0px; background-color: #f5f5f5; width: 100%; text-align: center;\"><div class=\"divbody\" style=\"margin: 0px; outline: none; padding: 0px; color: #000000; font-family: arial; line-height: 1.1; width: 100%; background-color: #f5f5f5; background: #f5f5f5; text-align: center;\"><table class=\"template-table\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" align=\"left\" style=\"font-size: 13px; min-width: auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5; background: #f5f5f5;\"><tr><td align=\"center\" valign=\"top\" width=\"100%\"><table class=\"template-table\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"650\" bgcolor=\"#f5f5f5\" style=\"font-size: 13px; min-width: auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 650px;\"><tr><td id=\"layout_table_4c01fd59953b175598dbdb0163afc56680171ae4\" valign=\"top\" align=\"center\" width=\"650\" style=\"background-color: #f5f5f5;\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"layout layout-table root-table\" width=\"650\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;\"><tr style=\"background-color: #f5f5f5;\"><td id=\"layout-row-margin2\" valign=\"top\" style=\"background-color: #f5f5f5;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr id=\"layout-row2\" class=\"layout layout-row widget _widget_spacer \"><td id=\"layout-row-padding2\" valign=\"top\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr><td valign=\"top\" height=\"30\"><div class=\"spacer\" style=\"margin: 0; outline: none; padding: 0; height: 30px;\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tbody><tr><td class=\"spacer-body\" valign=\"top\" height=\"30\" width=\"650\"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr style=\"background-color: #f5f5f5;\"><td id=\"layout-row-margin1\" valign=\"top\" style=\"padding: 0; background-color: #f5f5f5;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;\"><tr id=\"layout-row1\" class=\"layout layout-row widget _widget_text style1\" style=\"margin: 0; padding: 0;\"><td id=\"layout-row-padding1\" valign=\"top\" style=\"padding: 0 20px 20px 20px;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr><td id=\"text_div1\" class=\"td_text td_block\" valign=\"top\" align=\"left\" style=\"color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;\"> <span class=\"\" style=\"color: inherit; font-size: 10px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\"> </span><p style=\"margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;\"><span style=\"color: #000000; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\" class=\"\">Thank you for subscribing to %LISTNAME%!</span></p></td></tr></table></td></tr></table></td></tr><tr style=\"background-color: #f5f5f5;\"><td id=\"layout-row-margin3\" valign=\"top\" style=\"padding: 0; background-color: #f5f5f5;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;\"><tr id=\"layout-row3\" class=\"layout layout-row widget _widget_text style3\" style=\"margin: 0; padding: 0;\"><td id=\"layout-row-padding3\" valign=\"top\" style=\"padding: 0 20px 20px 20px;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr><td id=\"text_div3\" class=\"td_text td_block\" valign=\"top\" align=\"left\" style=\"color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;\"> <span class=\"\" style=\"color: inherit; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\"> </span><p style=\"margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;\"><span style=\"color: inherit; font-size: 13px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\" class=\"\">You or someone has subscribed to this list on %SUBDATE% using the address %EMAIL%.</span></p></td></tr></table></td></tr></table></td></tr><tr style=\"background-color: #f5f5f5;\"><td id=\"layout-row-margin4\" valign=\"top\" style=\"padding: 0 20px 0 20px; background-color: #f5f5f5;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;\"><tr id=\"layout-row4\" class=\"layout layout-row widget _widget_text style4\" style=\"margin: 0; padding: 0; background-color: #ffffff;\"><td id=\"layout-row-padding4\" valign=\"top\" style=\"background-color: #ffffff; padding: 30px 30px 20px 30px;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr><td id=\"text_div4\" class=\"td_text td_block\" valign=\"top\" align=\"left\" style=\"color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;\"> <span class=\"\" style=\"color: inherit; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\"> </span><p style=\"margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;\"><span class=\"\" style=\"color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;\">To confirm that you wish to be subscribed, please click the link below:</span></p></td></tr></table></td></tr></table></td></tr><tr style=\"background-color: #f5f5f5;\"><td id=\"layout-row-margin5\" valign=\"top\" style=\"padding: 0 20px 0 20px; background-color: #f5f5f5;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;\"><tr id=\"layout-row5\" class=\"layout layout-row widget _widget_button style5\" style=\"background-color: #ffffff;\"><td id=\"layout-row-padding5\" valign=\"top\" style=\"background-color: #ffffff; padding: 0px 30px 30px 30px;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr><td class=\"td_button td_block customizable\" valign=\"top\" align=\"left\" width=\"550\"> <div class=\"button-wrapper\" style=\"margin: 0; outline: none; padding: 0; text-align: center;\">\n<!--[if mso]> <v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" href=\"%CONFIRMLINK%\" style=\"v-text-anchor:middle; width:202px; height:64px; \" arcsize=\"10%\" strokecolor=\"#4dcba9\" strokeweight=\"1pt\" fillcolor=\"#4dcba9\" o:button=\"true\" o:allowincell=\"true\" o:allowoverlap=\"false\" > <v:textbox inset=\"2px,2px,2px,2px\"> <center style=\"color:#ffffff;font-family:Arial; font-size:14px; line-height: 1.1;\">Confirm My Subscription</center> </v:textbox> </v:roundrect>\n<![endif]--> <a href=\"%CONFIRMLINK%\" style=\"margin: 0; outline: none; padding: 14px; color: #ffffff; background-color: #4dcba9; border: 1px solid #4dcba9; border-radius: 4px; font-family: Arial; font-size: 14px; display: inline-block; line-height: 1.1; text-align: center; text-decoration: none; mso-hide: all;\"> <span style=\"color:#ffffff;font-family:Arial;font-size:14px;\"> Confirm My Subscription </span> </a> </div>\n</td></tr></table></td></tr></table></td></tr><tr style=\"background-color: #f5f5f5;\"><td id=\"layout-row-margin6\" valign=\"top\" style=\"padding: 0; background-color: #f5f5f5;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;\"><tr id=\"layout-row6\" class=\"layout layout-row widget _widget_text style6\" style=\"margin: 0; padding: 0;\"><td id=\"layout-row-padding6\" valign=\"top\" style=\"padding: 20px;\"><table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\"><tr><td id=\"text_div6\" class=\"td_text td_block\" valign=\"top\" align=\"left\" style=\"color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;\"> <span class=\"\" style=\"color: inherit; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\"> </span><p style=\"margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;\"><span style=\"color: inherit; font-size: 12px; font-weight: inherit; line-height: inherit; text-decoration: inherit;\" class=\"\">If you believe that this is a mistake and you did not intend on subscribing to this list,<br>you can ignore this message and nothing else will happen.</span></p></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>\n"
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
            "preview_data": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "links": {
              "type": "object",
              "properties": {
                "user": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/messages/3/user"
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
            "user": {
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
    "404": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Message with id 10"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveAMessage
