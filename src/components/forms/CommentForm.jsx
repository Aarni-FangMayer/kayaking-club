import React from "react";
import "./commentForm.css";

const CommentForm = () => {
  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Write your comment</h3>
      <form className="comment-form__form">
        <textarea
          className="comment-form__textarea"
          name=""
          id=""
          placeholder="type your comment here..."
        ></textarea>
        <button className="comment-form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
