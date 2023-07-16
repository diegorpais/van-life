import { NavLink, Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import './style.css';

export default function Header() {
  return (
    <header className='header-component'>
      <div className="logo">
        <Link to='/'>
          <img src={logoImg} alt="logo" />
        </Link>
      </div>
      <nav>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/host'
        >
          Host
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/about'
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/vans'
        >
          Vans
        </NavLink>

      </nav>
    </header>
  )
}