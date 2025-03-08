import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

import { Outlet } from "react-router-dom"
import { UserContext } from "./components/context"
import { useState } from "react"


function App() {
  const [searchItem,setSearchItem]= useState("")
  
  return (
    <UserContext.Provider value={{searchItem,setSearchItem}}>
    <Navbar/>
    <Outlet/>
    {/* <Product props={Datas[30]}/> */}
    <Footer/>
    </UserContext.Provider>
  )
}

export default App
