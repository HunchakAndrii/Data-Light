import { Button } from '../Elements/Button/Button'
import './CasesCard.scss'

interface CasesCardProps {
  card: {
    title: string
    text: string
    img: string
  }
}

export const CasesCard: React.FC<CasesCardProps> = ({ card }) => {
  const { title, text, img } = card

  return (
    <section className="cases-card">
      <div className="cases-card__image">
        <img className="cases-card__img" src={img} alt="cases-card__img" />
      </div>
      <div className="cases-card__content">
        <h5 className="cases-card__title">{title}</h5>
        <p className="cases-card__text">{text}</p>
        <Button
          btnText='Подробнее'
          type="transparent"
          className="cases-card__btn"
        />
      </div>
    </section>
  )
}
