# prisma-error-handler

A lightweight and framework-independent Prisma error handler for Node.js applications.

`prisma-error-handler` converts Prisma Client known request errors into a consistent, API-friendly response format.

It supports both **CommonJS and ESM** and does **not require Prisma as a runtime dependency**.

## Features

* ✅ Handle Prisma Client known request errors
* ✅ Support Prisma error codes
* ✅ Consistent error response format
* ✅ Support `P2002` unique constraint errors
* ✅ Support composite unique constraints
* ✅ Return affected fields for `P2002`
* ✅ CommonJS and ESM support
* ✅ No Prisma runtime dependency
* ✅ Framework independent
* ✅ Written in JavaScript

## Installation

### npm

```bash
npm install prisma-error-handler
```

### pnpm

```bash
pnpm add prisma-error-handler
```

### yarn

```bash
yarn add prisma-error-handler
```

## Usage

### CommonJS

```js
const { handlePrismaError } = require("prisma-error-handler");
```

### ESM

```js
import { handlePrismaError } from "prisma-error-handler";
```

## Basic Example

```js
const { handlePrismaError } = require("prisma-error-handler");

try {
  await prisma.user.create({
    data: {
      email: "user@example.com",
      name: "Saifullah",
    },
  });
} catch (error) {
  const prismaError = handlePrismaError(error);

  if (prismaError) {
    return res.status(prismaError.statusCode).json(prismaError);
  }

  return res.status(500).json({
    message: "Internal server error",
  });
}
```

## P2002 — Unique Constraint

When Prisma throws a `P2002` error, `handlePrismaError()` returns the affected fields.

### Single Field

Prisma error:

```js
{
  name: "PrismaClientKnownRequestError",
  code: "P2002",
  meta: {
    target: ["email"],
  },
}
```

Result:

```js
{
  statusCode: 409,
  code: "CONFLICT",
  message: "A record with this value already exists.",
  fields: ["email"],
}
```

### Composite Unique Constraint

Composite unique constraints are also supported.

Prisma error:

```js
{
  name: "PrismaClientKnownRequestError",
  code: "P2002",
  meta: {
    target: ["email", "username"],
  },
}
```

Result:

```js
{
  statusCode: 409,
  code: "CONFLICT",
  message: "A record with this value already exists.",
  fields: ["email", "username"],
}
```

## P2025 — Record Not Found

Prisma error:

```js
{
  name: "PrismaClientKnownRequestError",
  code: "P2025",
}
```

Result:

```js
{
  statusCode: 404,
  code: "NOT_FOUND",
  message: "The requested record was not found.",
}
```

## P2003 — Foreign Key Constraint

Prisma error:

```js
{
  name: "PrismaClientKnownRequestError",
  code: "P2003",
}
```

Result:

```js
{
  statusCode: 400,
  code: "FOREIGN_KEY_CONSTRAINT",
  message: "A related record does not exist.",
}
```

## Unsupported Errors

`handlePrismaError()` returns `null` when the provided error is not a supported Prisma Client known request error.

Example:

```js
const error = new Error("Something went wrong");

const result = handlePrismaError(error);

console.log(result);
// null
```

This allows your application to handle normal errors separately:

```js
const prismaError = handlePrismaError(error);

if (prismaError) {
  return res.status(prismaError.statusCode).json(prismaError);
}

return res.status(500).json({
  message: "Internal server error",
});
```

## Response Format

A handled Prisma error returns:

```js
{
  statusCode: number,
  code: string,
  message: string,
  fields?: string[],
}
```

### Example

```js
{
  statusCode: 409,
  code: "CONFLICT",
  message: "A record with this value already exists.",
  fields: ["email"],
}
```

The `fields` property is returned for `P2002` when Prisma provides the affected fields.

## Supported Prisma Error Codes

