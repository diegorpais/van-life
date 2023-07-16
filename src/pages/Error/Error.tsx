import { useNavigate } from 'react-router-dom';

import './style.css';

export default function Error() {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate(`/`);
  }

  return (
    <section className='container container-min-height error-page'>
      <h1>
        Sorry, the page you were looking for was not found.
      </h1>
      <button
        onClick={redirectToHome}
        type='button'
        className='btn btn-secondary'>
        Return to home
      </button>
    </section>
  )
}