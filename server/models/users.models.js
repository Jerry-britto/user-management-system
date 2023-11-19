import  mongoose ,{Schema } from "mongoose";
import validator from "validator";
const userSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Not valid Email Address")
            }
        }
    },
    gender:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        default:false,
        required:true
    }
})

export const User = mongoose.model("User",userSchema)