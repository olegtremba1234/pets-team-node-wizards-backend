const { ValidationErrors } = require("./validation-errors");

class StringErrors extends ValidationErrors {
  constructor(name = null) {
    super(name);
  }

  string() {
    if (!this.fieldName) {
      return this;
    }
    this.messages["string.base"] = `${this.fieldName} must be a string`;
    return this;
  }

  emptyString() {
    if (!this.fieldName) {
      return this;
    }
    this.messages[
      "string.empty"
    ] = `${this.fieldName} is not allowed to be empty`;
    return this;
  }

  min(length) {
    if (!this.fieldName || !length) {
      return this;
    }
    this.messages[
      "string.min"
    ] = `${this.fieldName} length must be at least ${length} characters long`;
    return this;
  }

  max(length) {
    if (!this.fieldName || !length) {
      return this;
    }
    this.messages[
      "string.max"
    ] = `${this.fieldName} length must be less than or equal to ${length} characters long`;
    return this;
  }

  pattern(...posibleOptions) {
    if (!this.fieldName || !posibleOptions.length) {
      return this;
    }
    this.messages["string.pattern.base"] = `The ${
      this.fieldName
    } field should contain only: ${posibleOptions.join(", ")}`;
    return this;
  }

  email() {
    if (!this.fieldName) {
      return this;
    }
    this.messages["string.email"] = `${this.fieldName} must be a valid email`;
    return this;
  }
}

module.exports = { StringErrors };
