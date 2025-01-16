import express from "express";

import studentRouter from "../routes/student/router.js";
import userRouter from "../routes/users/router.js";

// init oruter
const router = express.Router();

router.use("/api/v1", studentRouter);
router.use("/api/v1", userRouter);

// export default
export default router;
