import { LineChart } from '@mui/x-charts';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context';


function Dashboard({props}){

    const [totalOrder,totalOrderDetails,total]=props

    let newdate=Date()

    const{datas,user}=useContext(UserContext)

    const [recentOrder,setRecentOrder]=useState([])

    const [orderDetails,setOrderDetails]=useState([])



    let todaytotal=0

    useEffect(()=>{
        fetch("http://localhost:8000/orders/recentOrder")
        .then((res)=> res.json())
        .then((res)=> setRecentOrder(res))
        .catch((err)=> console.log(err))
    },[])


    function orderadding(data){
            for(let i=0;i<datas.length;i++){
                if(datas[i]._id===data.product_id){
                    setOrderDetails((previousData)=>([...previousData,{item:datas[i] ,data:data} ]))
                return
            }
        }
            
    }
       
        
        if(orderDetails<recentOrder){
            for(let i=0;i<recentOrder.length;i++){
            //console.log(Ordered[i])
            orderadding(recentOrder[i])
        }}
        

        if(orderDetails.length>0){
            for(let i=0;i<orderDetails.length;i++){
                todaytotal=todaytotal+(orderDetails[i].data.quantity*orderDetails[i].item.price)
            }
        }


     

        function top4feq(data){
            // Step 1: Count occurrences
          const countMap = {};
          data.forEach(item => {
            countMap[item.data.product_id] = (countMap[item.data.product_id] || 0) + 1;
          });
          
          // Step 2: Convert to array and sort by count descending
          const sortedCounts = Object.entries(countMap)
            .map(([product_id, sales]) => ({ product_id:(product_id), sales }))
            .sort((a, b) => b.sales - a.sales);
          
          // Step 3: Get top 3
          const top3 = sortedCounts.slice(0, 4);
          return top3
          }

        const best4=top4feq(totalOrderDetails)

       

        let bestSaller=[]

        function addingbestsaller(data){
            for(let i=0;i<datas.length;i++){
                if(datas[i]._id===data.product_id){
                    bestSaller.push({product:datas[i] ,sales:data.sales})
                return
            }
        }
            
    }
       
        if(bestSaller.length<best4.length){
            for(let i=0;i<best4.length;i++){
            
            addingbestsaller(best4[i])
        }}

        function graphValue(){
            let graphVal=[0]
            for(let i=0;i<orderDetails.length;i++){
                graphVal.push(orderDetails[i].item.price*orderDetails[i].data.quantity)
            }
            graphVal.length>20?graphVal.length=20:"";

            return graphVal
        }

        // function graphValue(){
        //     let graphVal=[0]
        //     for(let i=0;i<totalOrderDetails.length;i++){
        //         graphVal.push(totalOrderDetails[i].item.price*totalOrderDetails[i].data.quantity)
        //     }
        //     graphVal.length>20?graphVal.length=20:"";

        //     return graphVal
        // }
    
    return(
        <>
        <div className="mt-10 h-40 flex justify-center items-center gap-5">
                    <div className="bg-white h-40 w-[22%] rounded-2xl py-3 px-6 flex flex-col justify-around">
                        <div className="flex justify-between">
                            <h3 className=" font-bold text-lg">Total Orders</h3>
                           
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img className="w-10 bg-blue-950 p-1 rounded-lg mr-5" src="https://cdn-user-icons.flaticon.com/192011/192011013/1744639304842.svg?token=exp=1744640206~hmac=f7d6b4bd6b271212d7f763cc6d021fe1" alt="" />
                                <p className=" font-bold">{totalOrder?.length}</p>
                            </div>
                            <p className='text-green-400'>↑ 34%</p>
                        </div>
                        <p className="flex justify-end opacity-50">Compared to {newdate?.slice(4,15)}</p>
                    </div>
                    <div className="bg-white h-40 w-[22%] rounded-2xl py-3 px-6 flex flex-col justify-around">
                        <div className="flex justify-between">
                            <h3 className=" font-bold text-lg">Total Revenue</h3>
                            
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <p className="w-10 h-10 bg-blue-950 p-1 rounded-lg mr-5 text-white flex justify-center items-center text-3xl">₹</p>
                                <p className=" font-bold">₹{total}</p>
                            </div>
                            <p className='text-green-400'>↑ 23%</p>
                        </div>
                        <p className="flex justify-end opacity-50">Compared to {newdate?.slice(4,15)}</p>
                    </div>
                    <div className="bg-white h-40 w-[22%] rounded-2xl py-3 px-6 flex flex-col justify-around">
                        <div className="flex justify-between">
                            <h3 className=" font-bold text-lg">Today's Orders</h3>
                          
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img className="w-10 bg-blue-950 p-1 rounded-lg mr-5" src="https://cdn-user-icons.flaticon.com/192011/192011013/1744639304842.svg?token=exp=1744640206~hmac=f7d6b4bd6b271212d7f763cc6d021fe1" alt="" />
                                <p className=" font-bold">{orderDetails?.length}</p>
                            </div>
                            <p className='text-green-400'>↑ 50%</p>
                        </div>
                        <p className="flex justify-end opacity-50">Compared to {newdate?.slice(4,15)}</p>
                    </div>
                    <div className="bg-white h-40 w-[22%] rounded-2xl py-3 px-6 flex flex-col justify-around">
                        <div className="flex justify-between">
                            <h3 className=" font-bold text-lg">Today's Revenue</h3>
                           
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <p className="w-10 h-10 bg-blue-950 p-1 rounded-lg mr-2 text-white flex justify-center items-center text-3xl">₹</p>
                                <p className=" font-bold text-sm">₹{todaytotal}</p>
                            </div>
                            <p className='text-green-400'>↑ 84%</p>
                        </div>
                        <p className="flex justify-end opacity-50">Compared to {newdate?.slice(4,15)}</p>
                    </div>
                </div>
                <div className=" mt-10 h-100 flex justify-center  gap-5">
                    
                    <div className="bg-white w-[61%] rounded-2xl flex flex-col  items-center">
                    <div className=" border-b-2 border-gray-300 w-[90%] py-4">
                        <h3 className="text-2xl font-bold ">Today's Sales Graph</h3>
                    </div>
                    <LineChart
                        xAxis={[{ data: [0,1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15 ,16 ,17 ,18 ,19 ,20 ,22 ,23 ,24] }]}
                        series={[
                            {
                            // data: [100, 250, 400, 1000, 1200, 5000, 5500, 7000, 8500 ,9000 ,9200, 10000, 10500, 11000 ,12000, 13200, 14000 ,14100],
                                data: graphValue()
                            },
                        ]}
                        width={750}
                        height={350}
                        />
                    </div>
                    <div className="bg-white w-[30%] rounded-2xl flex flex-col  items-center">
                        <div className=" border-b-2 border-gray-300 w-[90%] py-4">
                            <h3 className="text-2xl font-bold ">Best Seller</h3>
                        </div>
                        <div className="w-[90%]">
                            {
                                bestSaller.map((item)=>(
                                    <div key={item.product._id} className="flex justify-between mt-4">
                                        <div className="flex">
                                            <div className="w-16 h-16 rounded-lg">
                                                <img className="w-16 h-16" src={item.product.image} alt="" />
                                            </div>
                                            <div className="ml-4 flex flex-col justify-center">
                                                <p className=" font-bold w-45 h-11 text-wrap truncate">{item.product.title}</p>
                                                <p className=" opacity-50">₹{item.product.price}</p>
                                            </div>
                                        </div>

                                        {/* <div className="flex flex-col justify-center w-30 pl-2">
                                            <p className=" font-bold">₹{item.product.price*item.sales}</p>
                                            <p className=" opacity-50">{item.sales}</p>
                                        </div> */}
                                </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className="pb-10 mt-10 flex justify-center  gap-5">
                    <div className="bg-white w-[93%] pb-6 rounded-2xl flex flex-col items-center">
                        <div className=" border-b-2 border-gray-300 w-[90%] py-4">
                            <h3 className="text-2xl font-bold ">Recent Orders</h3>
                        </div>
                        <table className="w-[90%] text-center">
                            <thead className="border-b-2 border-gray-300 text-2xl opacity-40">
                                <tr className="h-20 flex justify-between items-center">
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Customer ID</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody className="w-[100%] flex flex-col-reverse">
                                {
                                    orderDetails.map((datas)=>(
                                        <tr key={datas.data._id} className="border-b-2 border-gray-300 text-sm h-20 flex justify-between items-center">
                                            <td className='flex justify-center items-center '>
                                                <img className='w-15 h-15 object-contain mr-2' src={datas.item.image} alt="" />
                                                <p className='w-30 h-10 text-wrap truncate text-left '>{datas.item.title}</p>
                                            </td>
                                            <td className=' -ml-25'><p className=''>{datas.data.quantity}</p></td>
                                            <td className='-ml-5'><p className='w-20 h-10 text-wrap truncate'>#{datas.data._id}</p></td>
                                            <td className='-ml-10'><p className='w-20 h-10 text-wrap truncate'>{datas.data.createdAt}</p></td>
                                            <td className='-ml-10'><p className='w-20 h-10 text-wrap truncate'>#{datas.data.user_id}</p></td>
                                            <td>₹{datas.item.price*datas.data.quantity}</td>
                                         </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        
        </>
    )
}

export default Dashboard