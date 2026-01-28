import mongoose, { Schema, Document, Types } from "mongoose";

export interface IRole extends Document {
  _id: Types.ObjectId;
  name: string;
  permissions: string[];
}

const RoleSchema: Schema = new Schema({
  name: { type: String, required: true },
  permissions: { type: [String], default: [] },
}, { timestamps: true });

const Role = mongoose.model<IRole>("Role", RoleSchema);

export default Role;
