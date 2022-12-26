import React, { useState } from 'react'

import movilUbi from '../../BASE/img/4-icono-delivery.png'
import movilUbiWhite from '../../BASE/img/4-icono-delivery-blanco.png'
import tiendaUbi from '../../BASE/img/4-boton-recojo-tienda.png'
import tiendaUbiWhite from '../../BASE/img/4-boton-recojo-tienda-blanco.png'

import './ubicacionPedido.css'

const UbicacionPedido = () => {
  const [isSelect1, setIsSelect1] = useState(false)
  const [isSelect2, setIsSelect2] = useState(false)

  const changeActiveBloqueMovilUbi = (e) =>{
    e.preventDefault();
    if(isSelect1 !== true){
      setIsSelect1(!isSelect1);
      if(isSelect2 === true){
        setIsSelect2(!isSelect2);
      }
    }
  }
  const changeActiveBloqueTiendaUbi = (e) =>{
    e.preventDefault();
    if(isSelect2 !== true){
      setIsSelect2(!isSelect2);
      if(isSelect1 === true){
        setIsSelect1(!isSelect1);
      }
    }
  }

  return (
    <div className='bloqueUbicacionPedido'>
      <section className='bloqueIngresarUbicacion'>
        <div>
          <h2>INGRESAR UBICACIÓN</h2>
        </div>
        <div className={`${!!isSelect1 ? 'bloqueMovilUbi selected' : 'bloqueMovilUbi'} `} onClick={changeActiveBloqueMovilUbi}>
          {
            !!isSelect1 ? <img src={movilUbiWhite} alt='movilUbi'/> : <img src={movilUbi} alt='movilUbi'/>
          }
          <p>Ingresa tu ubicación para conocer el costo de envío a domicilio</p>
        </div>
        <div className={`${!!isSelect2 ? 'bloqueTiendaUbi selected' : 'bloqueTiendaUbi'} `} onClick={changeActiveBloqueTiendaUbi}>
          {
            !!isSelect2 ? <img src={tiendaUbiWhite} alt='tiendaUbi'/> : <img src={tiendaUbi} alt='movilUbi'/>
          }
          <div>
            <span>SAN ISIDRO</span>
            <p>Av. Jorge Basadre 990, San Isidro, Lima</p>
          </div>
        </div>
      </section>
      {
        !!isSelect1
        ?
        <section className='bloqueIngresaDireccion'>
          <input placeholder='Ingresa tu ubicación'></input>
        </section>
        : null
      }
      <section className='bloqueContinuarCompra'>
        <button className='btnContinuarCompra'></button>
      </section>
    </div>
  )
}

export default UbicacionPedido