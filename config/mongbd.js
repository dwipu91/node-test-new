import mongoose from "mongoose";

const mongodbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`moggo db is ranning`.bgBlue);
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};
export default mongodbConnection;
