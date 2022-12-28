import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import btnAtrasCarrito from '../../BASE/img/6-boton-atras-carrito.png'
import producto3 from '../../BASE/img/3-producto-3.png'
import tachoBasura from '../../BASE/img/6-tacho-basura.png'

import './tuCarrito.css'

const TuCarrito = () => {
  const navigate = useNavigate()
  
  const [isFacturaSelected, setIsFacturaSelected] = useState(false);

  const clickFlechaAtras = () => {
    console.log('entré en clickFlechaAtras')

    navigate('/UbicacionPedido')
  }

  const tipoComprobante = (e) =>{
    console.log(e.target.value);
    if(e.target.value === '2'){
      setIsFacturaSelected(true);
      console.log('entré en true');
    }else{
      setIsFacturaSelected(false);
    }
  }

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
    <div className='bloqueTuCarrito'>
      <section className='bloqueTuCarrito__top'>
        <img src={btnAtrasCarrito} alt="btnAtrasCarrito" onClick={clickFlechaAtras}/>
        <h1>TU CARRITO</h1>
        <button>VACIAR</button>
      </section>
      <section className='bloqueTuCarrito__listaProductosAñadidos'>
        <div className='bloqueTextoCantidadProductos'>
          <p>Tienes 1 producto en tu carrito</p>
        </div>
        <div className='bloqueInfoListaProductos'>
          <div className='bloqueImgProducto'>
            <img src={producto3} alt='producto3'/>
          </div>
          <div className='bloqueInfoCantidadProducto'>
            <div className='bloqueInfoEliminar'>
              <div>
                <p>Concentrado de Kalmapross</p>
                <p>s/34.00</p>
              </div>
              <img src={tachoBasura} alt='tachoBasura'/>
            </div>
            <div className='bloqueWrapperCantProductos'>
              <div className="wrapper">
                <span className="minus" onClick={minusFunction}>-</span>
                <span className="num">01</span>
                <span className="plus" onClick={plusFunction}>+</span>
              </div>
            </div>
          </div>
          

        </div>
        <div className='bloqueLocalSeleccionado'>
          <label>Local seleccionado para retiro</label>
          <input value='Av. Jorge Basadre 990, San Isidro' readOnly></input>
        </div>
        <div className='bloqueTipoDeComprobante'>
          <select id='valueSelectTipoComprobantes' name="select" onChange={e => tipoComprobante(e)}>
            <option value="0">Seleccione tipo de Comprobante</option>
            <option value="1">Boleta</option>
            <option value="2">Factura</option>
          </select>
          {
            (!!isFacturaSelected) ?
            <div className='bloqueIngreseRuc'>
              <input placeholder='Ingrese Número de RUC'></input>
              <button>Validar Ruc</button>
            </div>
            : null
          }
          
        </div>
        <div className='bloqueComentarios'>
          <p>Nos encantaría recibir sus comentarios acerca de la compra. Si tienes un comentario extra puedes dejarlo a continuación (máx. 48 carácteres).</p>
          <textarea></textarea >
        </div>
        <div className='bloqueTotalConfirmar'>
          <div className='bloqueSubTotal'>
            <label>Subtotal</label>
            <span>s/34.00</span>
          </div>
          <div className='bloqueTotal'>
            <label>TOTAL</label>
            <span>s/34.00</span>
          </div>  
          <button className='btnConfirmar'>CONFIRMAR</button>
        </div>
      </section>
    </div>
  )
}

export default TuCarrito