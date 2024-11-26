
import { Logo } from '../Elements/Logo/Logo'
import { Nav } from '../Elements/Nav/Nav'
import { SocialsLinks } from '../Elements/SocialsLinks/SocialsLinks'
import './Footer.scss'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__nav">
              <Nav type={'footer'} />
            </div>
            <div className="footer__links">
              <a className="footer__link" href="#">
                Модерация контента
              </a>
              <a className="footer__link" href="#">
                Разметка данных
              </a>
              <a className="footer__link" href="#">
                Сбор данных
              </a>
              <a className="footer__link" href="#">
                Синтетические данные
              </a>
              <a className="footer__link" href="#">
                Датасеты
              </a>
            </div>
            <div className="footer__contact-block">
              <a className='footer__contact-link' href="tel:+1234567890">
                <h3 className="footer__title">+38 (095) 999-99-99</h3>
              </a>
              <a className='footer__contact-link' href="mailto:info@datalight.com">
                <h3 className="footer__title">info@datalight.com</h3>
              </a>
              <SocialsLinks />
            </div>
            <div className="footer__bottom">
              <a href="#">Политика обработки персональных данных</a>
              <a href="#">Договор оферты</a>
              <p>ООО “Дата Лайт” 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
