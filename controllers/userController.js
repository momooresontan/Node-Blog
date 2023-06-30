import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    res.status(404).json({ message: "No users found!" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  let existingUser;
  try {
  } catch (err) {
    console.log(err);
  }
};
