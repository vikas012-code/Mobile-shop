import { useContext, useEffect } from "react";
import { useState } from "react";
// import datas from "./datas.js"
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./context.js";
import Cards from "./Cards.jsx";


function Body(){

    let {category} = useParams()

    const {searchItem,datas}=useContext(UserContext);

    
    const [Datas, setDatas]=useState([ ])

    useEffect(()=>{
        setDatas(datas)
    },[])
    

    let filterData = Datas?.filter((data)=> category? data.category.includes(category) : (data.title).toLowerCase().includes(searchItem.toLowerCase()))
    return (<>

        <main className="flex flex-wrap justify-center bg-white">
            {filterData?.map((data) => 
            <Cards key={data._id} data={data}/>
            )}
        </main>
        </>)
}

export default Body;