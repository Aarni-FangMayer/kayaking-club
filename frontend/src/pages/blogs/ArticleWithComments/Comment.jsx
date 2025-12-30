import React from "react";
import ReactionButton from "../../../components/buttons/reaction_button/ReactionButton";
import "./comment.css";
import AvatarImage from "../../../assets/images/avatar.png";
import Avatar, { genConfig } from 'react-nice-avatar'

const Comment = ({ comment }) => {
  const config = genConfig() 
  return (
    <div key={comment.user_id} className="comment">
      <div className="comment__base-info">
        <Avatar style={{ width: '3rem', height: '3rem' }} {...config} />
        <div className="comment__user-info">
          <h4 className="comment__user-name">{comment.username}</h4>
          <div className="subtitle">{comment.comment_date}</div>
        </div>
      </div>
      <div className="comment__text">
        <p>{comment.comment_text}</p>
      </div>
    </div>
  );
};

export default Comment; 
