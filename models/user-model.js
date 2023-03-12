const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
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
    trim: true,
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
