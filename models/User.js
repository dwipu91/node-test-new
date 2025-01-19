import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      // required: true,
    },
    age: {
      type: Number,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    cell: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      trim: true,
      //   required: true,
      lowercase: true,
      default: null,
    },
    gender: {
      type: String,
      trim: true,
      enmu: ["Male", "Female", "Cusotm"],
      default: null,
    },
    phoneNumber: {
      type: String,
      trim: true,
      default: null,
    },
    photo: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

//exportt default
export default mongoose.model("userModel", userSchema);
