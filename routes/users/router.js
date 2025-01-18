import express from "express";

import {
  getAllUserData,
  deleteUserData,
  createUserData,
  getSingleData,
  updateUser,
} from "../../controllers/userController.js";

// router init
const router = express.Router();

//  api teg point
router.get("/user", getAllUserData);
router.post("/user", createUserData);

router.get("/user/:id", getSingleData);
router.delete("/user/:id", deleteUserData);
router.patch("/user/:id", updateUser);

export default router;
