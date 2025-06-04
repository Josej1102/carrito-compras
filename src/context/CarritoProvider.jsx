import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({children}) => {

    const ComprasReducer = (state = initialState, action = {} ) => {
        switch (action.type) {
            case 'AUMENTAR_COMPRA':
                return [...state, action.payload]
            case 'ELIMINAR_COMPRA':
                return state.filter(compra => compra.id !== action.payload)
            case 'AUMENTAR_CANTIDAD':
                return state.map(compra => 
                    compra.id === action.payload ? {...compra, cantidad: compra.cantidad + 1} : compra
                )
            case 'DISMINUIR_CANTIDAD':
                return state.map(compra => 
                    compra.id === action.payload ? {...compra, cantidad: compra.cantidad - 1} : compra
                )
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer( ComprasReducer , initialState)

    
    const aumentarCompra = (compra) => {
        compra.cantidad = 1; // Inicializar cantidad en 1
        const action = {
            type: 'AUMENTAR_COMPRA',
            payload: compra
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: 'ELIMINAR_COMPRA',
            payload: id
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: 'AUMENTAR_CANTIDAD',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: 'DISMINUIR_CANTIDAD',
            payload: id
        }
        dispatch(action)
    }

    

  return (
    <CarritoContext.Provider value={{ listaCompras, aumentarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad }}>
      {children}
    </CarritoContext.Provider>
  )
}
