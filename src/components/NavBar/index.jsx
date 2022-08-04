import React from "react";
import logo from "../../Images/logosmall.png"

export const NavBar = () => {
    return ( 
        <div>
            <img src={logo} alt="" />
            <ul>
                <li><a href="">COLECCIÓN</a></li>
                <li><a href="">STORE</a></li>
                <li><a href="">BOUTIQUE</a></li>
                <li><a href="">CONTACTO</a></li>
            </ul>
        
        </div>
     );
}
 
export default NavBar;