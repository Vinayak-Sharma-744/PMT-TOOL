import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  roleId: Types.ObjectId;
  isActive: boolean;
	status: "ACTIVE" | "INACTIVE" | "DELETED";
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roleId: { type: Types.ObjectId, required: true, ref: "Role" },
    isActive: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "DELETED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
