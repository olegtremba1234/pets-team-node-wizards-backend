const { ValidationErrors } = require("./validation-errors");

class DateErrors extends ValidationErrors {
  constructor(name = null) {
    super(name);
  }

  date() {
    if (!this.fieldName) {
      return this;
    }
    this.messages["date.base"] = `${this.fieldName} must be a date`;
    return this;
  }

  less(date) {
    if (!this.fieldName || !date) {
      return this;
    }
    this.messages["date.less"] = `${this.fieldName} must be less than ${date}`;
    return this;
  }

  format(dates) {
    if (!this.fieldName || !dates) {
      return this;
    }
    this.messages[
      "date.format"
    ] = `${this.fieldName} must be in DD.MM.YYYY format`;
    return this;
  }
}

module.exports = { DateErrors };
