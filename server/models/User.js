const mongoose = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
