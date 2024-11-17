import { Button } from '../Elements/Button/Button'
import { Logo } from '../Elements/Logo/Logo'
import { MobileMenu } from '../Elements/MobileMenu/MobileMenu'
import { Nav } from '../Elements/Nav/Nav'
import './Header.scss'

export const Header = () => {
  return (
    <>
      <header className="header container">
        <Logo />
        <Nav type={'desktop'} />
        <Button btnText="Связаться" type="primary" className="header__btn" />
        <MobileMenu />
      </header>
    </>
  )
}
