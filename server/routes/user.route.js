import express from "express"   
import { SaveUser,GetAllUsers,GetUsersById } from "../controller/user.controller.js";

const route =express.Router()

route.get("/" , GetAllUsers);

route.post("/" , SaveUser);

route.get("/getbyid",GetUsersById)


export default route;