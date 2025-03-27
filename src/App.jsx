import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

import { Outlet } from "react-router-dom"
import { UserContext } from "./components/context"
import { useState } from "react"
import LoginPage from "./components/LoginPage"



function App() {
  const [searchItem,setSearchItem]= useState("")

  const [cartItem ,setCartItem]=useState([])

  const [cartQuantity,setCartQuantity]=useState(0)

  const [total,setTotal]=useState(0)

  const [ShippingAddress,setShippingAddress]=useState({
    fullName:"vikas",
    StreetAddress:"524 new jawahar nagar",
    Floor:"",
    State:"punjab",
    City:"jalandhar",
    Pincode:1144,
    Email:"vikas@gmail.com",
    PhoneNumber:778899,
})
const [ProgressBar,setProgressBar]=useState(1)

const [Auth,setAuth]=useState(null)

const[Ordered,setOrdered]=useState([])

const [WishListItem,setWishListItem]=useState([])

const [user,setUser]=useState({
  UserName:"",
  Password:""
})

  return (
    <UserContext.Provider value={{searchItem,setSearchItem,cartItem ,setCartItem,cartQuantity,setCartQuantity,total,setTotal,ShippingAddress,setShippingAddress,ProgressBar,setProgressBar,Auth,setAuth,Ordered,setOrdered,WishListItem,setWishListItem,user,setUser}}>
    <div className={`${Auth===null?" pointer-events-none opacity-60":""}`}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    <LoginPage/>
    </UserContext.Provider>
  )
}

export default App
