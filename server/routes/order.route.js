import express from "express";
import { SaveOrder,GetAllOrder,GetOrdersById } from "../controller/order.controller.js";

const route = express.Router()

route.get("/", GetAllOrder)

route.post("/", SaveOrder)

route.get("/byId",GetOrdersById)



export default route;