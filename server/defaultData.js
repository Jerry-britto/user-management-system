import {User} from "./models/users.models.js"
import {users} from "./constants/const.js"
const DefaultData = async()=>{
    try {
        await User.deleteMany({})
        const storeData = await User.insertMany(users)
        console.log(storeData.length)
    } catch (error) {
        console.log("Error!! ",error.message)
    }
}
export default DefaultData;

