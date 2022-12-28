import React from 'react'

import { Link } from 'react-router-dom'

import './login.css'

const Login = () => {
  return (
    <div className='bloqueLogin'>
      <form>
        <div className='bloqueInput'>
          <p>Usuario<input></input></p>
        </div>
        <div className='bloqueInput'>
          <p>Constraseña<input></input></p>
        </div>
        <div className='bloqueRecuperarContraseña'>
          <Link to="/RecuperarContra">
            <p>¿Has olvidado tu contraseña?</p>
          </Link>
        </div>
        <div className='bloqueButtonLogin'>
          <button>INICIAR SESIÓN</button>
          <button>REGÍSTRATE</button>
        </div>
        <div className='bloqueIndicacionIndispensable'>
          <p>*Es indispensable registrarse correctamente para la boleta de pago.</p>
        </div>
      </form>
    </div>
  )
}

export default Login