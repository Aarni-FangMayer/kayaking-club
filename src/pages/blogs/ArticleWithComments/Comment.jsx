import React from "react";
import ReactionButton from "../../../components/buttons/reaction_button/ReactionButton";
import "./comment.css";

const Comment = ({ comment }) => {
  return (
    <div key={comment.id} className="comment">
      <div className="comment__base-info">
        <img className="comment__avatar" src={comment.userAvatar} alt="" />
        <div className="comment__user-info">
          <h4 className="comment__user-name">{comment.userName}</h4>
          <div className="subtitle">{comment.dateOfPublication}</div>
        </div>
      </div>
      <div className="comment__text">
        <p>{comment.text}</p>
      </div>
      <ReactionButton reactionsAmount={comment.likesAmount} icon={"❤️"}/>
    </div>
  );
};

export default Comment;
