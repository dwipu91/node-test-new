import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongodbConnection from "./config/mongbd.js";

import allRouter from "./routes/index.js";

// env config
dotenv.config();
const PORT = process.env.PORT || 9090;

// express initt
const app = express();

//  middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// statcick folder
app.use(express.static("public"));

// use router
app.use(allRouter);

// server listen
app.listen(PORT, () => {
  mongodbConnection();

  console.log(`server is ranning on port ${PORT}`.bgGreen);
});

// MVC pattern => models controller viws
