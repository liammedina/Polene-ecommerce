import React from "react";
import logo from "../../Images/logosmall.png"
import "./NavBar.css" 
import Cartwidget from "../CartWidget"
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return ( 
        <nav className="App-nav"iv>
             <Link to={'/'}><img src={logo} alt="" /></Link>
            <ul className="App-items">
            <Link to={'/store'}><li className="link">COLECCIÓN</li></Link>
            <Link to={'/detalle'}><li className="link">STORE</li></Link>
            <Link to={'/Boutique'}><li className="link">BOUTIQUE</li></Link>
            <Link to={'/Contacto'}><li className="link">CONTACTO</li></Link>
            <Link to={'/Cart'}><Cartwidget/></Link>
            </ul>
        </nav>
     );
}
 
export default NavBar;