import aboutHeaderImg from '../../assets/images/about-header-img.png';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  function navigateToRoute(route: string) {
    navigate(`/${route}`);
  }

  return (
    <section className='about-page'>

      <header>
        <img
          src={aboutHeaderImg}
          alt="looking at the stars on top of the van" />
      </header>

      <div className="container">

        <div className="about-description">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>

          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>

          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>

        <div className="box-explore-our-vans">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button
            onClick={() => navigateToRoute('vans')}
            type='button'
            className='btn btn-secondary'>
            Explore our vans
          </button>
        </div>

      </div>

    </section>
  )
}