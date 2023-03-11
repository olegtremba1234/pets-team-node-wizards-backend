class ValidationErrors {
  constructor(fieldName) {
    this.fieldName = fieldName;
    this.messages = {};
  }

  get() {
    return this.messages;
  }

  customError(errorObject = {}) {
    this.messages = { ...this.messages, ...errorObject };
    return this;
  }

  required() {
    if (!this.fieldName) {
      return this;
    }
    this.messages["any.required"] = `${this.fieldName} is required field`;
    return this;
  }

  valid(...posibleOptions) {
    if (!this.fieldName || !posibleOptions.length) {
      return this;
    }
    this.messages["any.only"] = `${
      this.fieldName
    } must be one of [${posibleOptions.join(", ")}]`;
    return this;
  }
}

module.exports = { ValidationErrors };
