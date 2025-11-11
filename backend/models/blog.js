const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    text: String,
    likes: Number,
    comments: Number,
    commentObject: [
        {
            user_id: String,
            username: String,
            user_avatar: String,
            comment_id: String,
            comment_date: String,
            comment_text: String,
            comment_likes: Number
        }
    ],
    data: String,
    author: String,
    image: String
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Blog", blogSchema);