const RetrieveContactData = {
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
            "description": "ID of the contact"
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
        "contactDatum": {
          "type": "object",
          "properties": {
            "contact": {
              "type": "string",
              "examples": [
                "4"
              ]
            },
            "tstamp": {
              "type": "string",
              "examples": [
                "2021-06-09T14:35:10-05:00"
              ]
            },
            "geoTstamp": {},
            "geoIp4": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "geoCountry2": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "geo_country": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "geoState": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "geoCity": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "geoZip": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "geoArea": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "geoLat": {
              "type": "string",
              "examples": [
                "0.000000"
              ]
            },
            "geoLon": {
              "type": "string",
              "examples": [
                "0.000000"
              ]
            },
            "geoTz": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "geoTzOffset": {
              "type": "string",
              "examples": [
                "0.00"
              ]
            },
            "ga_campaign_source": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "ga_campaign_name": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "ga_campaign_medium": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "ga_campaign_term": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "ga_campaign_content": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "ga_campaign_customsegment": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "ga_first_visit": {},
            "ga_times_visited": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "fb_id": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "fb_name": {
              "type": "string",
              "examples": [
                ""
              ]
            },
            "tw_id": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "created_timestamp": {
              "type": "string",
              "examples": [
                "0000-00-00 00:00:00"
              ]
            },
            "updated_timestamp": {
              "type": "string",
              "examples": [
                "0000-00-00 00:00:00"
              ]
            },
            "created_by": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "updated_by": {
              "type": "string",
              "examples": [
                "0"
              ]
            },
            "links": {
              "type": "array",
              "items": {}
            },
            "id": {
              "type": "string",
              "examples": [
                "12"
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
            "No Result found for Subscriber with id 121"
          ]
        }
      },
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default RetrieveContactData
