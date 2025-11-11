const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  description: String,
  difficulty: String,
  dateOfTrip: String,
  included: String,
  forBeginners: String,
  duration: String,
  price: Number,
  image: String,
  accountId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

tourSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Tour", tourSchema);
