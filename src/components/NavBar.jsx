import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
export const NavBar = () => {


    const {listaCompras} = useContext(CarritoContext);
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to ='/' className="navbar-brand" href="#"> Carrito</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink to = '/' className="nav-link" href="#"> compras </NavLink>
                </li>
                </ul>
            </div>
                <NavLink to = '/carrito'>
                    <Badge badgeContent={listaCompras.length } color="primary">
                        <ShoppingCart color="action" />
                    </Badge>
                </NavLink>
            </nav>
    </>
  )
}
