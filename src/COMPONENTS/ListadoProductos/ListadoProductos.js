import React from 'react'

import { useNavigate, Link } from 'react-router-dom'

import PLATANO_CON_MIEL_SILVESTRE from '../../BASE/img/PLATANO_CON_MIEL_SILVESTRE.png'

import './listadoProductos.css'

const ListadoProductos = () => {
  const navigate = useNavigate()

  const goDetailsProduct = () => {
    console.log('entré en goDetailsProduct')
    navigate('/DetalleProducto')
  }

  const data = [{
    name: 'Platano con miel silvestre',
    price: '99.00'
  }]
  let products = []
  for(let i = 0; i < 12; i++){
    products.push(
      <article key={i}>
        <Link to="/DetalleProducto">
          <div className='bloqueImgProduct' onClick={goDetailsProduct}>
            <img src={PLATANO_CON_MIEL_SILVESTRE} alt='PLATANO_CON_MIEL_SILVESTRE' />
          </div>
          <p className='nameProduct'>{data[0].name}</p>
          <p className='priceProduct'>S/<span>{data[0].price}</span></p>
        </Link>
        <div className='bloqueBtnAñadirCarrito'>
          <button className='añadirCarrito'>AÑADIR</button>
        </div>
      </article>
    )
  }
  return (
    <section className='sectionListadoProductos'>
      {products}
    </section>
  )
}

export default ListadoProductos