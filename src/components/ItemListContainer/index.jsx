import React, {useState, useEffect} from "react";
import Title from "../title"
import ItemCount from "../ItemCount";
import Database from "../DataBase/DataBase";
import ItemList from "../ItemList/ItemList";


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Database);
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])


   const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`)
   }

    return ( 
        <>
            
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data}/>
        </>
        );
}
 
export default ItemListContainer;