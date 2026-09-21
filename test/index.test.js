import { describe, expect, it } from "vitest";
import { handlePrismaError } from "../src/index";

describe("handlePrismaError", () => {
  it("should handle P2002 unique constraint error", () => {
    const error = {
      name: "PrismaClientKnownRequestError",
      code: "P2002",
      meta: {
        target: ["email"],
      },
    };

    const result = handlePrismaError(error);

    expect(result).toEqual({
      statusCode: 409,
      code: "CONFLICT",
      message: "A record with this value already exists.",
      fields: ["email"],
    });
  });

  it("should handle composite unique constraint", () => {
    const error = {
      name: "PrismaClientKnownRequestError",
      code: "P2002",
      meta: {
        target: ["email", "username"],
      },
    };

    const result = handlePrismaError(error);

    expect(result).toEqual({
      statusCode: 409,
      code: "CONFLICT",
      message: "A record with this value already exists.",
      fields: ["email", "username"],
    });
  });

  it("should handle P2025 record not found error", () => {
    const error = {
      name: "PrismaClientKnownRequestError",
      code: "P2025",
    };

    const result = handlePrismaError(error);

    expect(result).toEqual({
      statusCode: 404,
      code: "NOT_FOUND",
      message: "The requested record was not found.",
    });
  });

  it("should handle P2003 foreign key constraint error", () => {
    const error = {
      name: "PrismaClientKnownRequestError",
      code: "P2003",
    };

    const result = handlePrismaError(error);

    expect(result).toEqual({
      statusCode: 400,
      code: "FOREIGN_KEY_CONSTRAINT",
      message: "A related record does not exist.",
    });
  });

  it("should return null for normal errors", () => {
    const error = new Error("Something went wrong");

    const result = handlePrismaError(error);

    expect(result).toBeNull();
  });

  it("should return null for unknown errors", () => {
    const error = {
      name: "PrismaClientKnownRequestError",
      code: "UNKNOWN_ERROR",
    };

    const result = handlePrismaError(error);

    expect(result).toBeNull();
  });

  it("should return null for null", () => {
    const result = handlePrismaError(null);

    expect(result).toBeNull();
  });
});