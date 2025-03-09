import { useContext } from "react";
import CardOfShoopingCart from "./CardOfShoopingCart";
import { UserContext } from "./context";

function Cart(){
    const {cartItem ,setCartItem}=useContext(UserContext);    
    return(
        <>
        <div className="bg-white">
            <section className="min-h-[50vh]">
            <CardOfShoopingCart items={cartItem} />
            </section>
        </div>
        </>
    )


}

export default Cart;