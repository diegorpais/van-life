import { NavLink, Outlet } from 'react-router-dom';

import './style.css';

export default function HostLayout() {
  return (
    <>
      <section className='container host-layout'>
        <nav>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
            to='/host'
          >
            Dashboard
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/host/income'
          >
            Income
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/host/vans'
          >
            Vans
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/host/reviews'
          >
            Reviews
          </NavLink>

        </nav>
      </section>

      <Outlet />
    </>
  )
}