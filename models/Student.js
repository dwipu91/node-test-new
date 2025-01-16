import mongoose from "mongoose";

// create schema
const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
    },
    cell: {
      type: String,
      trim: true,
      default: null,
    },
    photo: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
      trim: true,
      default: null,
    },
    password: {
      type: String,
      trim: true,
    },
    userName: {
      type: String,
      trim: true,
      default: null,
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
