import React, { useState } from 'react'
import ArrowBlueButton from '../../buttons/arrow_blue/ArrowBlueButton'
import BlogsModal from '../../modals/blogsModal/BlogsModal'
import ArticleWithComments from '../../../pages/blogs/ArticleWithComments/ArticleWithComments'
import './articleCard.css'

const ArticleCard = ({ subtitle, description, image, textContent, article, btnText }) => {
  const [blogModalOpen, setBlogModalOpen] = useState(false);

  const closeBlogModal = () => {
    setBlogModalOpen(false);
  }
  return (
    <div className="article-card">
        <div className="article-card__content">
            <h3 className="article-card__subtitle">{subtitle}</h3>
            <p className="article-card__description">{description}</p>
        </div>
        <ArrowBlueButton clickEvent={() => setBlogModalOpen(true)} text={btnText} />
        <BlogsModal isModalOpen={blogModalOpen} closeModal={closeBlogModal}>
          <ArticleWithComments title={subtitle} text={textContent} image={image} article={article} />
        </BlogsModal>
    </div>
  )
}

export default ArticleCard
