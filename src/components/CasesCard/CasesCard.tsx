import { Button } from '../Elements/Button/Button'
import './CasesCard.scss'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

interface CasesCardProps {
  card: {
    title: string
    text: string
    img: string
  }
  index: number
}

export const CasesCard: React.FC<CasesCardProps> = ({ card, index }) => {
  const { title, text, img } = card

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.cases-card`,
        start: 'top 75%',
        end: 'bottom 20%',
        // markers: true,
        scrub: true,
      },
    })

    const animDirection = index % 2 === 0 ? -100 : 100

    tl.from(`.cases-card-${index}`, {
      opacity: 0,
      x: animDirection,
      duration: 1.5,
      ease: 'power3.out',
    })
  }, {})

  return (
    <section className={`cases-card cases-card-${index}`}>
      <div className="cases-card__image">
        <img className="cases-card__img" src={img} alt="cases-card__img" />
      </div>
      <div className="cases-card__content">
        <h5 className="cases-card__title">{title}</h5>
        <p className="cases-card__text">{text}</p>
        <Button
          btnText="Подробнее"
          type="transparent"
          className="cases-card__btn"
        />
      </div>
    </section>
  )
}
