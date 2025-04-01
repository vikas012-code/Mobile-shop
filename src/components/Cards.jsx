import { Link } from "react-router-dom"
import heart from "../assets/heart.png"
import Pink_heart from "../assets/pink_heart.png"
import { useContext, useEffect } from "react";

import { UserContext } from "./context.js";

function Cards({data}){
    
    const {WishListItem,setWishListItem ,Auth,setAuth}=useContext(UserContext)
    
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
    function truncateString(str, maxLength) {
        if (str?.length > maxLength) {
            return str?.slice(0, maxLength) + '...';
        }
        return str;
    }
    return (
        <div className="w-64 h-82 m-4 rounded-lg shadow-lg bg-white " key={data?.id}>                    
        <Link className="" to={`/product/${data?.id}`}>
            <img className="h-64 w-64 object-contain hover:scale-105 duration-300 hover:-translate-y-2 "  src={data?.image} alt={data?.title} />
            <div className=" bg-gray-100 pl-2 ">
                <p className="min-h-12 hover:text-amber-700 text-gray-800  font-medium">{truncateString(data?.title,45)}</p>
                <div className="flex items-center">
                <p className="flex items-center w-16 font-bold"><img className="h-4" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/> {data?.price}</p>
                {data?.discount && <p className="ml-3 text-sm text-gray-400  line-through">${(data?.price)+((data?.price)*data?.discount/100)}</p>}
                {data?.discount && <p className="text-sm ml-2 text-green-400">({data?.discount}% off)</p> }                    
                </div>
            </div>
        </Link>
        <button className=" relative bottom-78 left-57 cursor-pointer hover:scale-115 duration-300"
            onClick={()=>{
                Auth?addingWishList(data): setAuth(null)
                
            }}
            ><img className="w-6 h-6" src={wishList(data)} />
        </button>
    </div>
    )
}

export default Cards