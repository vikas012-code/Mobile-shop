import { useContext } from "react"
import { UserContext } from "./context"

function OrderedPlaced(){
        let {ShippingAddress,setShippingAddress,ProgressBar,setProgressBar}=useContext(UserContext)
    
    setProgressBar(ProgressBar=4)
    return<>
    <div className="flex justify-center p-10">
        <img src="https://cdn.dribbble.com/userupload/34800497/file/original-b6e227fd6ebeb78357165fde4f29d0ae.gif" alt="" />

    </div>
    </>
}

export default OrderedPlaced