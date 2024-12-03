
import { Button } from '../Elements/Button/Button'
import { Tag } from '../Elements/Tag/Tag'

import './FirstSection.scss'

export const FirstSection = () => {

  return (
    <section className="first-section container">
      <div className="first-section__content">
        <h1 className="first-section__title">Data Light</h1>
        <p className="p-big first-section__text">
          подготовим данные <br /> для машинного обучения
        </p>
        <div className="first-section__tags">
          <Tag
            className="first-section__tag"
            text="Сбор и разметка любых данных"
          />
          <Tag className="first-section__tag" text="Готовые датасеты" />
          <Tag className="first-section__tag" text="Синтетические данные" />
          <Tag className="first-section__tag" text="Модерация" />
        </div>
        <a href="#contacts">
          <Button
            btnText="Оставить заявку"
            type="primary"
            className="btn first-section__btn"
          />
        </a>
      </div>

      <div className="first-section__image">
        <img
          className="first-section__img"
          src="/images/first-sectoin/first-section.png"
          alt=""
        />
        <img
          className="first-section__star-big"
          src="/images/icons/star-big.svg"
          alt="star"
        />
        <img
          className="first-section__star-small"
          src="/images/icons/star-small.svg"
          alt="star"
        />
      </div>

    </section>
  )
}
