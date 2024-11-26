import { useEffect, useState } from 'react'
import { Button } from '../Elements/Button/Button'
import { CardsData } from '../Elements/CardsData/CardsData'
import './MaterialsCard.scss'

interface MaterialsCardProps {
  card: {
    img: string
    date?: string
    title: string
    text: string
  }
}

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const today = new Date()

const formattedDate = today.toLocaleDateString('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export const MaterialsCard: React.FC<MaterialsCardProps> = ({ card }) => {
  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)

  const { img, date, title, text } = card

  useEffect(() => {
    setViewCount(getRandom(1, 150))
    setLikeCount(getRandom(1, 150))
  }, [])

  return (
    <div className="materials-card">
      <div className="materials-card__image">
        <img className='materials-card__img' src={img} alt="" />
      </div>

      <div className="materials-card__content">
        <p className="materials-card__date">{date || formattedDate}</p>
        <h5 className="materials-card__title">{title}</h5>
        <p className="materials-card__text">{text}</p>
        <div className="materials-card__socials">
          <CardsData
            views={viewCount}
            likes={likeCount}
            onLikeCount={setLikeCount}
          />
          <Button
            btnText="Подробнее"
            type="transparent"
            className="materials-card__btn"
          />
        </div>
      </div>
    </div>
  )
}
