import { useContext, useEffect } from "react";
import { UserContext } from "./context";
import { Link } from "react-router-dom";

function Cart(){
    const {cartItem,cartQuantity,setCartQuantity,total,setTotal}=useContext(UserContext);


    let totalItem=0;


    const items=cartItem;


    items?.map((item)=>{
        totalItem=totalItem+item.quantity*item?.Data.price;
    })


    useEffect(()=>{
        setTotal(totalItem)
    },[totalItem])


    return(
        <>
        <div className="bg-white min-h-[50vh]">
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
            <div className="" key={item?.Data._id}>
            <ul className="flex justify-between items-center pb-3 p-2 ">
                <li><img className="min-w-20 h-20" src={item?.Data.image} alt="" /></li>
                <li className="pt-2 w-220 overflow-clip text-nowrap mr-120">{item?.Data.title}</li>
                <li className="absolute right-[24vw] pt-2 flex items-center"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{item?.Data.price}</li>

                <li className="absolute right-[15vw] pt-2 flex items-center">
                    <div className=" border border-gray-300  flex gap-4 justify-center items-center">
                    <button className=" w-8 h-8  active:bg-gray-200" onClick={()=>{ item.quantity-=1 ; setCartQuantity(item.quantity) }}>-</button> 
                    {item.quantity} 
                    <button className=" w-8 h-8  active:bg-gray-200" onClick={()=>{item.quantity+=1;setCartQuantity(item.quantity) }}>+</button>
                    </div>
                </li>
                <li className="absolute right-[4vw] pt-2 flex items-center"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{item?.quantity*item?.Data.price}</li>
            </ul>
            <hr className="border-b-1 mb-2 border-gray-400"/>
            </div>:"")
            )
            }

            {
                total>0 &&
                <div>
                <div className="flex justify-between ml-2">
                <p className="text-xl font-bold ml-2">Grand Total</p>
                <p className="mr-[4vw] flex"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{total?total:""}</p>
                </div>
                <div className="flex justify-end mt-5 ">
                {cartQuantity>0 && <Link to="/checkout" className="mr-2 bg-blue-600 text-white p-2  rounded-md hover:text-blue-600 hover:bg-white hover:scale-105 hover:border duration-300">Processed To Checkout</Link> }
                </div>
                </div>
            }
        </div>
        </>
    )


}

export default Cart;