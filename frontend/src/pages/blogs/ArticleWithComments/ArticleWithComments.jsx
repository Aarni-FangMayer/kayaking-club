import React from "react";
import Comment from "./Comment";
import Article from "./Article";
import CommentForm from "../../../components/forms/CommentForm";
import "./articleWithComments.css";
import AvatarImage from "../../../assets/images/avatar.png";

const ArticleWithComments = ({ title, text, image, likes, comments, date, author, commentObject, article }) => {
  // const comments = [
  //   {
  //     id: 1,
  //     userName: "JoJo_45",
  //     dateOfPublication: "22-10-2025",
  //     userAvatar: AvatarImage,
  //     text: "Gallery, with its treasury of priceless crown jewels, then used power tools to break through a window.",
  //     likesAmount: 2,
  //   },
  //   {
  //     id: 2,
  //     userName: "Lili_789",
  //     dateOfPublication: "20-10-2025",
  //     userAvatar: AvatarImage,
  //     text: "To anyone strolling along the banks of the Seine :)",
  //     likesAmount: 3,
  //   },
  //   {
  //     id: 3,
  //     userName: "JoJo_45",
  //     dateOfPublication: "22-10-2025",
  //     userAvatar: AvatarImage,
  //     text: "Gallery, with its treasury of priceless crown jewels, then used power tools to break through a window.",
  //     likesAmount: 2,
  //   },
  //   {
  //     id: 4,
  //     userName: "Lili_789",
  //     dateOfPublication: "20-10-2025",
  //     userAvatar: AvatarImage,
  //     text: "To anyone strolling along the banks of the Seine :)",
  //     likesAmount: 3,
  //   },
  // ];

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
          comments={comments}
          author={author}
          article={article}
        />
        <div className="comment-block">
          <h3 className="comment-base__title">Comments to the post</h3>
          <div className="comment-base">
            {commentObject.map((comment) => {
              return <Comment comment={comment} />;
            })}
          </div>
          <CommentForm />
        </div>
      </div>
    </>
  );
};

export default ArticleWithComments;
