import express from "express"
import { getUsers,getUser,createUser,updateUser,deleteUser} from "../controllers/user.controllers.js"
import { addUsersToGroup,getTeam } from "../controllers/group.controllers.js";
const router = express.Router()

//User related routes

//retrieve all users
router.get("/users",getUsers);

//retrieve user with id
router.get("/users/:id",getUser);

//create a new user
router.post("/users",createUser);

//update an existing user
router.put("/users/:id",updateUser);

//delete an existing user
router.delete("/users/:id",deleteUser);



//gruop related routes
router.post("/team",addUsersToGroup);

router.get("/team/:id",getTeam);

export default router