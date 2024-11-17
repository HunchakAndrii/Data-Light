import classNames from 'classnames'
import './Nav.scss'

interface NavProps {
  type: 'mobile' | 'desktop';
}

export const Nav = ({ type }: NavProps) => {
  return (
    <nav
      className={classNames('nav', {
        'nav--mobile': type === 'mobile',
        'nav--desktop': type === 'desktop'
      })}
    >
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Наши решения
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Преимущества
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            O компании
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  )
}
