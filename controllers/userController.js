import User from "../models/userModel";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
  } catch (err) {
    console.log(err);
  }
};
