import mongoose, { Schema, Document } from 'mongoose';

export interface ITasklist extends Document {
    id: string;
    projectId: string;
    title: string;
    order: number;
}

const TasklistSchema: Schema = new Schema({
    projectId: { type: String, required: true },
    title: { type: String, required: true },
    order: { type: Number, required: true }
});

const TasklistModel = mongoose.model<ITasklist>('Tasklist', TasklistSchema);

export default TasklistModel;