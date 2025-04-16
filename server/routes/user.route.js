import express from "express"   
import { SaveUser,GetAllUsers,GetUsersById,GetUserByEmail } from "../controller/user.controller.js";

const route =express.Router()

route.get("/" , GetAllUsers);

route.post("/" , SaveUser);

route.get("/getbyid",GetUsersById)

route.post("/getuserbyemail", GetUserByEmail)


export default route;