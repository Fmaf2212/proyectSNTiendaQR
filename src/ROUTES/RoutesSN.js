import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Tienda from '../PAGES/Tienda/Tienda'
import Login from '../PAGES/Login/Login'
// import DetalleProducto from '../PAGES/DetalleProducto/DetalleProducto'

const RoutesSN = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Tienda/>} />
          <Route path="/Login" element={<Login/>} />
          {/* <Route path="/DetalleProducto" element={<DetalleProducto/>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default RoutesSN
