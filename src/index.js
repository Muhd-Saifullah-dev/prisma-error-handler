const {prismaErrors}=require("./errors");

export function handlePrismaError(error) {
  if (!error || error.name !== "PrismaClientKnownRequestError") {
    return null;
  }

  const prismaError = prismaErrors[error.code];
  if (!prismaError) {
    return null;
  }

  const response = {
    statusCode: prismaError.statusCode,
    code: prismaError.code,
    message: prismaError.message,
  };

  if (error.code === "P2002" && Array.isArray(error.meta?.target)) {
    response.fields = error.meta.target;
  }

  return response;
}


module.exports={handlePrismaError}