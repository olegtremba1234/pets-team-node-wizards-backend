const { StringErrors } = require("./string-errors");
const { NumberErrors } = require("./number-errrors");
const { DateErrors } = require("./date-errors");
const { ObjectErrors } = require("./object-errors");
const { ValidationErrors } = require("./validation-errors");

class FieldErrors {
  constructor(fieldName = null) {
    this.fieldName = fieldName;
    this.returnedError = new ValidationErrors();
  }

  string() {
    if (!this.fieldName) {
      return this.returnedError.get();
    }
    return new StringErrors(this.fieldName).string();
  }

  number() {
    if (!this.fieldName) {
      return this.returnedError.get();
    }
    return new NumberErrors(this.fieldName).number();
  }

  date() {
    if (!this.fieldName) {
      return this.returnedError.get();
    }
    return new DateErrors(this.fieldName).date();
  }

  object() {
    if (!this.fieldName) {
      return this.returnedError.get();
    }
    return new ObjectErrors(this.fieldName).object();
  }
}

module.exports = { FieldErrors };
