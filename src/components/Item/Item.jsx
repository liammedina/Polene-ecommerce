import "./Item.css";
import React from "react";
import {Link} from 'react-router-dom'

const Item = ({info}) => {
    
    return ( 
        <Link to="/detalle" href="" className="card" style={{width: "17rem"}}>
            <img className="card-img-top" src={info.img} alt="" />
            <div  className="card-body d-flex flex-column justify-content-center"></div>
                <h4  className="card-title">{info.title}</h4>
                <div>
                    <h4>${info.price}</h4>
                    <button className="btn btn-primary">Ver Detalle del Producto</button>
                </div>
        </Link>
     );
}
 
export default Item;