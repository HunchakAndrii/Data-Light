import './TimeLine.scss'

export const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timeline__container">
        <div className="timeline__item">
          <div className="timeline__image">
            <img
              className="timeline__img"
              src="/src/assets/timeline/timeline-1.svg"
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
              src="/src/assets/timeline/timeline-2.svg"
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
              src="/src/assets/timeline/timeline-3.svg"
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
              src="/src/assets/timeline/timeline-4.svg"
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
              src="/src/assets/timeline/timeline-5.svg"
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
          <img src="/src/assets/timeline/Union.svg" alt="timeline__img" />
        </div>
      </div>
    </div>
  )
}

