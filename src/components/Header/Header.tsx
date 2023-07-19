import { NavLink, Link } from 'react-router-dom';
/* import { FaCircleUser } from "react-icons/fa6"; */

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

        {/* <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/login'
        >
          <FaCircleUser size={20} color={'#161616'} />
        </NavLink> */}

      </nav>
    </header>
  )
}