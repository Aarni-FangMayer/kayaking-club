import React from "react";
import ImageBlock from "../../../components/shared/ImageBlock";
import "./infoSectionBlog.css";
import Image2 from "../../../assets/images/blog_page_img2.jpg";
import Image3 from "../../../assets/images/blog_page_img3.jpg";

const InfoSectionBlog = () => {
  return (
    <section className="info">
      <div class="info-grid__item--row1">
        <div className="info__image">
          <h2 className="info__title">Welcome To Our Travel Blog</h2>
        </div>
      </div>
      <div class="info-grid__item--row2-col1">
        <ImageBlock image={Image2} alt={"Man paddling kayak"}
        />
      </div>
      <div class="info-grid__item--row2-col2">
        <div className="info__item--text">
          <h3>Find Inspiration Here</h3>
          <p>
           Whether it’s your first paddle or your latest expedition, our blog is your source for stories, expert advice, and life behind the scenes at River Pulse Club.
          </p>
        </div>
      </div>
      <div class="info-grid__item--row2-col3">
        <ImageBlock image={Image3} alt={"Kayaking in wild nature"}
        />
      </div>
    </section>
  );
};

export default InfoSectionBlog;
