module.exports.ERROR_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

module.exports.ERROR_MESSAGES = {
  BAD_REQUEST: "Invalid data",
  UNAUTHORIZED: "Authorization required",
  FORBIDDEN: "You do not have permission to perform this action",
  NOT_FOUND: "Resource not found",
  SERVER_ERROR: "Internal server error",
};
