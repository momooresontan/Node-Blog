import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    res.status(404).json({ message: "No users found!" });
  }
  return res.status(200).json({ users });
};
