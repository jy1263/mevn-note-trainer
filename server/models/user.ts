import mongoose from 'mongoose';

const ModelName = "User";

export interface IUser {
  username: string;
}

export const UserSchema = new mongoose.Schema(
  {
    username: String
  },
  { timestamps: true },
);

export default mongoose.models[ModelName] || mongoose.model(ModelName, UserSchema);
