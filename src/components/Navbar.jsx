import smartphone from "../assets/smartphone.png";
import account_icon from "../assets/account_icon.png";
import cart_icon from "../assets/cart_icon.png";
import search_icon from "../assets/search_icon.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context.js";




function Navbar() {
    const {searchItem,setSearchItem,cartQuantity}=useContext(UserContext);

    return (
      <>
      <nav className=" bg-white h-20 flex justify-evenly items-center drop-shadow-lg">
        <div className=" flex justify-center items-center">
            <a className=" flex justify-center items-center gap-2" href="/"> 
                <img className="w-16 h-16" src={smartphone} alt="mobileshop"/> 
                <h3 className="text-3xl font-extrabold text-blue-600">mobileshop</h3>
            </a>
            
        </div>
        <ul className="flex gap-10">
            <button className="peer duration-300 h-20 border-b-2 border-transparent a hover:border-b-2 hover:border-b-blue-300 flex items-center focus:outline-none" >Category </button>
            <ul className=" invisible bg-white absolute top-20 p-1 rounded-b-lg peer-focus:visible active:visible ease-linear z-50">
                <Link className="border-b border-gray-300 block hover:scale-95 duration-200" to="/body/mobile" ><img className="w-20 inline" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSWYehtNHc5FsdWJBLqfn_8hBC0kSqEymNg&s" alt="" />Mobiles</Link>
                <Link className="border-b border-gray-300 block hover:scale-95 duration-200" to="/body/audio"><img className="w-20 inline " src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUW33_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712255584873" alt="" />Headphones</Link>
                <Link className="border-b border-gray-300 block hover:scale-95 duration-200" to="/body/tv"><img className="w-20 inline " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9cJPdKE_QpzvQvYUYdmT69WYq5VyGTNbxA&s" alt="" />TV</Link>
                <Link className="block hover:scale-95 duration-200 " to="/body/gaming"><img className="w-20 inline " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpkPv4DZbPXzKQrmtu8nxJSMeC1zGXAnIiA&s" alt="" />Gaming</Link>
            </ul>
            <li className="flex items-center hover:text-blue-500 hover:scale-110 duration-300" ><Link to="body">What's new</Link></li>
        </ul>

        <div className="flex justify-center items-center">
            <input className=" border h-10 rounded-3xl w-80 focus:border-cyan-600 focus:border-2 focus:outline-hidden p-3 focus:scale-110 duration-300 peer border-gray-400" type="text" placeholder="Search . . . ." value={searchItem} onChange={(e)=>{
                e.preventDefault()
                setSearchItem(e.target.value)
                
            }} />
            <img className=" h-6 relative right-10 peer-focus:invisible  duration-100 ease-in-out" src={search_icon} alt="search" />
        </div>

        <ul className="flex gap-10 justify-center items-center">
            <li><a className="flex justify-center items-center gap-3 hover:text-blue-500 hover:scale-110 duration-300" href="#"><img className="w-6 h-6" src={account_icon} alt="accont" /> <p>Account</p></a></li>
            <li><Link className="flex justify-center items-center gap-3 hover:text-blue-500 hover:scale-110 duration-300" to="/Cart"><img className="w-6 h-6" src={cart_icon} alt="cart" /> <p>Cart{cartQuantity>0 &&`(${cartQuantity})`}</p></Link></li>
        </ul>
      </nav>
      </> 
    )
  }
  
  export default Navbar