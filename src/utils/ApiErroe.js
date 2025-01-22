class ApiError extends Error {
  constructor(
    statuseCode,
    message = "Something want wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statuseCode = statuseCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this, constructor);
    }
  }
}

export { ApiError };
