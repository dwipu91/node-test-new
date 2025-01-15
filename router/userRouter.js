import express from "express";
import {
  createUser,
  getAllUser,
  studentData,
  studneGetData,
} from "../controllers/userController.js";

//init router
const router = express.Router();

// create riute
router.get("/api/v1/user", getAllUser);
router.post("/api/v1/user", createUser);
router.post("/api/v1/student", studentData);
router.get("/api/v1/student", studneGetData);

// export
export default router;
