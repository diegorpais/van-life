import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import './style.css';

export default function Dashboard() {
  return (
    <section className='container-min-height dash-page'>

      <div className="welcome-box">
        <div className='container'>
          <h3>Welcome</h3>
          <div className='welcome-info'>
            <p>Income last <span>30 days</span></p>
            <Link to='/host/income'>Details</Link>
          </div>
          <h1>$2,260</h1>
        </div>
      </div>

      <div className="score-box">
        <div className='container'>
          <div className='score'>
            <p> Review score </p>
            <p> <FaStar size={20} color={'#FF8C38'} /> 5.0<span>/5</span> </p>
          </div>
          <Link to='/host/reviews'>Details</Link>
        </div>
      </div>

    </section>
  )
}