import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

export default function HostVanDetailLayout() {
  return (
    <>
      <nav className='host-van-detail-layout'>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/host/my-vans/:id'
        >
          Details
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/host/my-vans/:id/price'
        >
          Pricing
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to='/host/my-vans/:id/photos'
        >
          Photos
        </NavLink>

      </nav>

      <Outlet />
    </>
  )
}