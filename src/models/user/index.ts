import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    roleId: string;
    isActive: boolean;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roleId: { type: String, required: true },
    isActive: { type: Boolean, default: true }
});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export const createUser = async (userData: IUser) => {
    const user = new UserModel(userData);
    return await user.save();
};

export const getUserById = async (id: string) => {
    return await UserModel.findById(id);
};

export const updateUser = async (id: string, updateData: Partial<IUser>) => {
    return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteUser = async (id: string) => {
    return await UserModel.findByIdAndDelete(id);
};

export default UserModel;