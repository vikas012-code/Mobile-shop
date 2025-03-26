import { useContext, useState } from "react";
import { UserContext } from "./context";
import Datas from "./datas";
import { Link } from "react-router-dom";
import ShippingDetails from "./ShippingDetails";

function MyAccount(){
    const data=[]
    data.push(Datas[0])
    data.push(Datas[1])
    data.push(Datas[2])
    data.push(Datas[3])
    
    const{ShippingAddress,setShippingAddress,Auth,setAuth}=useContext(UserContext)
    const {Ordered,WishListItem,setWishListItem}=useContext(UserContext);    

    const [section,setSection]=useState("myaccount")
    
    console.log(Ordered)

    return(
    <div className=" min-h-[50vh] bg-white -mb-2 flex justify-center">

        <div className=" w-50 text-center p-5 leading-15 text-xl font-bold">
            <button className={`${section=="myaccount" && "text-blue-600"} `} onClick={()=>{
                setSection("myaccount")
            }}>My Account</button>
            <button className={`${section=="mywishlist" && "text-blue-600"}`}  onClick={()=>{
                setSection("mywishlist")
            }} >My WishList</button>
            <button className={`${section=="myorder" && "text-blue-600"}`}  onClick={()=>{
                setSection("myorder")
            }}>My Orders</button>
        </div>

        <div className=" w-[40vw] shadow mt-5">

            <div className={`p-8 pt-5 ${section!=="myaccount" && "hidden"}`}>
                <h3 className="text-lg font-bold">My Profile</h3>
                {
                Auth?
                <form className="mt-2 ml-4 flex flex-col pt-2">
                    <label htmlFor="">Full Name</label>
                    <input className="=rounded-sm p-1 bg-gray-100" type="text" value={ShippingAddress.fullName} onChange={(e)=>{
                    setShippingAddress({...ShippingAddress, fullName:e.target.value})
                    }}  />

                    <br />
                    <label htmlFor="">Email</label>
                    <input className=" rounded-sm p-1 bg-gray-100" type="email" value={ShippingAddress.Email} onChange={(e)=>{
                    setShippingAddress({...ShippingAddress, Email:e.target.value})
                    }}   />

                    <br />
                    <label htmlFor="">Address</label>
                    <input className="rounded-sm p-1 bg-gray-100" type="text" value={ShippingAddress.StreetAddress} onChange={(e)=>{
                    setShippingAddress({...ShippingAddress, StreetAddress:e.target.value})
                    }}  />

                    <div className="flex justify-around">
                    <button className="bg-gray-200 mt-4 rounded-sm w-16 hover:scale-105 duration-300">Cancel</button>
                    <button className="bg-blue-600 mt-4 text-white rounded-sm w-16 hover:scale-105 duration-300">Save</button>
                    </div>
                </form>
                :
                <div className="text-center">
                    <p className="text-xl mt-4">Not Logged In</p>
                    <button className="mt-2 font-bold bg-cyan-500 w-15 rounded-md text-white" onClick={()=>{
                        setAuth(null)
                    }}>Login</button>

                </div>
                }

            </div>


            <div className={`p-8 pt-5  ${section!=="mywishlist" && "hidden"}`}>
                <h3 className="text-lg font-bold">Products</h3>
               <div className="flex flex-wrap p-2 gap-2 -ml-3 ">
               {
                WishListItem?WishListItem.map((item)=>
                    <Link key={item.id} className="shadow w-25 h-35 mx-1" to={`/product/${item.id}`}>
                        <img className=" h-25" src={item.image} alt="" />
                        <p className="text-xs truncate">{item.title}</p>
                        <p className="text-sm font-bold">₹ {item.price}</p>
                    </Link>
                )
                :
                <Link className=" flex flex-col items-center w-[100%] text-center " to={"/"} >
                    <p className="text-xl mt-10">There is no item your wishlist</p>
                    <button className=" mt-2 bg-blue-500 text-white w-40 rounded-lg hover:scale-105 duration-300">Continue Shopping</button>
                </Link>
                }
               </div>
            </div>

            <div className={`pl-8 pt-5  ${section!=="myorder" && "hidden"} overflow-y-auto`}>
                <h1 className="text-xl font-bold">Ordered List</h1>
                { 
                Ordered.length > 0 ?

                <div>
                <div className="flex justify-between px-3">
                    <p>Product</p>
                    <p>Quantity</p>
                </div>
                {Ordered.map((item)=>(
                    <div>
                        
                        <hr />
                        <div className="flex items-center justify-between mt-2 shadow mr-2 pr-2">
                            <img className="w-20 h-20" src={item.Data.image} alt={item.Data.title} />
                            <p className=" text-gray-500 w-40 h-10 text-wrap truncate  text-sm">{item.Data.title}</p>
                            <p>{item.quantity}</p>
                        </div>
                    </div>
                ))}
                </div>
                :
                <Link className=" flex flex-col items-center w-[100%] text-center " to={"/"} >
                    <p className="text-xl mt-10">your order list is empty</p>
                    <button className=" mt-2 bg-blue-500 text-white w-40 rounded-lg hover:scale-105 duration-300">Continue Shopping</button>
                </Link>
                }
            </div>

        </div>

    </div>
    )
}

export default MyAccount;