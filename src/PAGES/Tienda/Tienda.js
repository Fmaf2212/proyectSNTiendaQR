import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'

import Header from '../../COMPONENTS/Header/Header'
import ListadoProductos from '../../COMPONENTS/ListadoProductos/ListadoProductos'
import DetalleProducto from '../DetalleProducto/DetalleProducto'
import UbicacionPedido from '../../COMPONENTS/UbicacionPedido/UbicacionPedido'
import TuCarrito from '../../COMPONENTS/TuCarrito/TuCarrito'
import Footer from '../../COMPONENTS/Footer/Footer'
import Login from '../Login/Login'


const Tienda = () => {
  const location = useLocation()

  return (
    <div>
      {location.pathname !== '/Login' && <Header />}

      <Routes>
        <Route path="/" exact element={<ListadoProductos />} />
        <Route path="/DetalleProducto" element={<DetalleProducto />} />
        <Route path="/UbicacionPedido" element={<UbicacionPedido />} />
        <Route path="/TuCarrito" element={<TuCarrito />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      {/* <ListadoProductos /> */}
      {/* <DetalleProducto />
      <UbicacionPedido />
      <TuCarrito /> */}

      {location.pathname !== '/Login' && <Footer />}
    </div>
  )
}

export default Tienda
