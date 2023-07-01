import bcrypt from "bcrypt";
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
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login instead" });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword,
    role,
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
};
