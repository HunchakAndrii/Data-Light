import { FirstSection } from '../../FirstSection/FirstSection'
import { Marquee } from '../../Marquee/Marquee'
import { ServicesSection } from '../../ServicesSection/ServicesSection'
import './Home.scss'

export const Home = () => {
  return (
    <div className="home">
      <FirstSection />
      <Marquee />
      <ServicesSection />
    </div>
  )
}
