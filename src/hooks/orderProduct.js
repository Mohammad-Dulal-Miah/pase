import { useEffect, useState } from "react";
import GetProducts from "./getProducts"
import { findObj } from "./utilities";

const OrderProduct = ()=>{

   const [orders , setOrders] = useState([]);

    const products = GetProducts();
    const data = findObj();
    const temp = [];

    for(const id in data){

        const select = products.find(product => product.id === id);

        if(select){
            select.quantity = data[id];
            temp.push(select);
        }

       
    }

    
  


   

   return temp;
}

export default OrderProduct;