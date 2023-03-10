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
    required: [true, "name is required"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "City is required."],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone is required."],
  },
  birthday: {
    type: String,
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
