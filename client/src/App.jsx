import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

import { Outlet } from "react-router-dom"
import { UserContext } from "./components/context"
import { useEffect, useState } from "react"
import LoginPage from "./components/LoginPage"
import AdminPanel from "./components/AdminPanel"



function App() {

  const [datas ,setDatas]=useState([])

  
  
  
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

const [section,setSection]=useState("myaccount")

const [WishListItem,setWishListItem]=useState([])

const [user,setUser]=useState({
  UserName:"",
  Email:"",
  Password:"",
  _id:""
})

//admin@gmail.com
//admin

useEffect(()=>{
  fetch("http://localhost:8000/products")
  .then((res)=> res.json())
  .then((res)=>setDatas(res))
  .catch((err)=>{console.log(err)})
},[Ordered])


useEffect(() =>{
  //console.log("wishlist calling..")
  try {
    fetch("http://localhost:8000/wishlists/byId",
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
          _id: user._id 
      }),
    })
    .then((respone) => respone.json())
    .then((res)=> {
        //console.log(res) 
      return setWishListItem(res)})
    .catch((err)=>{console.log(err)})
  } catch (error) {
    console.log(error)
  }
  
},
[user,WishListItem.length])

useEffect(() =>{
  //console.log("order calling..")
  try {
    fetch("http://localhost:8000/orders/byId",
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
          _id: user._id 
      }),
    })
    .then((respone) => respone.json())
    .then((res)=> {
      //console.log(res) 
      return setOrdered(res)})
    .catch((err)=>{console.log(err)})
    //console.log(WishListItem.length)
  } catch (error) {
    console.log(error)
  }
},
[user,Ordered.length])


const value={datas,searchItem,setSearchItem,cartItem ,setCartItem,cartQuantity,setCartQuantity,total,setTotal,ShippingAddress,setShippingAddress,ProgressBar,setProgressBar,
  Auth,setAuth,Ordered,setOrdered,WishListItem,setWishListItem,user,setUser,section,setSection}

  

  if(user.Email==="admin@gmail.com" && user.Password==="admin"){
    return (
        <UserContext.Provider value={value}>
        <div className={`${Auth===null?" pointer-events-none opacity-60":""}`}>
        <AdminPanel/>
        </div>
        <LoginPage/>
        </UserContext.Provider>
      )
  }
  else{
    return (
        <UserContext.Provider value={value}>
        <div className={`${Auth===null?" pointer-events-none opacity-60":""}`}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
        <LoginPage/>
        </UserContext.Provider>
      )

  }

  // return (
  //   <UserContext.Provider value={value}>
  //   <div className={`${Auth===null?" pointer-events-none opacity-60":""}`}>
  //     <Navbar/>
  //     <Outlet/>
  //     <Footer/>
  //   </div>
  //   <LoginPage/>
  //   </UserContext.Provider>
  // )
}

export default App
