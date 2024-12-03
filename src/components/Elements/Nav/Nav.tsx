import classNames from 'classnames'
import './Nav.scss'

interface NavProps {
  type: 'mobile' | 'desktop' | 'footer'
  onLinkClick?: () => void
}

const navLionks = [
  { href: '#cases', text: 'Наши решения' },
  { href: '#benefits', text: 'Преимущества' },
  { href: '#services', text: 'O компании' },
  { href: '#contacts', text: 'Контакты' },
]

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
        {navLionks.map((link, index) => (
          <li key={index} className="nav__item">
            <a href={link.href} className="nav__link" onClick={onLinkClick}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
