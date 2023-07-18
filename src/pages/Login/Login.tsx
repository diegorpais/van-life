import './style.css';

export default function Login() {
  return (
    <section className='container container-min-height login-page'>
      <h1>Sign in to your account</h1>
      <form>
        <input type="text" placeholder='Email address' />
        <input type="password" placeholder='Password' />
        <button type="submit" className='btn btn-primary'>Sign In</button>
      </form>
      <p className='create-account'>
        Don’t have an account? <span>Create one now</span>
      </p>
    </section>
  )
}