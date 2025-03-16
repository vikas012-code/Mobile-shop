import { useContext } from "react";
import CardOfShoopingCart from "./CardOfShoopingCart";
import { UserContext } from "./context";

function Cart(){
    const {cartItem}=useContext(UserContext);    
    return(
        <>
        <div className="bg-white min-h-[50vh]">
            <CardOfShoopingCart items={cartItem} />
        </div>
        </>
    )


}

export default Cart;