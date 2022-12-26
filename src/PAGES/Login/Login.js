import React from 'react'

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
          <p>¿Has olvidado tu contraseña?</p>
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