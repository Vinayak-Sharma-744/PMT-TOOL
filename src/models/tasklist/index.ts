import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ITasklist extends Document {
  _id: Types.ObjectId;
  projectId: Types.ObjectId;
  title: string;
  order: number;
}

const TasklistSchema: Schema = new Schema(
  {
    projectId: {
      type: Types.ObjectId,
      required: true,
      ref: 'Project',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const TasklistModel = mongoose.model<ITasklist>('Tasklist', TasklistSchema);

export default TasklistModel;
