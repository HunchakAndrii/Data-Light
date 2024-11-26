import { TimeLine } from '../TimeLine/TimeLine'
import './Works.scss'

export const Works = () => {
  return (
    <section className="works ">
      <div className="container">
        <h2 className="works__title">Этапы работ</h2>
        <TimeLine />
      </div>
      {/* <img className="blur-3" src="/src/assets/blur/blur-3.png" alt="" /> */}
    </section>
  )
}
