import React from 'react'

// import { Link } from 'react-router-dom'

import imgProducto from '../../BASE/img/3-producto-1.png'
import imgCallCenter from '../../BASE/img/4-icono-call-center.png'
import imgWsp from '../../BASE/img/4-icono-whatsapp.png'

import './detalleProducto.css'

const DetalleProducto = () => {
  let a = 1;
  const minusFunction = () =>{
    const num = document.querySelector(".num");
    if (a > 1) {
      a--;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    }
  }
  const plusFunction = () =>{
    const num = document.querySelector(".num");
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }


  return (
    <div>
      <div className='bloqueDetalleProducto'>
        <img src={imgProducto} alt='imgProducto' />
        <div className='bloqueNombreProducto'>
          <p>Concentrado de Kalmapross</p>
        </div>
        <div className='bloqueDescProducto'>
          <p>¿Problemas al orinar? ¡Cuida tu prostata con kalmapross! Kalmapross es un concentrado de extractos naturales ancestrales que te ayudarán a desinflamar tu sistema urinario y mantener la salud de tu prostata.</p>
        </div>
        <div className='bloqueCostoProducto'>
          <p>s/<span>34.00</span></p>
        </div>
      </div>
      <div className='bloqueViasDeCompra'>
        <div className='bloqueViaCompraCallCenter'>
          <img src={imgCallCenter} alt='imgCallCenter' />
          <div className='bloqueInfoCallCenter'>
            <p>Compra vía Call Center</p>
            <span>000 000 000</span>
          </div>
        </div>
        <div className='bloqueViaWsp'>
          <img src={imgWsp} alt='imgWsp' />
          <div className='bloqueInfoWsp'>
            <p>Compra vía Whatsapp</p>
            <span>000 000 000</span>
          </div>
        </div>
      </div>
      <div className='bloqueCantProductos'>
        <div className="wrapper">
          <span className="minus" onClick={minusFunction}>-</span>
          <span className="num">01</span>
          <span className="plus" onClick={plusFunction}>+</span>
        </div>
        <div className='bloqueEnlace'>
          <button>
            AGREGAR MAS PRODUCTOS
          </button>
          <button className='btnContinuarCompra'></button>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto