import mongoose from "mongoose";

const UserQuerySchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const UserQuery =
  mongoose.models.UserQuery || mongoose.model("UserQuery", UserQuerySchema);

export default UserQuery;
