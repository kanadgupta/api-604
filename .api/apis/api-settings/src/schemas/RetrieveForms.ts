const RetrieveForms = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "ID of the form to retrieve"
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
        "form": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "examples": [
                "Test Form"
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
                          "email-results"
                        ]
                      },
                      "email": {
                        "type": "string",
                        "examples": [
                          "johndoe@example.com"
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
                          "johndoe@example.com"
                        ]
                      },
                      "subject": {
                        "type": "string",
                        "examples": [
                          "Form submission results"
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
                },
                "customcss": {
                  "type": "string",
                  "examples": [
                    ""
                  ]
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
                      "Contact Us"
                    ]
                  },
                  "class": {
                    "type": "string",
                    "examples": [
                      "_x29498744"
                    ]
                  },
                  "required_options": {
                    "type": "object",
                    "properties": {}
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
                "2018-10-07T09:12:46-06:00"
              ]
            },
            "udate": {
              "type": "string",
              "examples": [
                "2018-10-12T11:18:52-06:00"
              ]
            },
            "entries": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "aid": {},
            "links": {
              "type": "object",
              "properties": {
                "address": {
                  "type": "string",
                  "examples": [
                    "https://:account.api-us1.com/api/3/forms/13/address"
                  ]
                }
              }
            },
            "id": {
              "type": "string",
              "examples": [
                "13"
              ]
            },
            "address": {}
          }
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "403": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "examples": [
            "No Result found for Form with id 7"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveForms
