import Products from "../models/products.model.js"

export async function AllProductList(req,res) {
    const data = await Products.find({})
    res.json(data)
}



export async function GetProductById(req ,res) {
  const {_id}= req.body;
  const productDetail=await Products.findById(_id)
  res.json(productDetail)
}

