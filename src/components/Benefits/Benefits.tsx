import './Benefits.scss'
import { BenefitsBlocksData } from './../../data/BenefitsBlocksData'
import { BenefitBlock } from '../BenefitBlock/BenefitBlock'
import { Button } from '../Elements/Button/Button'

export const Benefits = () => {
  return (
    <>
      <section className="benefits" id="benefits">
        <div className="container">
          <h2 className="benefits__title">Преимущества</h2>
          <div className="benefits__blocks">
            {BenefitsBlocksData.map((block, index) => (
              <BenefitBlock key={index} block={block} />
            ))}

            <a href="#contacts">
              <Button
                btnText="Оставить заявку"
                type="primary"
                className="benefits__btn"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}