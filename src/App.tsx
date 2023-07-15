import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail/VanDetail';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
