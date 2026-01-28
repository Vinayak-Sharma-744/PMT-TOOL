import mongoose, { Schema, Document } from 'mongoose';

export interface IRole extends Document {
    id: string;
    name: string;
    permissions: string[];
}

const RoleSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    permissions: { type: [String], default: [] }
});

const Role = mongoose.model<IRole>('Role', RoleSchema);

export default Role;