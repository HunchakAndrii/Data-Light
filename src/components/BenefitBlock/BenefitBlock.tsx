import classNames from 'classnames'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import './BenefitBlock.scss'
import { useLayoutEffect } from 'react'

type BenefitBlockProps = {
  block: {
    title?: string
    text: string
    type: string
    icon?: string
  }
}

export const BenefitBlock: React.FC<BenefitBlockProps> = ({ block }) => {
  const { title, text, type, icon} = block;

  gsap.registerPlugin(ScrollTrigger)
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.benefit-block__icon',
        start: 'top 70%',
        end: 'bottom 30%',
        // markers: true,
        scrub: true,
      },
    })

    tl.fromTo('.benefit-block__icon', 
      {
        // x: 100,
        opacity: 0,
      },
      {
        // x: 0,
        opacity: 1,
        duration: 1.5,
      }
    )
  }, [])

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
