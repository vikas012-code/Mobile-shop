import { useEffect } from "react";
import { useState } from "react";
import datas from "./datas.js"
import { Link } from "react-router-dom";

function Category({props}){
    const [search,setSearch]=useState("")

    props?" ":props=" ";
    useEffect(()=>{
        setSearch(props.category)
    },[props])

    const [Datas, setDatas]=useState([])

    useEffect(()=>{
        setDatas(datas)
    },[])



    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    }
    
   


    let filterData = Datas?.filter((data)=> (data.category).toLowerCase().includes(search.toLocaleLowerCase()))
    return (<>

        <main>
            <div className="flex overflow-x-scroll">

            {filterData?.map((data) => 
                <Link className=" min-w-64 m-4 rounded-lg shadow-lg overflow-hidden  bg-white" key={data.id} to={`/product/${data.id}`}>
                <img className="h-64 w-64 object-contain hover:scale-105 duration-300 hover:-translate-y-2 "  src={data.image} alt={data.title} />
                <div className=" bg-gray-100 pl-2 ">
                    <p className="min-h-12 font-bold hover:text-amber-700">{truncateString(data.title,45)}</p>
                    <p className="flex items-center w-16"><img className="h-4" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/> {data?.price*60}</p>
                </div>
            </Link>
            
            )}
            </div>
        </main>
        </>)
}

export default Category;