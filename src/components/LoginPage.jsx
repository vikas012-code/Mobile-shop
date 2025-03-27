import CryptoJS from "crypto-js"
import { useContext, useState } from "react";
import { UserContext } from "./context";
import cancel_img from "../assets/cancel.png"
function LoginPage(){

    let _key = "secret_key"

    
    

    const [passCorrect,setPassCorrect]=useState(null)
    
    const [userExit,setUserExit]=useState(null)

    const [formType,setFormType]=useState("login")

    const{Auth,setAuth,user,setUser}=useContext(UserContext)

    function encrypt(txt) {
        return CryptoJS.AES.encrypt(txt, _key).toString();
    }

    function decrypt(txtToDecrypt) {
        return CryptoJS.AES.decrypt(txtToDecrypt, _key).toString(CryptoJS.enc.Utf8);
    }
    
    function SaveData(ValueName,Value){
       localStorage.setItem(ValueName, Value);
    }

    function RetreiveData(){
        let data = localStorage.getItem(user.UserName) || "";
        return data || null;
    }

    function SetDataAtDB(){
        setPassCorrect(null)
        user.UserName===JSON.parse(RetreiveData())?.name?
        setUserExit(true):
        user.UserName.length>4 && user.Password.length>4 ? 
        SaveData(user.UserName,JSON.stringify({name:user.UserName,password:encrypt(user.Password)}))||setUserExit(false):""
        
    }

    return(
    <>
    {Auth==null &&
        <div className="flex justify-center items-center bg-white ">
        <div className="bg-white h-[50vh] w-[40vh] flex flex-col items-center rounded-2xl  shadow-gray-300 mt-10 mb-10  z-10 fixed top-50">
            <button className="w-8 h-8 absolute top-1 right-0.5 cursor-pointer" onClick={()=>{
                setAuth("")
            }}><img className="w-7" src={cancel_img} alt="" /></button>
            <h3 className="text-4xl font-bold mt-10">{formType=="login"?"Login":"Register"}</h3>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setUser({UserName:"",Password:""})
            }} className="flex flex-col">
                <label className=" ml-2" htmlFor="Name">Name</label>
                <input type="text" className="border rounded-lg pl-1 p-1" name="Name" value={user.UserName}  onChange={(e)=>{
                    setUser({...user ,UserName:e.target.value})

                }} />
                <label className="mt-5 ml-2 " htmlFor="Password">Password</label>
                <input type="password" className=" border rounded-lg pl-1 p-1" name="Password" value={user.Password} onChange={(e)=>{
                    setUser({...user ,Password:e.target.value})

                }} />
                <p className="ml-2 text-sm text-gray-300 w-60">Username and Password must be more the 4 characters </p>

                <div className="flex justify-around">
                {
                    formType=="login" 
                    && 
                    <div className="flex flex-col items-center gap-2">
                        <button className=" mt-4 rounded-sm bg-blue-400 text-white  hover:bg-green-400 duration-300 w-23" onClick={(e)=>{   
                        user.UserName.length>4 && user.Password.length>4 ? user.UserName===JSON.parse(RetreiveData())?.name  && user.Password===decrypt(JSON.parse(RetreiveData())?.password) ? setPassCorrect(true) || setAuth(user.UserName) 
                        ||setUser({UserName:""})||setUser({Password:""})
                        :setPassCorrect(false):"";
                    }}>Login</button>
                    <p className="">Don't have Account?<a className="cursor-pointer text-green-600 hover:underline" onClick={()=>{
                        setFormType("sign up")
                    }}>Sign up</a></p>
                    </div>
                }
                {
                    formType=="sign up" 
                    &&
                    <div className="flex flex-col items-center gap-2">
                        <button className=" mt-4 rounded-sm bg-blue-400 text-white hover:bg-green-400 duration-300 w-23" onClick={()=>{
                        SetDataAtDB()
                        }}>Register</button>
                        <p className="">Already have Account?<a className=" cursor-pointer text-green-600 hover:underline" onClick={()=>{
                        setFormType("login")
                    }}>Login</a></p>
                    </div>
                }
                </div>
            </form>
           
            {passCorrect===false && <h3 className="mt-4 text-red-500">Password incorrect</h3>}
            {userExit===true && <h3 className="mt-4 text-red-500">User Already Exit</h3>}
            {userExit===false && <h3 className="mt-4 text-green-500">Succesfully Registered</h3>}
        </div>
        
    </div>
    }
    </>)
}

export default LoginPage