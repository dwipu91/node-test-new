import express from "express";
import {
  creatStudentData,
  getAllStudentData,
} from "../../controllers/studentController.js";

//      init
const router = express.Router();

//  রাঊটার এর ব্যাবহার
router.get("/student", getAllStudentData);
router.post("/student", creatStudentData);

// export default
export default router;
