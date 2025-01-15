import Student from "../models/Student.js";
import userModel from "../models/User.js";
import passwordHash from "password-hash";
/**
 *
 * @param {*} req  get all data
 * @param {*} res  user
 * GET
 * public
 */
export const getAllUser = async (req, res) => {
  const data = await userModel.find();
  if (data.length === 0) {
    return res.status(404).json({ message: "ther is no data", users: data });
  }
  res.status(200).json({ users: data, message: "all user data " });
};

/**
 * @param {*} req singule user data
 * @param {*} res get
 * publick
 * get
 */
export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const data = await userModel.findById(id);

  if (!data) {
    return res
      .status(404)
      .json({ user: [], message: "single data is not found" });
  }
  res.status(200).json({ message: "thes is single user data", users: data });
};

/**
 * post route
 */
export const createUser = async (req, res) => {
  const { name, skill, password, email } = req.body;

  // validation করতেছি এই জায়গায়
  if (!name || !email || !password) {
    return res.status(400).json({ text: "data is not required" });
  }

  //  hash-password পাসওয়াড প্রটেক্ট কতেছি
  const hassPassword = passwordHash.generate(password);

  //criteate data ডাটা কিয়েট করতেছি
  const createUserData = await userModel.create({
    name,
    email,
    skill,
    password: hassPassword,
  });

  //  রেস্পস এ ডাটা শো করতেছি
  res.status(200).json({ text: "done data create", users: { createUserData } });
};

// create Student data
export const studentData = async (req, res) => {
  // get in body data
  const { name, email, password, age, userName } = req.body;

  // create data
  const data = await Student.create({ name });
  // respons data
  res.status(200).json({ text: "that is student data done ", student: data });
};

//  gggget data
export const studneGetData = async (req, res) => {
  const { id } = req.params;
  const data = await Student.find(id);
  res.status(200).json({ studnt: data });
};
