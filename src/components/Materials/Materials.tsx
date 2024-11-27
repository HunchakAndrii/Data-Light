import { Button } from '../Elements/Button/Button'
import { materialsCardsData } from '../../data/materialsCardsData'
import { MaterialsCard } from '../MaterialsCard/MaterialsCard'
import './Materials.scss'
import { Link } from 'react-router-dom'

export const Materials = () => {

  return (
    <section className="materials container ">
      <h2 className="materials__title">Полезные материалы</h2>

      <div className="materials__cards">
        {materialsCardsData.map((card, index) => (
          <MaterialsCard key={index} card={card} />
        ))}
      </div>

      <Link to="/materials">
        <Button
          btnText="Читать все"
          type="secondary"
          className="btn materials__btn"
        />
      </Link>
    </section>
  )
}
