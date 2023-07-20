import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

interface HostVanDetailLayoutProps {
  id: string;
}

export default function HostVanDetailLayout({ id }: HostVanDetailLayoutProps) {
  return (
    <>
      <nav className='host-van-detail-layout'>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={`/host/my-vans/${id}`}
          end
        >
          Details
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={`/host/my-vans/${id}/price`}
        >
          Pricing
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={`/host/my-vans/${id}/photos`}
        >
          Photos
        </NavLink>

      </nav>

      <Outlet />
    </>
  )
}