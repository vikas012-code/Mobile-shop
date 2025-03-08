import { useEffect } from "react";
import Similar from "./Similar"
import Datas from "./datas";
import { useParams } from "react-router-dom";

function Product(){
    let {id} = useParams()
    console.log(id)

    let value = Datas.filter((value)=> value.id==id)
    let Data=value[0]
    return(
        <>
        {
        Data &&
        <div className="bg-white p-5">
            <div className="flex h-96">

                <div className="flex items-center">

                    <img className="ml-10 h-80 " src={Data.image} alt="" />
                    <div className=" ml-10 w-[50vw] -mt-20 ">

                        <p className="mt-5 text-2xl font-bold">{Data.title}</p>
                        <p>star 4</p>
                        <p>{Data.onSale?"instock" : "out of stock "}</p>
                        <p className="mt-2">{Data.color && `Color : ${Data.color}`}</p>
                        <ul className=" mt-3  list-disc list-inside text-gray-700">
                            <li>{Data.brand && `Brand : ${Data.brand}`}</li>
                            <li>{Data.model && `Model : ${Data.model}`}</li>
                            <li>{Data.category && `category : ${Data.category}`}</li>
                        </ul>

                    </div>

                    <div className=" h-58 w-50 ml-10 shadow-md shadow-gray-400">

                        <div className=" m-4  justify-between items-center"> 
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold">$ {Data.price*60}</p>
                                <p>discout {Data.discount}%</p> 
                            </div>
                            {Data.discount &&    <p className=" text-sm text-gray-400  line-through">$ {(Data.price*60)+((Data.price*60)*Data.discount/100)}</p>
                        }
                        </div>

                        <div className="flex flex-col mt-10 px-4">
                            <button className=" border rounded-lg bg-blue-600 text-white h-10 my-2 hover:bg-white hover:text-blue-600 hover:scale-105 duration-300">Buy Now</button>
                            <button className=" border rounded-lg bg-white text-blue-600 h-10 my-2 hover:scale-105 duration-300">Add to cart</button>
                        </div>

                    </div>

                </div>
                

            </div>

            <div className="h-96 p-5">
                <p className="text-xl font-bold">Product Description -</p>
                <hr className="mt-5 text-gray-400" />
                <p className="mt-5 flex pl-5 text-lg ">{Data.description}</p>
                
            </div>
            <div>
                <p className="text-lg font-bold">Similar Products -</p>
                <hr className="mt-5 text-gray-400" />
                <Similar props={Data}/>
            </div>
            
        </div>
        }
        
        </>
    )
}

export default Product