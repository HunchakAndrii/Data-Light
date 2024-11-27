import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo_link">
        <img src="/logo.svg" alt="logo" className="logo__img" />
        <p className="logo__text">Data Light</p>
      </Link>
    </div>
  )
}
