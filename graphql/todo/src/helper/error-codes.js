const { createEnum } = require("./utils.js");

const ErrorCodes = createEnum("NOT_FOUND", 'INVALID_SIZE');

module.exports = ErrorCodes;
