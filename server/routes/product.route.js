import express from "express";
import {AllProductList,GetProductById} from "../controller/product.controller.js"

const route = express.Router()

// app.get("/product", async (req,res)=>{
//   const data = await Product.find({})
//   res.json(data)
// })

route.get("/", AllProductList)



route.get("/getproductbyid",GetProductById)



export default route;