import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import home from '../../BASE/img/4-volver-a-inicio.png'
import carruselTienda from '../../BASE/img/3-BANNER-EJEMPLO.png'
import carritoTienda from '../../BASE/img/3-carrito-comprando.png'
import logoSN from '../../BASE/img/3-LOGO-ENCABEZADO.png'

import './header.css'

const Header = () => {
  const navigate = useNavigate()

  const clickLogin = () => {
    console.log('entré en clickLogin')

    navigate('/Login')
  }

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={home} alt='home'/>
        </Link>
        <img src={logoSN} alt='logoSN'/>
        <button onClick={() => clickLogin()} className="button">
          <div className="logout">Login</div>
        </button>
      </nav>
      <img src={carruselTienda} alt='carruselTienda'/>
      <div className='headerBottom'>
        <input placeholder='Encuentra tu producto'></input>
        <a href='https://www.youtube.com/'>¿Cómo comprar?</a>
        <div className='bloqueCarrito'>
          <Link to="/TuCarrito">
          <img src={carritoTienda} alt='carritoTienda' />
          </Link>
          <span>0</span>
        </div>
        {/* <img src={carritoTienda} alt='carritoTienda' /> */}
      </div>
    </header>
  )
}

export default Header