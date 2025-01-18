import User from "../models/User.js";

export const getAllUserData = async (req, res) => {
  const data = await User.find();
  res.status(200).json({ message: "all users data hear", data: data });
};

/**
 *
 * @param {get} req
 * @param {single data} res
 * @returns
 */
export const getSingleData = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ text: "user id  is not found" });
  }
  const singleUser = await User.findById(id);
  res
    .status(200)
    .json({ message: "Thes is a single user data", users: singleUser });
};

/**
 * create use data
 */
export const createUserData = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "requir data is not found" });
  }
  const createData = await User.create({ name, password, email });
  res.status(200).json({ message: "create User data done", user: createData });
};

/**
 * @param {cullet user id } req
 * @param {delete} res
 *
 *
 */
export const deleteUserData = async (req, res) => {
  const { id } = req.params;
  // get signle user
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(200).json({ text: "Data deleted not found", user: null });
  }
  res
    .status(200)
    .json({ message: "that data was deleted done", user: deletedUser });
};

/**
 *  update users
 */
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, location, photo } = req.body;
  if (!name) {
    return res.status(200).json({ message: "all fild are required" });
  }
  const data = await User.findByIdAndUpdate(
    id,
    { name, age, location, photo },
    { new: true }
  );
  res.status(200).json({ message: "update user done", users: data });
};
