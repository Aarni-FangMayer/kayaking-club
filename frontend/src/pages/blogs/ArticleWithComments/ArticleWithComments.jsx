import React, { useState } from "react";
import Comment from "./Comment";
import Article from "./Article";
import CommentForm from "../../../components/forms/CommentForm";
import { useAuth } from "../../../contexts/AuthContext";
import "./articleWithComments.css";
import AvatarImage from "../../../assets/images/avatar.png";

const ArticleWithComments = ({
  title,
  text,
  image,
  likes,
  date,
  author,
  commentObject,
  article,
  blogId,
}) => {
  const { isAuth, userInfo } = useAuth();

  const [comments, setComments] = useState(commentObject || []);

  const handleCommentAdded = (newComment) => {
    if (!isAuth) {
      alert("Please log in to your account to post a comment.");
    } else {
      setComments((prev) => [...prev, newComment]);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: text.replace(/<[^>]+>/g, ""),
          url: window.location.href,
        })
        .then(() => console.log("Успешно поделились"))
        .catch((error) => console.log("Ошибка при шаринге:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Ссылка скопирована! 📋");
    }
  };

  return (
    <>
      <div className="modal-blog__content">
        <Article
          title={title}
          text={text}
          image={image}
          handleShare={handleShare}
          dateOfPublication={date}
          likes={likes}
          comments={comments.length}
          author={author}
          article={article}
        />
        <div className="comment-block">
          <h3 className="comment-base__title">Comments to the post</h3>
          <div className="comment-base">
            {comments.map((comment) => {
              return <Comment key={comment.comment_id} comment={comment} />;
            })}
          </div>
          <CommentForm
            blogId={blogId}
            user={userInfo}
            onCommentAdded={handleCommentAdded}
          />
        </div>
      </div>
    </>
  );
};

export default ArticleWithComments;
