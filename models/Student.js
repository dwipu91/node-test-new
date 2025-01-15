import mongoose from "mongoose";

// create schema
const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    eamil: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    userName: {
      type: String,
      trim: true,
    },
    trash: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createAt: "createAt",
      updateAt: "updateAt",
    },
  }
);

export default mongoose.model("Student", StudentSchema);