| Prisma Code | Status Code | Application Code               |
| ----------- | ----------: | ------------------------------ |
| `P2000`     |         400 | `VALUE_TOO_LONG`               |
| `P2001`     |         404 | `NOT_FOUND`                    |
| `P2002`     |         409 | `CONFLICT`                     |
| `P2003`     |         400 | `FOREIGN_KEY_CONSTRAINT`       |
| `P2004`     |         400 | `CONSTRAINT_FAILED`            |
| `P2005`     |         400 | `INVALID_STORED_VALUE`         |
| `P2006`     |         400 | `INVALID_VALUE`                |
| `P2007`     |         400 | `DATA_VALIDATION_ERROR`        |
| `P2008`     |         400 | `QUERY_PARSE_ERROR`            |
| `P2009`     |         400 | `QUERY_VALIDATION_ERROR`       |
| `P2010`     |         400 | `RAW_QUERY_ERROR`              |
| `P2011`     |         400 | `NULL_CONSTRAINT`              |
| `P2012`     |         400 | `MISSING_REQUIRED_VALUE`       |
| `P2013`     |         400 | `MISSING_REQUIRED_ARGUMENT`    |
| `P2014`     |         400 | `RELATION_VIOLATION`           |
| `P2015`     |         404 | `RELATED_RECORD_NOT_FOUND`     |
| `P2016`     |         400 | `QUERY_INTERPRETATION_ERROR`   |
| `P2017`     |         400 | `RELATION_NOT_CONNECTED`       |
| `P2018`     |         404 | `CONNECTED_RECORDS_NOT_FOUND`  |
| `P2019`     |         400 | `INPUT_ERROR`                  |
| `P2020`     |         400 | `VALUE_OUT_OF_RANGE`           |
| `P2021`     |         500 | `TABLE_NOT_FOUND`              |
| `P2022`     |         500 | `COLUMN_NOT_FOUND`             |
| `P2023`     |         500 | `INCONSISTENT_COLUMN_DATA`     |
| `P2024`     |         503 | `CONNECTION_POOL_TIMEOUT`      |
| `P2025`     |         404 | `NOT_FOUND`                    |
| `P2026`     |         400 | `UNSUPPORTED_DATABASE_FEATURE` |
| `P2027`     |         500 | `MULTIPLE_DATABASE_ERRORS`     |
| `P2028`     |         500 | `TRANSACTION_ERROR`            |
| `P2029`     |         400 | `QUERY_PARAMETER_LIMIT`        |
| `P2030`     |         500 | `FULLTEXT_INDEX_NOT_FOUND`     |
| `P2031`     |         500 | `MONGODB_REPLICA_SET_REQUIRED` |
| `P2033`     |         400 | `INTEGER_OUT_OF_RANGE`         |
| `P2034`     |         409 | `TRANSACTION_CONFLICT`         |
| `P2035`     |         500 | `DATABASE_ASSERTION_ERROR`     |
| `P2036`     |         500 | `EXTERNAL_CONNECTOR_ERROR`     |
| `P2037`     |         503 | `TOO_MANY_CONNECTIONS`         |

## Framework Support

The package is framework-independent and can be used with any Node.js application.

Examples include:

* Express
* NestJS
* Fastify
* Hono
* Next.js API routes
* Custom Node.js servers

## Why Prisma Is Not a Dependency

This package does not import `@prisma/client` or require Prisma at runtime.

It identifies Prisma errors using the error object's properties, such as:

```js
{
  name: "PrismaClientKnownRequestError",
  code: "P2002"
}
```

This keeps the package lightweight and avoids coupling it to a specific Prisma version.

Your application still needs Prisma separately:

```bash
npm install @prisma/client
```

## API

### `handlePrismaError(error)`

Handles a Prisma Client known request error.

```js
const result = handlePrismaError(error);
```

Returns a normalized error object:

```js
{
  statusCode: number,
  code: string,
  message: string,
  fields?: string[],
}
```

Returns `null` for unsupported or non-Prisma errors.

## Requirements

* Node.js 18+
* Prisma Client in the consuming application

Prisma is **not installed as a dependency** of this package.

## Repository

GitHub:

https://github.com/Muhd-Saifullah-dev/prisma-error-handler

## Author

**Muhammad Saifullah**

GitHub:

https://github.com/Muhd-Saifullah-dev

## License

MIT
