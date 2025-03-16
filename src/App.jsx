import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

import { Outlet } from "react-router-dom"
import { UserContext } from "./components/context"
import { useState } from "react"



function App() {
  const [searchItem,setSearchItem]= useState("")

  const [cartItem ,setCartItem]=useState([])

  const [cartQuantity,setCartQuantity]=useState(0)

  const [total,setTotal]=useState(0)

  const [ShippingAddress,setShippingAddress]=useState({
    fullName:"vikas",
    StreetAddress:"555 new jawahar jalandhar",
    Floor:"",
    State:"punjab",
    City:"jalandhar",
    Pincode:111,
    Email:"vikas@gmail.com",
    PhoneNumber:999,
})
let [ProgressBar,setProgressBar]=useState(1)


  return (
    <UserContext.Provider value={{searchItem,setSearchItem,cartItem ,setCartItem,cartQuantity,setCartQuantity,total,setTotal,ShippingAddress,setShippingAddress,ProgressBar,setProgressBar}}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
  )
}

export default App
