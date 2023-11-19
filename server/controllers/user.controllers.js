import { User } from "../models/users.models.js";

//get all users
export const getUsers = async (req, res) => {
  try {
    const { page = 1, first_name, domain, gender, available } = req.query;

    let skip = (page - 1) * 20; //pagenation

    let search = first_name ?  {
      $or: [
          { first_name: { $regex: new RegExp(first_name, 'i') } }
      ],
  }: {}; //search

    //filteration
    let filter = {};
    if (domain) filter.domain = domain;
    if (gender) filter.gender = gender;
    if (available ) filter.available = available==='yes';

    let result = { ...search, ...filter };
    // console.log(result);
    const data = await User.find(result).skip(skip).limit(20);
    if(!data) throw new Error("Record does not exist")
    res.status(200).json(data);
  } catch (error) {
    res.status(204).json({
      success: false,
      error: error.message,
    });
  }
};

//get a particular user based on its id
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findOne({ id });
    if (!data) {
      throw new Error("User not found");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(204).json({
      success: false,
      error: error.message,
    });
  }
};

//create a new user
export const createUser = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      id,
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    } = req.body;
    if (
      !id ||
      !first_name ||
      !last_name ||
      !email ||
      !gender ||
      !avatar ||
      !domain
    ) {
      throw new Error("Kindly provide all the information");
    }
    const check = await User.findOne({ id });
    if (check) {
      throw new Error("User already exists");
    }
    const newUser = new User({
      id,
      first_name,
      last_name,
      email,
      gender,
      domain,
      avatar,
      available,
    });
    await newUser.save();
    res.status(200).json({
      message: "User Created",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//update an existing user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    let user = await User.findOne({ id });
    if (!user) {
      throw new Error("User does not exist");
    }
    const { first_name, last_name, email, gender, avatar, domain, available } =
      req.body;

    user = await User.findOneAndUpdate(
      { id },
      {
        first_name,
        last_name,
        email,
        gender,
        avatar,
        domain,
        available,
      }
    );
    user.save();
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Kindly Provide the user's id to be deleted");
    }
    const user = await User.deleteOne({ id });
    console.log(user);
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
