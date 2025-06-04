import {useContext,  } from "react"
import { Card } from "../components/Card"
import '../styles/card.css'
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

    
    const {productos} = useContext(ProductosContext)

    const { aumentarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext)

    const handleAgregar = (compra) =>{
      aumentarCompra(compra)
    }
    const handleQuitar = (id) =>{
      eliminarCompra(id)
    }
    const handleAumentar = (id) => {
      aumentarCantidad(id)
    }
    const handleDisminuir = (id) => {
      disminuirCantidad(id)
    }


  return (
    <>
        <h1>Compras: </h1>
        <hr />
        <div className="contenedor-tarjetas">

        {productos.map((producto) => (
            <Card
            key={producto.id}
            imagen={producto.image}
            precio={producto.price}
            descripcion={producto.description}
            titulo={producto.title}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
            handleAumentar={() => handleAumentar(producto.id)}
            handleDisminuir={() => handleDisminuir(producto.id)}
            ></Card>   
        ))}
        </div>
    </>
  )
}



