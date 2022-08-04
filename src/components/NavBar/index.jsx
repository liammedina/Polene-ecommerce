import React from "react";
import logo from "../../Images/logosmall.png"
import "./NavBar.css" 
import Cartwidget from "../CartWidget"

export const NavBar = () => {
    return ( 
        <nav className="App-nav"iv>
            <img src={logo} alt="" />
            <ul className="App-items">
                <li className="link">COLECCIÓN</li>
                <li className="link">STORE</li>
                <li className="link">BOUTIQUE</li>
                <li className="link">CONTACTO</li>
                <Cartwidget/>
            </ul>
        
        </nav>
     );
}
 
export default NavBar;