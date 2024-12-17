import { Form } from '../Elements/Form/Form'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contacts.scss'

gsap.registerPlugin(ScrollTrigger)

export const Contacts = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contacts__image',
        start: 'top 80%',
        end: '+=600',
        scrub: true,
        // markers: true,
      },
    })

    tl.from(
      '.contacts__image',
      { xPercent: 100 }
    )

    // if (window.innerWidth > 1200) {
      
      tl.from(
        '.contacts__img-girl',
        { xPercent: 100 },
        '+=0.2'
      )
    // }
  }, {})

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__wrap">
          <Form />
          <div className="contacts__image">
            <p className="contacts__position">
              Мария,
              <br /> Sales манаджер
            </p>
            <img
              className="contacts__img-girl"
              src="images/form/girls.png"
              alt="girl"
            />
            <img
              className="contacts__star-80"
              src="/images/form/star-80.svg"
              alt="star"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
