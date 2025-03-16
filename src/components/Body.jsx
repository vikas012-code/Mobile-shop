import { useContext, useEffect } from "react";
import { useState } from "react";
import datas from "./datas.js"
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./context.js";


function Body(){

    let {category} = useParams()

    const {searchItem}=useContext(UserContext);

    
    const [Datas, setDatas]=useState([ ])

    useEffect(()=>{
        setDatas(datas)
    },[])

    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    }
    

    let filterData = Datas?.filter((data)=> category? data.category.includes(category) : (data.title).toLowerCase().includes(searchItem.toLowerCase()))
    return (<>

        <main className="flex flex-wrap justify-center bg-white">
            {filterData?.map((data) => 
            <Link className=" w-64 m-4 rounded-lg shadow-lg overflow-hidden  bg-white" key={data.id} to={`/product/${data.id}`}>
                <img className="h-64 w-64 object-contain hover:scale-105 duration-300 hover:-translate-y-2 "  src={data.image} alt={data.title} />
                <div className="bg-gray-100">
                <p className="min-h-12 hover:text-amber-700 text-gray-800  font-medium ml-1">{truncateString(data.title,45)}</p>
                    <div className="flex items-center ">
                    <p className="flex items-center w-16 font-bold"><img className="h-4" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/> {data?.price}</p>
                    {data.discount && <p className="ml-3 text-sm text-gray-400  line-through">${(data.price)+((data.price)*data.discount/100)}</p>}
                    {data.discount && <p className="text-sm ml-2  text-green-400">({data.discount}% off)</p> }                    
                    </div>
                </div>
            </Link>
            )}
        </main>
        </>)
}

export default Body;