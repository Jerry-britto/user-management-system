import mongoose from "mongoose";

const connectToDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('\n MONGODB connected !! ')
    }
    catch(error){
        console.log(`MONGO DB CONNECTION ERROR ${error}`)
    }
}

export default connectToDB