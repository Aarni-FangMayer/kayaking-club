import React from "react";
import ReactionButton from "../../../components/buttons/reaction_button/ReactionButton";
import "./comment.css";
import AvatarImage from "../../../assets/images/avatar.png";

const Comment = ({ comment }) => {
  return (
    <div key={comment.user_id} className="comment">
      <div className="comment__base-info">
        <img className="comment__avatar" src={comment.user_avatar ? comment.user_avatar : AvatarImage} alt="" />
        <div className="comment__user-info">
          <h4 className="comment__user-name">{comment.username}</h4>
          <div className="subtitle">{comment.comment_date}</div>
        </div>
      </div>
      <div className="comment__text">
        <p>{comment.comment_text}</p>
      </div>
      <ReactionButton reactionsAmount={comment.comment_likes} icon={"❤️"}/>
    </div>
  );
};

export default Comment; 
