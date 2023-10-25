const ListAllOrders = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "filters[connectionid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the connection id. Must be greater than 0."
          },
          "filters[externalid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the external id of the order."
          },
          "filters[externalcheckoutid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the external checkout id"
          },
          "filters[email]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the customer email address."
          },
          "filters[state]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the state of the order. 0 = Pending, 1 = Completed, 2 = Abandoned, 3 = Recovered, 4 = Waiting (Customer checked out but payment is not yet completed)"
          },
          "filters[customerid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the customer id"
          },
          "filters[external_created_date]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Filter by the external created date"
          },
          "orders[connectionid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by connection ID. Accepted values are ASC or DESC."
          },
          "orders[externalid]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by external ID. Accepted values are ASC or DESC."
          },
          "orders[externalcheckoutid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by external checkout ID. Accepted values are ASC or DESC."
          },
          "orders[email]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by email. Accepted values are ASC or DESC."
          },
          "orders[state]": {
            "type": "integer",
            "format": "int32",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by state. Accepted values are ASC or DESC."
          },
          "orders[customerid]": {
            "type": "string",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by customer ID. Accepted values are ASC or DESC."
          },
          "orders[external_created_date]": {
            "type": "string",
            "format": "date",
            "$schema": "https://json-schema.org/draft/2020-12/schema#",
            "description": "Order by external created date. Accepted values are ASC or DESC."
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    },
    "422": {
      "type": "object",
      "properties": {},
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListAllOrders
