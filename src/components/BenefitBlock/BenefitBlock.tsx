import classNames from 'classnames'
import './BenefitBlock.scss'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

type BenefitBlockProps = {
  block: {
    title?: string
    text: string
    type: string
    icon?: string
  }
}

export const BenefitBlock: React.FC<BenefitBlockProps> = ({ block }) => {
  const { title, text, type, icon } = block
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const blocks = Array.from(document.querySelectorAll('.benefit-block')).map(
      block => ({
        element: block,
        randomY: gsap.utils.random(50, 250, true),
        randomDuration: gsap.utils.random(1, 2.5, true),
      })
    )

    blocks.forEach(({ element, randomY, randomDuration }) => {
      gsap.fromTo(
        element,
        { y: randomY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: randomDuration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: '+=400',
            // markers: true,
            scrub: true,
          },
        }
      )
    })
  }, {})

  return (
    <div
      className={classNames(
        'benefit-block',
        { 'benefit-block--transparent': type === 'transparent' },
        { 'benefit-block--dark': type === 'dark' }
      )}
    >
      {title && <h6 className="benefit-block__title">{title}</h6>}
      <p className="benefit-block__text">{text}</p>
      {icon && (
        <img className="benefit-block__icon" src={icon} alt="benefit-icon" />
      )}
    </div>
  )
}
