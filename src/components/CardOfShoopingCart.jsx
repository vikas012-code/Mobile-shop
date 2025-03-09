import Datas from "./datas";
import "../index.css"

export default function CardOfShoopingCart({items}){
    // items.push({Data:Datas[0],quantity:2})
    
    let total=0

    items?.map((item)=>{
        total=total+item.quantity*item?.Data.price;
    })

    return(
        <>
        <h3 className="text-center mb-8 text-2xl font-bold">Check Out</h3>
                <div className=" flex justify-evenly text-xl font-bold">
                    <p className="relative right-[45vw]">
                        Title
                    </p>
                    <p className="absolute right-[24vw]">
                        Price
                    </p>
                    <p className="absolute right-[16vw]">
                        Quantity
                    </p>
                    <p className="absolute right-[4vw]">
                        Total
                    </p>
                </div>
                <hr className="border-b-2 border-black" />
        {
        items?.map((item)=>(
        <div className="" key={item?.Data.id}>
        <ul className="flex justify-between p-2 ">
            <li><img className="min-w-20 h-20" src={item?.Data.image} alt="" /></li>
            <li className="pt-2 w-220 overflow-clip text-nowrap mr-120">{item?.Data.title}</li>
            <li className="absolute right-[24vw] pt-2 flex items-center"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{item?.Data.price}</li>
            <li className="absolute right-[18vw] pt-2 flex items-center">{item?.quantity}</li>
            <li className="absolute right-[4vw] pt-2 flex items-center"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{item?.quantity*item?.Data.price}</li>
        </ul>
        <hr className="border-b-1 border-gray-400"/>
        </div>)
        )
        }
        <div className="flex justify-between ml-2">
            <p className="text-xl font-bold ml-2">Grand Total</p>
            <p className="mr-[4vw] flex"><img className="h-4 mt-0.5" src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>{total?total:""}</p>
        </div>
        </>
    )
}