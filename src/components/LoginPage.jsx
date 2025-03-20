import CryptoJS from "crypto-js"
import { use, useState } from "react";
function LoginPage(){

    let _key = "secret_key"

    const [user,setUser]=useState({
        UserName:"",
        Password:""
    })

    const [passCorrect,setPassCorrect]=useState(null)
    
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
        let data = localStorage.getItem("User1") || "";
        return data || null;
    }

    // SaveData("User",JSON.stringify({name:"vikas",password:encrypt("12345")}))

    // console.log(JSON.parse(RetreiveData()))

    // console.log(JSON.parse(RetreiveData()).name)

    // console.log(decrypt(JSON.parse(RetreiveData()).password))


    // encrypt_data=encrypt("hello")
    // console.log(encrypt_data)
    // console.log(decrypt(encrypt_data))

    // encrypt_data=encrypt(JSON.stringify({name:"vikas",password:"1234"}))
    // console.log(encrypt_data)
    // console.log(JSON.parse(decrypt(encrypt_data)))
    console.log(user)
    return(
    <>
    <div className="flex justify-center items-center ">
        <div className="bg-white h-[50vh] w-[20vw] flex flex-col items-center rounded-2xl  z-10 fixed top-[20vh] ">
            <h3 className="text-4xl font-bold mt-10">Login</h3>
            <form onSubmit={(e)=>{
                // e.preventDefault()
            }} className="flex flex-col">
                <label className="mt-10 ml-2" htmlFor="Name">Name</label>
                <input type="text" className="border rounded-lg pl-1" name="Name" value={user.UserName} onChange={(e)=>{
                    setUser({...user ,UserName:e.target.value})

                }} />
                <label className="mt-5 ml-2 " htmlFor="Password">Password</label>
                <input type="password" className=" border rounded-lg pl-1" name="Password" value={user.Password} onChange={(e)=>{
                    setUser({...user ,Password:e.target.value})

                }} />
                <div className="flex justify-around">
                <button className=" mt-4 rounded-lg bg-blue-400 text-white hover:bg-green-400 duration-300 w-18" onClick={()=>{
                    user.UserName.length>4 && user.Password.length>4 ? user.UserName===JSON.parse(RetreiveData()).name  && user.Password===decrypt(JSON.parse(RetreiveData()).password) ?setPassCorrect(true):setPassCorrect(false):""
                }}>Login</button>
                <button className=" mt-4 rounded-lg bg-blue-400 text-white hover:bg-green-400 duration-300 w-18" onClick={()=>{
                    user.UserName.length>4 && user.Password.length>4 ? SaveData("User1",JSON.stringify({name:user.UserName,password:encrypt(user.Password)})):""
                }}>Register</button>
                </div>
            </form>
            {passCorrect===true && <h3 className="mt-10 text-green-500">Password correct</h3>}
            {passCorrect===false && <h3 className="text-red-500">Password incorrect</h3>}
        </div>
        
    </div>
    </>)
}

export default LoginPage