import { ServiceCard } from '../ServiceCard/ServiceCard'
import './ServicesSection.scss'
import { serviceCardsDate } from '../../data/serviceCardsData'
import { Button } from '../Elements/Button/Button'
import { Link } from 'react-router-dom'

export const ServicesSection = () => {
  
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__top">
          <h2 className="services__title">Наши услуги</h2>
          <p className="p2 services__text">25+ готовых лицензий</p>
        </div>
        <div className="services__cards">
          {serviceCardsDate.map((card, index) => (
            <ServiceCard key={index} card={card} />
          ))}
        </div>
        <Link to="/services">
          <Button
            btnText="Все услуги"
            type="secondary"
            className="btn services__btn"
          />
        </Link>
      </div>
    </section>
  )
}
