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
app.use(cors(
    {
        origin:"https://intern-project-zrcr.vercel.app/",
        credentials:true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
        allowedHeaders: "Content-Type,Authorization", 
        preflightContinue: false, 
        optionsSuccessStatus: 204,
    }
))
 app.use("/api",router)
app.use(express.urlencoded({extended:true}))
connectToDB()
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server on https://localhost:${PORT}`)
})
// DefaultData()
