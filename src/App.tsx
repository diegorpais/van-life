import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail/VanDetail';
import Error from './pages/Error/Error';
import HostLayout from './components/HostLayout/HostLayout';
import Dashboard from './pages/Host/Dashboard/Dashboard';
import Income from './pages/Host/Income/Income';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='*' element={<Error />} />
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />

            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />

            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
