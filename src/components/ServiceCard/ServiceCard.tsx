import classNames from 'classnames'
import './ServiceCard.scss'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

interface ServiceCardProps {
  card: {
    title: string
    text: string
    img?: string
    extraText?: string
    type: string
  }
}

gsap.registerPlugin(ScrollTrigger)

export const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const { title, text, img, extraText, type } = card

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.service-card',
        start: 'top 70%',
        end: 'bottom 20%',
        // markers: true,
        scrub: true,
      },
    })

    tl.fromTo(
      '.service-card',
      { opacity: 0, perspective: 20 },
      {
        opacity: 1,
        perspective: 0,
        duration: 3,
        ease: 'power3.out',
        stagger: 0.6,
      }
    )
  }, {})

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
        <h4 className="service-card__title">{title}</h4>
        <p className="service-card__text">{text}</p>
        {extraText && <p className="service-card__extra-text">{extraText}</p>}
      </div>
      {img && <img className="service-card__img" src={img} alt={title} />}
    </section>
  )
}
