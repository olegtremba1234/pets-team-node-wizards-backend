const { ValidationErrors } = require("./validation-errors");

class NumberErrors extends ValidationErrors {
  constructor(name = null) {
    super(name);
  }

  number() {
    if (!this.fieldName) {
      return this;
    }
    this.messages["number.base"] = `${this.fieldName} must be a number`;
    return this;
  }

  integer() {
    if (!this.fieldName) {
      return this;
    }
    this.messages["number.integer"] = `${this.fieldName} must be an integer`;
    return this;
  }

  min(number = null) {
    if (!this.fieldName || typeof Number(number) !== "number") {
      return this;
    }
    this.messages[
      "number.min"
    ] = `${this.fieldName} must be greater than or equal to ${number}`;
    return this;
  }

  max(number = null) {
    if (!this.fieldName || typeof Number(number) !== "number") {
      return this;
    }
    this.messages[
      "number.max"
    ] = `${this.fieldName} must be less than or equal to ${number}`;
    return this;
  }
}

module.exports = { NumberErrors };
