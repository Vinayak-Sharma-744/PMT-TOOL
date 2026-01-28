import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    members: Array<{ userId: string; roleInProject: string }>;
    status: string;
}

const ProjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: String, required: true },
    members: [{ userId: { type: String, required: true }, roleInProject: { type: String, required: true } }],
    status: { type: String, required: true },
}, { timestamps: true });

const Project = mongoose.model<IProject>('Project', ProjectSchema);

export default Project;