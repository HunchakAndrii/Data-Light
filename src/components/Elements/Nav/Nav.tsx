import classNames from 'classnames'
import './Nav.scss'

interface NavProps {
  type: 'mobile' | 'desktop' | 'footer';
  onLinkClick?: () => void;
}

export const Nav = ({ type, onLinkClick }: NavProps) => {
  return (
    <nav
      className={classNames('nav', {
        'nav--mobile': type === 'mobile',
        'nav--desktop': type === 'desktop',
        'nav--footer': type === 'footer',
      })}
    >
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#cases" className="nav__link" onClick={onLinkClick}>
            Наши решения
          </a>
        </li>
        <li className="nav__item">
          <a href="#benefits" className="nav__link" onClick={onLinkClick}>
            Преимущества
          </a>
        </li>
        <li className="nav__item">
          <a href="#services" className="nav__link" onClick={onLinkClick}>
            O компании
          </a>
        </li>
        <li className="nav__item">
          <a href="#contacts" className="nav__link" onClick={onLinkClick}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  )
}
