import { useContext, useState } from "react";
import Similar from "./Similar"
import Datas from "./datas";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./context";
import heart from "../assets/heart.png";
import star from "../assets/white-star.png";

import Pink_heart from "../assets/pink_heart.png";

function Product(){
    const navigate=useNavigate()     
    const {cartItem ,setCartItem,cartQuantity,setCartQuantity,Auth,setAuth,WishListItem,setWishListItem}=useContext(UserContext)

    const [quantity,setQuantity]=useState(0)

    let {id} = useParams()

    let Data = Datas.filter((value)=> value.id==id)[0]

    


    function wishList(data){
        for(let i=0 ;i<WishListItem.length;i++){ 
            if(WishListItem[i]?.id===data.id)
                return Pink_heart
        }
        return heart
    }

    function addingWishList(data){
        for(let i=0 ;i<WishListItem.length;i++){ 
            if(WishListItem[i]?.id===data.id)
                {
                    setWishListItem(WishListItem.filter(item=> item.id!==data.id))
                return
                } 
        }
        setWishListItem([...WishListItem,data])
    }


    function addData(){
        if(cartItem.length > 0){
            for(let i=0;i<cartItem.length;i++){
                if(cartItem[i].Data.id===Data.id){
                    cartItem[i].quantity+=quantity
                    return
                }
            }
            setCartItem([...cartItem, {Data,quantity}])
        } 
        else{
            setCartItem([...cartItem, {Data,quantity}]) 

        }
    }
    return(
        <>
        {
        Data &&
        <div className="bg-white p-5">
            <div className="flex h-96">

                <div className="flex items-center">

                    <img className="ml-10 h-80 " src={Data.image} alt="" />

                    <button className=" w-10 h-10 relative right-5 bottom-40 cursor-pointer hover:scale-115 duration-300"
                        onClick={()=>{
                            Auth?
                            addingWishList(Data)
                            :setAuth(null)
                        }}
                        >
                       <img className="w-10 h-9" src={wishList(Data)} />
                    </button>

                    <div className=" ml-10 w-[50vw] -mt-20 ">

                        <p className="mt-5 text-2xl font-bold">{Data.title}</p>
                        <p className="flex items-center bg-green-500 w-10 rounded-md px-1 mt-2 text-white"><img className="w-4 h-4 mr-1" src={star} alt="" /> 4</p>
                        {/* <p>{Data.onSale?"stock" : "out of stock "}</p> */}
                        <p className="mt-2">{Data.color && `Color : ${Data.color}`}</p>
                        <ul className=" mt-3  list-disc list-inside text-gray-700">
                            <li>{Data.brand && `Brand : ${Data.brand}`}</li>
                            <li>{Data.model && `Model : ${Data.model}`}</li>
                            <li>{Data.category && `category : ${Data.category}`}</li>
                        </ul>

                    </div>
                    
                    
                    <div className=" h-58 w-50 ml-10 shadow-md shadow-gray-400">

                        <div className=" m-4  justify-between items-center"> 
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold">$ {Data.price}</p>
                                <p className="text-green-400">({Data.discount}%off)</p> 
                            </div>
                            {Data.discount && <p className=" text-sm text-gray-400  line-through">$ {(Data.price)+((Data.price)*Data.discount/100)}</p>}
                        </div>

                        <div className="flex justify-center items-center">
                            <div className=" border border-gray-300  flex gap-4 justify-center items-center">
                            <button className=" w-8 h-8  active:bg-gray-200" onClick={()=>{
                                quantity > 0 && setQuantity(quantity-1)
                            }}>
                                -
                            </button>
                            <p className="">
                                {quantity}
                            </p>
                            <button className=" w-8 h-8 active:bg-gray-200 " onClick={()=>{
                                setQuantity(quantity+1)
                            }}>
                                +
                            </button>
                            </div>
                        </div>

                        <div className="flex flex-col mt-2 px-4">
                            <button className=" border rounded-lg bg-blue-600 text-white h-10 my-2 hover:bg-white hover:text-blue-600 hover:scale-105 duration-300"  onClick={()=>
                            {
                            Auth?
                            quantity > 0 ? setCartQuantity(cartQuantity+quantity) || addData()
                             ||
                             setQuantity(0)
                             ||
                             navigate("/checkout")
                             :""                        
                             
                             :setAuth(null)

                            }}>Buy Now</button>
                            <button className=" border rounded-lg bg-white text-blue-600 h-10 my-2 hover:scale-105 duration-300" onClick={()=>
                            {
                            Auth?
                            quantity > 0 && setCartQuantity(cartQuantity+quantity) || addData()
                            ||
                            setQuantity(0)
                            :setAuth(null);
                            }}
                            >Add to cart</button>
                        </div>

                    </div>

                </div>
                

            </div>

            <div className="h-96 p-5">
                <p className="text-xl font-bold">Product Description -</p>
                <hr className="mt-5 text-gray-400" />
                <p className="mt-5 flex pl-5 text-lg ">{Data.description}</p>
                
            </div>
            <div>
                <p className="text-lg font-bold">Similar Products -</p>
                <hr className="mt-5 text-gray-400" />
                
                <Similar props={Data}/>
            </div>
            
        </div>
        }
        
        </>
    )
}

export default Product