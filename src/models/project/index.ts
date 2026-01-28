import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProject extends Document {
  _id: Types.ObjectId;
  name: string;
  description: string;
  createdBy: Types.ObjectId;
  members: Array<{ userId: Types.ObjectId; roleInProject: string }>;
  status: Types.ObjectId;
}

const ProjectSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
    members: [
      {
        userId: { type: Types.ObjectId, required: true, ref: "User" },
        roleInProject: {
          type: String,
          required: true,
          enum: ["ADMIN", "MEMBER"],
        },
      },
    ],
    status: { type: Types.ObjectId, required: true, ref: "SystemConfig" },
  },
  { timestamps: true },
);

const Project = mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
