import User from "../models/User.js";
import jwt from "jsonwebtoken";
import hashPassword from "bcrypt";
import asyncHandler from "express-async-handler";

export const getAllUserData = asyncHandler(async (req, res) => {
  const data = await User.find();
  if (data.length === 0) {
    return res
      .status(400)
      .json({ message: "Uses data length is zero", users: data });
  }

  res.status(200).json({ message: "all users data hear", data: data });
});

/**
 *
 * @param {get} req
 * @param {single data} res
 * @returns
 */
export const getSingleData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ text: "user id  is not found" });
  }
  const singleUser = await User.findById(id);
  res
    .status(200)
    .json({ message: "Thes is a single user data", user: singleUser });
});

/**
 * create use data
 */
export const createUserData = asyncHandler(async (req, res) => {
  const { name, email, password, cell } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "requir data is not found" });
  }
  const hassPassword = await hashPassword.hash(password, 6);
  const emailFind = await User.findOne({ email });
  const phoneFind = await User.findOne({ cell });
  if (emailFind) {
    return res.status(400).json({ message: "Allresdy used thes email" });
  }
  //  if (phoneFind) {
  //   return res.status(400).json({ mesage: "Phone number all ready existed" });
  // }

  const createData = await User.create({ name, password: hassPassword, email });

  //  create jwt
  const genaretToken = jwt.sign({ name, email }, process.env.JWT_SECRET, {
    expiresIn: "15s",
  });

  res.status(200).json({
    message: "create User data done",
    user: createData,
    genaretToken,
  });
});

/**
 * @param {cullet user id } req
 * @param {delete} res
 *
 */
export const deleteUserData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // get signle user
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(200).json({ text: "Data deleted not found", user: null });
  }
  res
    .status(200)
    .json({ message: "that data was deleted done", user: deletedUser });
});

/**
 *  update users
 */
export const updateUser = asyncHandler(async (req, res) => {
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
});

/**
 *            token data
 * secret key
 * expier time
 *
 */

/**
 *      error handler
 */
