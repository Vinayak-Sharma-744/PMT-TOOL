import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITask extends Document {
  _id: Types.ObjectId;
  projectId: Types.ObjectId;
  tasklistId: Types.ObjectId;
  parentTaskId?: Types.ObjectId;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: Date;
  assignees: string[];
  order: number;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
}

const TaskSchema: Schema = new Schema(
  {
    projectId: { type: Types.ObjectId, required: true, ref: "Project" },
    tasklistId: { type: Types.ObjectId, required: true, ref: "Tasklist" },
    parentTaskId: { type: Types.ObjectId, default: null, ref: "Task" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    dueDate: { type: Date, required: true },
    assignees: { type: [String], default: [] },
    order: { type: Number, required: true },
    createdBy: { type: Types.ObjectId, required: true, ref: "User" },
    updatedBy: { type: Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true },
);

export const Task = mongoose.model<ITask>("Task", TaskSchema);
