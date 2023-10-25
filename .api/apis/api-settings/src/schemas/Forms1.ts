const Forms1 = {
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "forms": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "examples": [
                  "Testing"
                ]
              },
              "action": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "actiondata": {
                "type": "object",
                "properties": {
                  "actions": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "examples": [
                            "subscribe-to-list"
                          ]
                        },
                        "email": {
                          "type": "string",
                          "examples": [
                            "johndoe@example.com"
                          ]
                        },
                        "list": {
                          "type": "string",
                          "examples": [
                            "1"
                          ]
                        }
                      }
                    }
                  }
                }
              },
              "submit": {
                "type": "string",
                "examples": [
                  "show-thank-you"
                ]
              },
              "submitdata": {
                "type": "object",
                "properties": {
                  "url": {
                    "type": "string",
                    "examples": [
                      ""
                    ]
                  }
                }
              },
              "url": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "layout": {
                "type": "string",
                "examples": [
                  "inline-form"
                ]
              },
              "title": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "body": {
                "type": "string",
                "examples": [
                  ""
                ]
              },
              "button": {
                "type": "string",
                "examples": [
                  "Submit"
                ]
              },
              "thanks": {
                "type": "string",
                "examples": [
                  "Thanks for signing up!"
                ]
              },
              "style": {
                "type": "object",
                "properties": {
                  "background": {
                    "type": "string",
                    "examples": [
                      "FFFFFF"
                    ]
                  },
                  "dark": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
                    ]
                  },
                  "fontcolor": {
                    "type": "string",
                    "examples": [
                      "000000"
                    ]
                  },
                  "layout": {
                    "type": "string",
                    "examples": [
                      "normal"
                    ]
                  },
                  "border": {
                    "type": "object",
                    "properties": {
                      "width": {
                        "type": "integer",
                        "default": 0,
                        "examples": [
                          0
                        ]
                      },
                      "style": {
                        "type": "string",
                        "examples": [
                          "solid"
                        ]
                      },
                      "color": {
                        "type": "string",
                        "examples": [
                          "B0B0B0"
                        ]
                      },
                      "radius": {
                        "type": "integer",
                        "default": 0,
                        "examples": [
                          0
                        ]
                      }
                    }
                  },
                  "width": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      500
                    ]
                  },
                  "ac_branding": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
                    ]
                  },
                  "button": {
                    "type": "object",
                    "properties": {
                      "padding": {
                        "type": "integer",
                        "default": 0,
                        "examples": [
                          10
                        ]
                      },
                      "background": {
                        "type": "string",
                        "examples": [
                          "333333"
                        ]
                      },
                      "fontcolor": {
                        "type": "string",
                        "examples": [
                          "FFFFFF"
                        ]
                      },
                      "border": {
                        "type": "object",
                        "properties": {
                          "radius": {
                            "type": "integer",
                            "default": 0,
                            "examples": [
                              4
                            ]
                          },
                          "color": {
                            "type": "string",
                            "examples": [
                              "333333"
                            ]
                          },
                          "style": {
                            "type": "string",
                            "examples": [
                              "solid"
                            ]
                          },
                          "width": {
                            "type": "integer",
                            "default": 0,
                            "examples": [
                              0
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              },
              "options": {
                "type": "object",
                "properties": {
                  "blanks_overwrite": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
                    ]
                  },
                  "confaction": {
                    "type": "string",
                    "examples": [
                      "show-message"
                    ]
                  },
                  "sendoptin": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
                    ]
                  },
                  "optin_id": {
                    "type": "integer",
                    "default": 0,
                    "examples": [
                      1
                    ]
                  },
                  "optin_created": {
                    "type": "boolean",
                    "default": true,
                    "examples": [
                      true
                    ]
                  },
                  "confform": {
                    "type": "string",
                    "examples": [
                      "2"
                    ]
                  }
                }
              },
              "cfields": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "examples": [
                        "header"
                      ]
                    },
                    "header": {
                      "type": "string",
                      "examples": [
                        "Subscribe for Email Updates"
                      ]
                    },
                    "class": {
                      "type": "string",
                      "examples": [
                        "_x41699710"
                      ]
                    }
                  }
                }
              },
              "parentformid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "userid": {
                "type": "string",
                "examples": [
                  "1"
                ]
              },
              "addressid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "cdate": {
                "type": "string",
                "examples": [
                  "2018-08-17T13:47:31-05:00"
                ]
              },
              "udate": {
                "type": "string",
                "examples": [
                  "2018-08-17T13:47:38-05:00"
                ]
              },
              "entries": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "aid": {
                "type": "string",
                "examples": [
                  "0"
                ]
              },
              "defaultscreenshot": {
                "type": "string",
                "examples": [
                  "http://img-us1.com/default-form.gif"
                ]
              },
              "recent": {
                "type": "array",
                "items": {}
              },
              "contacts": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "deals": {
                "type": "integer",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "links": {
                "type": "object",
                "properties": {
                  "address": {
                    "type": "string",
                    "examples": [
                      "https://:account.api-us1.com/api/3/forms/1/address"
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
              "address": {}
            }
          }
        },
        "meta": {
          "type": "object",
          "properties": {
            "total": {
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
export default Forms1
