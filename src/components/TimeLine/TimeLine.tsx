import './TimeLine.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

export const TimeLine = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const isMobile = window.innerWidth <= 576
    const isTablet = window.innerWidth > 576 && window.innerWidth <= 992
    const isDesktop = window.innerWidth > 992

    if (isDesktop) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.works__title`,
          start: 'top 10%',
          end: '+=2000',
          scrub: true,
          pin: '.timeline',
          // markers: true,
        },
      })

      tl.to('.timeline__line', {
        '--before-transform': 'translateX(100%)',
        '--blur': '6px',
        duration: 5,
        ease: 'power1.out',
      })

      document.querySelectorAll('.timeline__item').forEach((item, index) => {
        const animDirection = index % 2 === 0 ? 100 : -100

        tl.fromTo(
          item,
          { opacity: 0, y: animDirection },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: 'power3.in',
          }
        )
      })
    } else if (isTablet) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.works__title`,
          start: 'top 10%',
          end: 'bottom 90%',
          scrub: true,
          pin: '.timeline',
          // markers: true,
        },
      })

      document.querySelectorAll('.timeline__item').forEach((item, index) => {
        const animDirection = index % 2 === 0 ? 100 : -100

        tl.fromTo(
          item,
          { opacity: 0, x: animDirection },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.in',
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'bottom 80%',
              scrub: true,
              // markers: true,
            },
          }
        )
      })
    } else if (isMobile) {
      document.querySelectorAll('.timeline__item').forEach(item => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 200 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.in',
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'bottom 80%',
              scrub: true,
              // markers: true,
            },
          }
        )
      })

    }
  }, {})

  return (
    <div className="timeline">
      <div className="timeline__container">
        <div className="timeline__item">
          <div className="timeline__image">
            <img
              className="timeline__img"
              src="/images/timeline/timeline-1.svg"
              alt=""
            />
          </div>

          <div className="timeline__content">
            <h5 className="timeline__step">01</h5>
            <p className="timeline__text">
              Брифинг, формирование <br /> технического задания
            </p>
          </div>
        </div>

        <div className="timeline__item">
          <div className="timeline__image">
            <img
              className="timeline__img"
              src="/images/timeline/timeline-2.svg"
              alt=""
            />
          </div>

          <div className="timeline__content">
            <h5 className="timeline__step">02</h5>
            <p className="timeline__text">
              Пилотирование проекта, <br /> расчет стоимости и сроков
            </p>
          </div>
        </div>

        <div className="timeline__item">
          <div className="timeline__image">
            <img
              className="timeline__img"
              src="/images/timeline/timeline-3.svg"
              alt=""
            />
          </div>

          <div className="timeline__content">
            <h5 className="timeline__step">03</h5>
            <p className="timeline__text">
              Согласование <br /> условий
            </p>
          </div>
        </div>

        <div className="timeline__item">
          <div className="timeline__image">
            <img
              className="timeline__img"
              src="/images/timeline/timeline-4.svg"
              alt=""
            />
          </div>

          <div className="timeline__content">
            <h5 className="timeline__step">04</h5>
            <p className="timeline__text">
              Оформление <br /> договора
            </p>
          </div>
        </div>

        <div className="timeline__item">
          <div className="timeline__image">
            <img
              className="timeline__img"
              src="/images/timeline/timeline-5.svg"
              alt=""
            />
          </div>

          <div className="timeline__content">
            <h5 className="timeline__step">05</h5>
            <p className="timeline__text">
              Старт <br /> работ
            </p>
          </div>
        </div>

        <div className="timeline__line">
          <img src="/images/timeline/Union.svg" alt="timeline__img" />
        </div>
      </div>
    </div>
  )
}
