import './style.css';

export default function Home() {
  return (
    <section className='hero-image'>

      <div className="container">
        <div className="hero-text">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        </div>

        <button
          type='button'
          className='btn btn-primary'>
          Find your van
        </button>
      </div>


    </section>
  )
}