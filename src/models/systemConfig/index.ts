import mongoose, { Schema, Document } from "mongoose";

interface ISystemConfig extends Document {
  name: string;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
}

const SystemConfigSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["ACTIVE", "INACTIVE", "DELETED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true },
);

SystemConfigSchema.index(
  { name: 1 },
  {
    unique: true,
    partialFilterExpression: { status: { $ne: "DELETED" } },
  },
);

const SystemConfig = mongoose.model<ISystemConfig>(
  "SystemConfig",
  SystemConfigSchema,
);

export default SystemConfig;
