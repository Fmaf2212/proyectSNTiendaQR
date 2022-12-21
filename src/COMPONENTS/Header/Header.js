import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import carruselTienda from '../../BASE/img/carruselTienda.png'
import carritoTienda from '../../BASE/img/carritoTienda.png'
import logoSN from '../../BASE/img/logoSantaNaturaHeader.png'

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
        <div>
          <Link to="/">
            Casita
          </Link>
        </div>
        <img src={logoSN} alt='logoSN'/>
        <button onClick={() => clickLogin()} className="button">
          <div className="logout">Login</div>
        </button>
      </nav>
      <img src={carruselTienda} alt='carruselTienda'/>
      <div className='headerBottom'>
        <input placeholder='Encuentra tu producto'></input>
        <a href='https://www.youtube.com/'>¿Cómo comprar?</a>
        <img src={carritoTienda} alt='carritoTienda' />
      </div>
    </header>
  )
}

export default Header