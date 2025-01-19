import Student from "../models/Student.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

export const getAllStudentData = asyncHandler(async (req, res) => {
  const data = await Student.find();
  if (!data) {
    return res
      .status(400)
      .json({ message: "on the hand no data found", users: data });
  }

  res.status(200).json({ text: "all student data", users: data });
});

/**
 *
 *      create student data
 */
export const creatStudentData = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const passHash = await bcrypt.hash(password, 10);

  const data = await Student.create({ name, email, password: passHash });
  res.status(200).json({ message: "Create Studen Data Done", student: data });
});
