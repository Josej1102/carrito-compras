import { Navigate, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage} from "./pages/comprasPage"
import { CarritoPage } from "./pages/carritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const App = () => {
  return (
    
    <ProductosProvider> 
      <CarritoProvider>

      <NavBar>       </NavBar>
        <div className="container">
          <Routes>
          <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="/carrito" element={<CarritoPage></CarritoPage>} ></Route>
          <Route path="*" element={<Navigate to ='/'/>} ></Route>
        </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
    
  )
}
