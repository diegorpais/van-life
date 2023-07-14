import { BrowserRouter } from 'react-router-dom';


import Home from './pages/Home/Home.tsx';
/* import About from './pages/About/About.tsx' */
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  )
}
