import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";

import ListedVans from '../ListedVans/ListedVans';

import './style.css';
import { api } from '../../../services/api';
import Van from '../../../models/van.model';
import DashReview from '../../../models/dash-review.model';
import DashIncome from '../../../models/dash-income.model';
import HostDash from '../../../models/host-dash.model';

export default function Dashboard() {
  const [listedVans, setListedVans] = useState<Array<Van>>([]);
  const [review, setReview] = useState<Array<DashReview>>([]);
  const [income, setIncome] = useState<Array<DashIncome>>([]);

  useEffect(() => {
    api.get('dash')
      .then(res => getInitialValues(res.data))
  }, []);

  function getInitialValues(initialValues: HostDash) {
    const { listedVans, review, income } = initialValues;

    setListedVans(listedVans);
    setReview(review);
    setIncome(income);
  }

  const incomeElement = income.map(i => (
    <h1 key={i.value}>${i.value}</h1>
  ));

  const reviewElement = review.map(r => (
    <p key={r.stars}>
      <FaStar size={20} color={'#FF8C38'} />
      {r.stars}
      <span>/{r.amount}</span>
    </p>
  ));


  return (
    <section className='container-min-height dash-page'>

      <div className="welcome-box">
        <div className='container'>

          <h3>Welcome</h3>
          <div className='welcome-info'>
            <p>Income last <span>30 days</span></p>
            <Link to='/host/income'>Details</Link>
          </div>
          {income.length > 0 ? (incomeElement) : (<h1>$0</h1>)}
        </div>
      </div>

      <div className="score-box">
        <div className='container'>
          <div className='score'>
            <p> Review score </p>
            {
              review.length > 0
                ? (reviewElement)
                : (<p> <FaStar size={20} color={'#FF8C38'} /> 5.0<span>/0</span> </p>)
            }
          </div>
          <Link to='/host/reviews'>Details</Link>
        </div>
      </div>

      <div className="listed-vans container">
        <header>
          <h1>Your listed vans</h1>
          <Link to='/host/vans'>View all</Link>
        </header>
        <ListedVans listedVans={listedVans} />
      </div>

    </section>
  )
}