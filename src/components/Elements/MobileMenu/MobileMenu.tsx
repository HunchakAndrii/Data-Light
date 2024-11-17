import { useState } from 'react';
import { Nav } from '../Nav/Nav';
import classNames from 'classnames';
import './MobileMenu.scss';

export const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={classNames('mobile-menu', { active: isActive})}
    >
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mobile-menu__content">
        <Nav type={'mobile'} />
      </div>
    </div>
  )
};
