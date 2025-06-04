import { CarritoContext} from "../context/CarritoContext"
import { useContext } from "react"
export const CarritoPage = () => {

  const {listaCompras, eliminarCompra, aumentarCantidad, disminuirCantidad} = useContext(CarritoContext)


  const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0 ).toFixed(2)
    }

  const handleImpresion = () => {
    print();
    alert("Gracias por su compra")
  }

  return (
    <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombra</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((compra) => (
              <tr key={compra.id}>
                <th scope="row">{compra.title}</th>
                <td>{compra.price}</td>
                <td>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-sm btn-secondary me-1"
                      onClick={() => disminuirCantidad(compra.id)}
                      disabled={compra.cantidad <= 1}
                      >
                        -
                      </button>
                      {compra.cantidad}
                      <button
                      className="btn btn-sm btn-secondary ms-1"
                      onClick={() => aumentarCantidad(compra.id)}
                      >
                        +
                      </button>
                  </div>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => eliminarCompra(compra.id)}>Eliminar</button>
                </td>
              </tr>
            ))} 
            
          </tbody>
        </table>
        <h5 className="mt-3">Total: ${calcularTotal()}</h5>
        <div className="d-grid gap-2">
        <button 
        className="btn btn-primary" 
        onClick={handleImpresion}
        >Comprar</button>
        </div>
    </>
  )
}
