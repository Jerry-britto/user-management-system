import dotenv from "dotenv"
import connectToDB from "./db/index.js";
import express from "express"
import cors from "cors"
// import DefaultData from "./defaultData.js"
const app = express()
import router from "./routes/routes.js"
dotenv.config({
    path:"./env"
})
app.use(express.json())
app.use(cors())
 app.use("/api",router)
app.use(express.urlencoded({extended:true}))
connectToDB()
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("server on")
})
// DefaultData()
