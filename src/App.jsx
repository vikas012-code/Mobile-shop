import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

import { Outlet } from "react-router-dom"
import { UserContext } from "./components/context"
import { useState } from "react"
import CheckOut from "./components/CheckOut"


function App() {
  const [searchItem,setSearchItem]= useState("")
  const [cartItem ,setCartItem]=useState([])
  const [cartQuantity,setCartQuantity]=useState(0)
  
  
  return (
    <UserContext.Provider value={{searchItem,setSearchItem,cartItem ,setCartItem,cartQuantity,setCartQuantity}}>
    <Navbar/>
    <Outlet/>
    {/* <Product props={Datas[30]}/> */}
    <Footer/>
    </UserContext.Provider>
  )
}

export default App
