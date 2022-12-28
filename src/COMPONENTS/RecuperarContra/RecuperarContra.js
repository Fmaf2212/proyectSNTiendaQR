import React, { useState } from 'react'

import './recuperarContra.css'

import logoSN from '../../BASE/img/5-logo.png' 
import compraExitosa from '../../BASE/img/5-icono-compra-exitosa.png' 

const RecuperarContra = () => {
  const [isSendEmail, setIsSendEmail] = useState(true);

  const clickRecuContraseña = (e) =>{
    e.preventDefault();
    console.log('entré en clickRecuContraseña');
    setIsSendEmail(!isSendEmail);
  }

  return (
    <div className='bloqueRecuperarContra'>
      <img src={logoSN} alt='logoSN' />
      <div className='formRecuperarContraseña'>
        <form>
          <input placeholder='Correo'></input>
          <button onClick={e=>clickRecuContraseña(e)}>RECUPERAR CONTRASEÑA</button>
        </form>
      </div>

      <div className='mensajeEnvioSatisfactorio' style={isSendEmail?{visibility:'hidden'}:{visibility:'revert'}}>
        <p>SE ENVIÓ LA CONTRASEÑA AL CORREO ELECTRÓNICO ASOCIADO A LA CUENTA</p>
        <img src={compraExitosa} alt='compraExitosa' />
      </div>
      

    </div>
  )
}

export default RecuperarContra