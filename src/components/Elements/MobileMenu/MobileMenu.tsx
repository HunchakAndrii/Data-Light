import { useEffect, useState } from 'react'
import { Nav } from '../Nav/Nav'
import classNames from 'classnames'

import './MobileMenu.scss'

export const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const handleLinkClick = () => {
    setIsActive(false) 
  }

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isActive])

  return (
    <>
      {isActive && <div className="overlay" onClick={toggleMenu}></div>}

      <div className={classNames('mobile-menu', { active: isActive })}>
        <div className="burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mobile-menu__content">
          <Nav type={'mobile'} onLinkClick={handleLinkClick} />
        </div>
      </div>
    </>
  )
}
