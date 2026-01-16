import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    id: string;
    projectId: string;
    tasklistId: string;
    parentTaskId?: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: Date;
    assignees: string[];
    order: number;
    createdBy: string;
    updatedBy: string;
}

const TaskSchema: Schema = new Schema({
    projectId: { type: String, required: true },
    tasklistId: { type: String, required: true },
    parentTaskId: { type: String, default: null },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    dueDate: { type: Date, required: true },
    assignees: { type: [String], default: [] },
    order: { type: Number, required: true },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
}, { timestamps: true });

export const Task = mongoose.model<ITask>('Task', TaskSchema);