import React from "react";
import Item from "../Item/Item";

const ItemList = ({data = []}) => {
    return ( 
        data.map(DataBase => <Item key={DataBase.id} info={DataBase}/>)
     );
}
 
export default ItemList;