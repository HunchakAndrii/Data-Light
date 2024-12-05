import { Button } from '../Elements/Button/Button'
import { casesCardsData } from '../../data/casesCardsData'
import { CasesCard } from '../CasesCard/CasesCard'
import { Link } from 'react-router-dom'
import './Cases.scss'

export const Cases = () => {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <h2 className="cases__title">Наши кейсы</h2>
        <div className="cases__cards">
          {casesCardsData.map((card, index) => (
            <CasesCard key={index} card={card} index={index} />
          ))}
        </div>
        <Link to="/cases">
          <Button
            btnText="Смотреть все кейсы"
            type="secondary"
            className="btn cases__btn"
          />
        </Link>
      </div>
    </section>
  )
}
