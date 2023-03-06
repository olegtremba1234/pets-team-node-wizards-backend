const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  name: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    required: [true, "City is required."],
  },
  phone: {
    type: String,
    required: [true, "Phone is required."],
  },
  birthday: {
    type: String,
    require: true,
    default: "00.00.0000",
  },
  avatarUrl: {
    type: String,
  },

  accessToken: {
    type: String,
    default: null,
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
