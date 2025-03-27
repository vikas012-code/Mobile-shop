import { useEffect } from "react";
import { useState } from "react";
import datas from "./datas.js"
import { Link } from "react-router-dom";
import Cards from "./Cards.jsx";

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

    let filterData = Datas?.filter((data)=> (data.category).toLowerCase().includes(search.toLocaleLowerCase()))
    return (<>

        <main>
            <div className="flex overflow-x-scroll overflow-y-hidden">

            {filterData?.map((data) => 
                <div key={data.id}>
                    <Cards data={data}/>
                </div>
            )}
            </div>
        </main>
        </>)
}

export default Category;