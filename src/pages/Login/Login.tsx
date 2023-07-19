import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../../core/Context/LoginContext';
import { useNavigate } from 'react-router-dom';

import './style.css';

const loginFormSchema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('formato de e-mail inválido')
  ,
  password: z.string()
    .min(6, 'A senha deve ter no minimo 6 caracteres')
  ,
});

type LoginForm = z.infer<typeof loginFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema)
  });

  const { signin } = useLogin();
  const navigate = useNavigate();

  function handleLoginSubmit(data: LoginForm) {
    console.log('Form: ', data);
    signin();
    navigate('/host');
  }

  return (
    <section className='container container-min-height login-page'>
      <h1>Sign in to your account</h1>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>

        <div className='form-group'>
          <input
            className={errors.email && 'input-error'}
            type="text"
            id='input-email'
            placeholder='Email address'
            {...register('email')}
          />

          {
            errors.email
            && <span className='input-error-message'>
              {errors.email.message}
            </span>
          }
        </div>

        <div className='form-group'>
          <input
            className={errors.password && 'input-error'}
            type="password"
            id='input-password'
            placeholder='Password'
            {...register('password')}
          />

          {
            errors.password
            && <span className='input-error-message'>
              {errors.password.message}
            </span>
          }
        </div>

        <button
          type="submit"
          className='btn btn-primary'>
          Sign In
        </button>

      </form>
      <p className='create-account'>
        Don’t have an account? <span>Create one now</span>
      </p>
    </section>
  )
}