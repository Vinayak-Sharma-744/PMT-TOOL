import mongoose, { Schema, Document } from 'mongoose';

interface ISystemConfig extends Document {
    taskStatuses: string[];
    taskPriorities: string[];
    // Future properties can be added here
    projectStatuses?: string[];
    labels?: string[];
}

const SystemConfigSchema: Schema = new Schema({
    taskStatuses: { type: [String], required: true },
    taskPriorities: { type: [String], required: true },
    projectStatuses: { type: [String] },
    labels: { type: [String] }
});

const SystemConfig = mongoose.model<ISystemConfig>('SystemConfig', SystemConfigSchema);

export default SystemConfig;