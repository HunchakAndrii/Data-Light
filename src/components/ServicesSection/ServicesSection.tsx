import { ServiceCard } from '../ServiceCard/ServiceCard'
import './ServicesSection.scss'
import { serviceCardsDate } from '../../data/serviceCardsData'
import { Button } from '../Elements/Button/Button'
import { Link } from 'react-router-dom'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

export const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services__text',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    })

    tl.from('.services__text', { opacity: 0, x: 100, rotation: 10 })
  }, {})

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
