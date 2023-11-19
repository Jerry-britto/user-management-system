import mongoose,{Schema} from "mongoose"

const groupSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    members:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]
},{timestamps:true})

export const Group = mongoose.model("Group",groupSchema);