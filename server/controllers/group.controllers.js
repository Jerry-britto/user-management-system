// groupController.js
import { Group } from "../models/groups.models.js";
import { User } from "../models/users.models.js";

export const addUsersToGroup = async (req, res) => {
  try {
    const { id, members } = req.body;

    //Empty details
    if (!id || !members || !(members.length > 0)) {
      throw new Error("Fill in your group details correctly");
    }

    // check whether group exist or not

    const group = await Group.findOne({ id });
    if (group) {
      throw new Error("Group already exists");
    }

    //retrieve those users whose id's are provided
    const users = await User.find({ _id: { $in: members } });

    const uniqueDomains = new Set(users.map((user) => user.domain)); //extracting users with unique domains

    if (users.length != uniqueDomains.size) {
      throw new Error("User domains must be unique within the group",);
    }

    //extracting users with unique available status
    const uniqueAvailableStatus = new Set(users.map((user) => user.available));

    if(users.length!= uniqueAvailableStatus.size){
        throw new Error("All users must have the same available status");
    }

    const newGroup = new Group({
        id,
        members: users.map((user)=>user._id)
    })

    await newGroup.save();

    res.status(200).json({
        message:"Group created successfully",
        newGroup
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTeam = async(req,res)=>{
    try {
        const {id} = req.params;

        //Find the group and store the members details
        const users = await Group.findOne({id}).populate('members');
        
        if(!users){
            throw new Error("Group does not exist");
        }

        res.status(200).json({
            "message":"Users retrieved successfully",
            users
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
