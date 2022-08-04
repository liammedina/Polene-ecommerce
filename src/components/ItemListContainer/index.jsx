import React from "react";
import Title from "../title"
import ItemCount from "../ItemCount";

export const ItemListContainer = ({texto}) => {

   const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`)
   }


    return ( 
        <>
            <Title greeting= {texto}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
        );
}
 
export default ItemListContainer;