import express from "express";
import { getAllUserData } from "../../controllers/userController.js";

const router = express.Router();

//  api teg point
router.get("/user", getAllUserData);

export default router;
