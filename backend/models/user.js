const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: String,
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  avatar: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: String,
  tours_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;