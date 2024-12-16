import './TimeLine.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

export const TimeLine = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.timeline`,
        start: 'top top', // Начало анимации при достижении верхней части экрана
        end: '+=500', // Длина анимации
        scrub: true,
        pin: '.timeline', // Фиксация .timeline на месте
        pinSpacing: false, // Убирает дополнительное пространство при фиксации
        markers: true,
      },
    })

    tl.to('.timeline__line', {
      '--before-transform': 'translateX(100%)',
      duration: 1,
      ease: 'power1.out',
    })
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
