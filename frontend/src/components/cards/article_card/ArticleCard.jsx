import React, { useState } from 'react'
import ArrowBlueButton from '../../buttons/arrow_blue/ArrowBlueButton'
import BlogsModal from '../../modals/blogsModal/BlogsModal'
import ArticleWithComments from '../../../pages/blogs/ArticleWithComments/ArticleWithComments'
import './articleCard.css'

const ArticleCard = ({ subtitle, description, article, btnText, setModalOpen, callback }) => {
  const [blogModalOpen, setBlogModalOpen] = useState(false);

  return (
    <div className="article-card">
        <div className="article-card__content">
            <h3 className="article-card__subtitle">{subtitle}</h3>
            <p className="article-card__description">{description}</p>
        </div>
        <ArrowBlueButton clickEvent={() => {setBlogModalOpen(true); setModalOpen(true); callback && callback(article)}} text={btnText} />
    </div>
  )
}

export default ArticleCard
