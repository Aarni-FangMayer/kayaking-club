import React, { useState } from "react";
import commentsService from "../../services/comments";
import "./commentForm.css";

const CommentForm = ({ blogId, onCommentAdded, user }) => {
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  if (!user || !user.id) {
    return (
      <div className="comment-form">
        <p>You must be logged in to comment.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setLoading(true);

    try {
      const newComment = {
        user_id: user.id,
        username: user.username,
        user_avatar: user.avatar || "",
        comment_text: commentText,
        comment_date: new Date().toISOString(),
        comment_likes: 0,
      };

      const savedComment = await commentsService.addComment(blogId, newComment);
      onCommentAdded(savedComment);
      setCommentText("");
    } catch (err) {
      console.error(err);
      alert("Ошибка при добавлении комментария");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Write your comment</h3>
      <form className="comment-form__form" onSubmit={handleSubmit}>
        <textarea
          className="comment-form__textarea"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={3}
          placeholder="type your comment here..."
          required
        ></textarea>
        <button
          className="comment-form__button"
          disabled={loading || !commentText.trim()}
          type="submit"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
