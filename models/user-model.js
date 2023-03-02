const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  city: {
    type: String,
    required: [true, "City is required."],
  },
  phone: {
    type: String,
    required: [true, "Phone is required."],
  },

  accessToken: {
    type: String,
    default: null,
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
