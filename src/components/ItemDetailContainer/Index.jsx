import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const ItemPrueba = 
    {
        id: 2,
        title: "TONCA",
        price: 3650,
        category: "bandolera",
        description:"El bolso Tonca introduce detalles únicos a la creación elegante y precisa que es tan característica de sus diseños.", 
        stock: 13,
        img: "https://cdn.shopify.com/s/files/1/0029/7048/4771/t/20/assets/tonca-duo-glacier.pagecollection.slider.png?v=71869590185208102111656596891"
    }

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout(() => {
                resolve(ItemPrueba);
            }, 3000)
        });
        getData.then(res => setData(res));
    }, [])

    return ( 
        <ItemDetail data = {data}/>
     );
}
 
export default ItemDetailContainer;