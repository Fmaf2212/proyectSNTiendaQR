import React from 'react'

import logoSN from '../../BASE/img/5-logo.png' 

import './registrarse.css'

const Registrarse = () => {
  return (
    <div className='bloqueRegistrarse'>
      <img src={logoSN} alt='logoSN' />
      <form>
        <input className='inputText' placeholder='Nombre y Apellido'/>
        <input className='inputText' placeholder='Celular'/>
        <input className='inputText' placeholder='DNI'/>
        <input className='inputText' placeholder='Correo'/>
        <p>Los datos solicitados son con fines informativos para obtener el comprobante de pago</p>
        <input type='submit' placeholder='Correo'/>
      </form>
      <span></span>
    </div>
  )
}

export default Registrarse