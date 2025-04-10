import orders from "../models/orders.model.js";

export async function SaveOrder(req ,res) {
    console.log("/user connected...")

  const req_Data = req.body;

  const data = new orders(req_Data);
  
  try{
    const result = await data.save();
    console.log(data)
    res.status(200).send(data);
  }
  catch(err){
    console.log(err)
    res.status(500).json(err);
  }
    
}

export async function GetOrdersById(req ,res) {
    const {_id}= req.body;
    const UsersDetail=await orders.find({user_id:_id})
    res.json(UsersDetail)
}

export async function GetAllOrder(req ,res) {
    const AllOrdersdata=await orders.find({})
    res.json(AllOrdersdata)
}