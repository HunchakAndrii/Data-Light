import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <a href="#" className="logo_link">
        <img src="/logo.svg" alt="logo" className="logo__img" />
        <p className="logo__text">Data Light</p>
      </a>
    </div>
  )
}
