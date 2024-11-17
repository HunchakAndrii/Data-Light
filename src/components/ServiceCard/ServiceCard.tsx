import classNames from 'classnames'
import './ServiceCard.scss'

interface ServiceCardProps {
  card: {
    title: string
    text: string
    img?: string
    extraText?: string
    type: string
  }
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const { title, text, img, extraText, type } = card;

  return (
    <section
      className={classNames(
        'service-card',
        { 'service-card--green': type === 'green' },
        { 'service-card--dark': type === 'dark' },
        { 'service-card--blue': type === 'blue' }
      )}
    >
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__text">{text}</p>
        {extraText && <p className="service-card__extra-text">{extraText}</p>}
      </div>
      {img && <img className="service-card__img" src={img} alt={title} />}
    </section>
  )
}
