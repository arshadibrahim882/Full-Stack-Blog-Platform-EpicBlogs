const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    name: { 
      type: String, 
      default: "" 
    },
    bio: { 
      type: String, 
      default: "" 
    },
    avatar: { 
      type: String, 
      default: "" 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);