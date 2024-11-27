import React from 'react'
import './Button.scss'

type ButtonTypes = {
  btnText: string
  type?: 'primary' | 'secondary' | 'form' | 'transparent'
  className: string
  onClick?: () => void
}

export const Button: React.FC<ButtonTypes> = ({ btnText, type, className }) => {
  const handleClick = () => {
    if (className === 'header__btn') {
      window.location.href = 'tel:+7(495) 555-55-55'
    }
  }

  return (
    <button className={`btn btn--${type} ${className}`} onClick={handleClick}>
      <p>{btnText}</p>
      {type === 'secondary' || type === 'transparent' ? (
        <img
          src="/images/icons/arrow-right-ligth.svg"
          alt="btn-icon"
          className="btn__icon"
        />
      ) : (
        <img
          src="/images/icons/arrow-right-dark.svg"
          alt="btn-icon"
          className="btn__icon"
        />
      )}
    </button>
  )
}
