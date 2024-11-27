import { Benefits } from '../../components/Benefits/Benefits'
import { Cases } from '../../components/Cases/Cases'
import { FirstSection } from '../../components/FirstSection/FirstSection'
import { Contacts } from '../../components/Contacts/Contacts'
import { Marquee } from '../../components/Marquee/Marquee'
import { Materials } from '../../components/Materials/Materials'
import { ServicesSection } from '../../components/ServicesSection/ServicesSection'
import { Works } from '../../components/Works/Works'
import './Home.scss'

export const Home = () => {
  return (
    <div className="home">
      <FirstSection />
      <Marquee />
      <ServicesSection />
      <Benefits />
      <Works />
      <Cases />
      <Materials />
      <Contacts />
      <img className="blur blur-1" src="/images/blur/blur-1.png" alt="" />
      <img className="blur blur-2" src="/images/blur/blur-2.png" alt="" />
      <img className="blur blur-3" src="/images/blur/blur-3.png" alt="" />
      <img className="blur blur-4" src="/images/blur/blur-4.png" alt="" />
    </div>
  )
}
