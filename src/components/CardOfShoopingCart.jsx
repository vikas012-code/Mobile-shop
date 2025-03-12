import Datas from "./datas";
import "../index.css"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context";

export default function CardOfShoopingCart({items}){
    // items.push({Data:Datas[0],quantity:2})
     const {cartQuantity,setCartQuantity}=useContext(UserContext);

    // const []=useState(0)
    // console.log(cartQuantity)


    // let total=0
    const [total,setTotal]=useState(0)
    
    let totalItem=0;

    items?.map((item)=>{
        totalItem=totalItem+item.quantity*item?.Data.price;
    })

    useEffect(()=>{
        setTotal(totalItem)
    },[totalItem])

    return(
        <>
        <h3 className="text-center mb-8 text-2xl font-bold">Check Out</h3>
                <div className=" flex justify-evenly text-xl font-bold">
                    <p className="relative right-[45vw]">
                        Title
                    </p>
                    <p className="absolute right-[24vw]">
                        Price
                    </p>
                    <p className="absolute right-[16vw]">
                        Quantity
                    </p>
                    <p className="absolute right-[4vw]">
                        Total
                    </p>
                </div>
                <hr className="border-b-2 border-black" />
        {items.map((item)=>( item.quantity >0? 
        <div className="" key={item?.Data.id}>
        <ul className="flex justify-between p-2 ">
            <li><img className="min-w-20 h-20" src={item?.Data.image} alt="" /></li>
            <li className="pt-2 w-220 overflow-clip text-nowrap mr-120">{item?.Data.title}</li>
            <li className="absolute right-[24vw] pt-2 flex items-center"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{item?.Data.price}</li>

            <li className="absolute right-[18vw] pt-2 flex items-center">
                <button className="border border-gray-400 w-5 h-5 rounded-full flex justify-center items-center mr-1" onClick={()=>{ item.quantity-=1 ; setCartQuantity(item.quantity) }}>-</button> 
                {item.quantity} 
                <button className="border border-gray-400 w-5 h-5 rounded-full flex justify-center items-center ml-1" onClick={()=>{item.quantity+=1;setCartQuantity(item.quantity) }}>+</button>
            </li>
            <li className="absolute right-[4vw] pt-2 flex items-center"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{item?.quantity*item?.Data.price}</li>
        </ul>
        <hr className="border-b-1 border-gray-400"/>
        </div>:"")
        )
        }
        <div className="flex justify-between ml-2">
            <p className="text-xl font-bold ml-2">Grand Total</p>
            <p className="mr-[4vw] flex"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{total?total:""}</p>
        </div>
        </>
    )
}