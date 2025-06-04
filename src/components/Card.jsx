import { useState } from "react"
import '../styles/card.css'
export const Card = ({imagen, precio, descripcion, titulo, handleAgregar, handleQuitar}) => {

    const [added, setadded] = useState(false)

    const agregarCarrtito = () => {
        handleAgregar()
        setadded(true)
    }
    const quitarCarrito = () => {
        handleQuitar()
        setadded(false)
    }
  return (
    <div className="contenedor-tarjeta">

    <div className="tarjeta">
        <img className="tarjeta-imagen" src={imagen}/>
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-descripcion">{descripcion}</p>
            <p className="tarjeta-precio">${precio}</p>
            {( added ?
        <button
        type="button"
        className="boton-quitar"
        onClick={quitarCarrito}
        >Quitar del carrito</button>
        : <button
        type="button"
        className="boton-enviar"
        onClick={agregarCarrtito}
        >Agregar al carrito</button>)}
        </div>

        
    </div>
    </div>
  )
}


