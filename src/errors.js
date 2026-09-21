const prismaErrors = {
  P2000: {
    statusCode: 400,
    code: "VALUE_TOO_LONG",
    message: "The provided value is too long.",
  },

  P2001: {
    statusCode: 404,
    code: "NOT_FOUND",
    message: "The requested record was not found.",
  },

  P2002: {
    statusCode: 409,
    code: "CONFLICT",
    message: "A record with this value already exists.",
  },

  P2003: {
    statusCode: 400,
    code: "FOREIGN_KEY_CONSTRAINT",
    message: "A related record does not exist.",
  },

  P2004: {
    statusCode: 400,
    code: "CONSTRAINT_FAILED",
    message: "A database constraint was violated.",
  },

  P2005: {
    statusCode: 400,
    code: "INVALID_STORED_VALUE",
    message: "A stored database value is invalid.",
  },

  P2006: {
    statusCode: 400,
    code: "INVALID_VALUE",
    message: "The provided value is invalid.",
  },

  P2007: {
    statusCode: 400,
    code: "DATA_VALIDATION_ERROR",
    message: "The provided data is invalid.",
  },

  P2008: {
    statusCode: 400,
    code: "QUERY_PARSE_ERROR",
    message: "The database query could not be parsed.",
  },

  P2009: {
    statusCode: 400,
    code: "QUERY_VALIDATION_ERROR",
    message: "The database query is invalid.",
  },

  P2010: {
    statusCode: 400,
    code: "RAW_QUERY_ERROR",
    message: "The raw database query failed.",
  },

  P2011: {
    statusCode: 400,
    code: "NULL_CONSTRAINT",
    message: "A required value cannot be null.",
  },

  P2012: {
    statusCode: 400,
    code: "MISSING_REQUIRED_VALUE",
    message: "A required value is missing.",
  },

  P2013: {
    statusCode: 400,
    code: "MISSING_REQUIRED_ARGUMENT",
    message: "A required argument is missing.",
  },

  P2014: {
    statusCode: 400,
    code: "RELATION_VIOLATION",
    message: "The required relation is invalid.",
  },

  P2015: {
    statusCode: 404,
    code: "RELATED_RECORD_NOT_FOUND",
    message: "A related record was not found.",
  },

  P2016: {
    statusCode: 400,
    code: "QUERY_INTERPRETATION_ERROR",
    message: "The database query could not be interpreted.",
  },

  P2017: {
    statusCode: 400,
    code: "RELATION_NOT_CONNECTED",
    message: "The required relation is not connected.",
  },

  P2018: {
    statusCode: 404,
    code: "CONNECTED_RECORDS_NOT_FOUND",
    message: "The required connected records were not found.",
  },

  P2019: {
    statusCode: 400,
    code: "INPUT_ERROR",
    message: "The provided input is invalid.",
  },

  P2020: {
    statusCode: 400,
    code: "VALUE_OUT_OF_RANGE",
    message: "The provided value is out of range.",
  },

  P2021: {
    statusCode: 500,
    code: "TABLE_NOT_FOUND",
    message: "The required database table does not exist.",
  },

  P2022: {
    statusCode: 500,
    code: "COLUMN_NOT_FOUND",
    message: "The required database column does not exist.",
  },

  P2023: {
    statusCode: 500,
    code: "INCONSISTENT_COLUMN_DATA",
    message: "The database contains inconsistent column data.",
  },

  P2024: {
    statusCode: 503,
    code: "CONNECTION_POOL_TIMEOUT",
    message: "The database connection pool timed out.",
  },

  P2025: {
    statusCode: 404,
    code: "NOT_FOUND",
    message: "The requested record was not found.",
  },

  P2026: {
    statusCode: 400,
    code: "UNSUPPORTED_DATABASE_FEATURE",
    message: "The database does not support the requested feature.",
  },

  P2027: {
    statusCode: 500,
    code: "MULTIPLE_DATABASE_ERRORS",
    message: "Multiple database errors occurred.",
  },

  P2028: {
    statusCode: 500,
    code: "TRANSACTION_ERROR",
    message: "A database transaction error occurred.",
  },

  P2029: {
    statusCode: 400,
    code: "QUERY_PARAMETER_LIMIT",
    message: "The query parameter limit was exceeded.",
  },

  P2030: {
    statusCode: 500,
    code: "FULLTEXT_INDEX_NOT_FOUND",
    message: "The required fulltext index was not found.",
  },

  P2031: {
    statusCode: 500,
    code: "MONGODB_REPLICA_SET_REQUIRED",
    message: "MongoDB transactions require a replica set.",
  },

  P2033: {
    statusCode: 400,
    code: "INTEGER_OUT_OF_RANGE",
    message: "The provided number is outside the supported range.",
  },

  P2034: {
    statusCode: 409,
    code: "TRANSACTION_CONFLICT",
    message: "The transaction failed because of a write conflict or deadlock.",
  },

  P2035: {
    statusCode: 500,
    code: "DATABASE_ASSERTION_ERROR",
    message: "A database assertion error occurred.",
  },

  P2036: {
    statusCode: 500,
    code: "EXTERNAL_CONNECTOR_ERROR",
    message: "An external database connector error occurred.",
  },

  P2037: {
    statusCode: 503,
    code: "TOO_MANY_CONNECTIONS",
    message: "Too many database connections are open.",
  },
};


module.exports={prismaErrors}