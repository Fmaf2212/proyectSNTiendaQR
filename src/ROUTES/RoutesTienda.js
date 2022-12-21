import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

// import Header from '../COMPONENTS/Header/Header'
import Tienda from '../PAGES/Tienda/Tienda'
// import DetalleProducto from '../PAGES/DetalleProducto/DetalleProducto'
// import UbicacionPedido from '../COMPONENTS/UbicacionPedido/UbicacionPedido'
// import TuCarrito from '../COMPONENTS/TuCarrito/TuCarrito'
// import Footer from '../COMPONENTS/Footer/Footer'
// import Login from '../PAGES/Login/Login'

const RoutesTienda = () => {

    return (
        <Router>
          <Tienda />
          {/* <div>
            {
              location.pathname !== '/Login' && <Header />
            }            
            <Routes>
              <Route path="/" exact element={<Tienda/>} />
              <Route path="/DetalleProducto" element={<DetalleProducto/>} />
              <Route path="/UbicacionPedido" element={<UbicacionPedido/>} />
              <Route path="/TuCarrito" element={<TuCarrito/>} />
              <Route path="/Login" element={<Login/>} />
            </Routes>    
            {
              location.pathname !== '/Login' && <Footer />
            }
          </div> */}
        </Router>
      )
}

export default RoutesTienda