import React, {useState, useEffect} from "react";
import Title from "../title"
import ItemCount from "../ItemCount";
import Database from "../DataBase/DataBase";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Database);
            }, 2000);
        });

        if (detalleId) {
        getData.then(res =>setData(res.filter(Database => Database.category === detalleId)))
        } else {
        getData.then(res => setData(res));
        }
    }, [detalleId])


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