const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user_id: String,
    username: String,
    user_avatar: String,
    comment_id: {
        type: String,
        default: () => Date.now().toString()
    },
    comment_date: String,
    comment_text: String,
    comment_likes: Number
});

const blogSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    text: String,
    description: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: Number,
    commentObject: [commentSchema],
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