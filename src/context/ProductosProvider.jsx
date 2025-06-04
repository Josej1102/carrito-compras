import { useState, useEffect } from 'react';
import { ProductosContext } from './ProductosContext';
export const ProductosProvider = ({children}) => {


    const [productos, setproductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setproductos(data)
        console.log(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])
  return (
    
    <ProductosContext.Provider value={{productos}}>
        {children}
    </ProductosContext.Provider>
    
  )
}
