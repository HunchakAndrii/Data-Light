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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.benefit-block',
        start: 'top 85%',
        end: 'bottom 15%',
        // markers: true,
        scrub: true,
      },
    })

    tl.fromTo(
      '.benefit-block',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power3.out' }
    )

    if (icon) {
      const iconTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.benefit-block__icon',
          start: 'top 75%',
          end: 'bottom 25%',
          markers: true,
          scrub: true,
        }
      })
          
      iconTl.fromTo(
        '.benefit-block__icon',
        { opacity: 0,  },
        { opacity: 1,  duration: 1.5, ease: 'power3.out', stagger: 0.4 }
      )
    }
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
