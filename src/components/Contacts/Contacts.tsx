import { Form } from '../Elements/Form/Form'
import './Contacts.scss'

export const Contacts = () => {
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
              src="/src/assets/form/girls.png"
              alt="girl"
            />
            <img
              className="contacts__star-80"
              src="/src/assets/form/star-80.svg"
              alt="star"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
