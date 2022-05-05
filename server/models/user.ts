import { Schema, model, models, PassportLocalSchema, PassportLocalDocument, PassportLocalModel } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const ModelName = "User";

export interface IUser extends PassportLocalDocument {
  details: string
}

export const UserSchema = new Schema<IUser>(
  {
    details: String
  },
  { timestamps: true },
);

UserSchema.plugin(passportLocalMongoose);

const User = models[ModelName] as PassportLocalModel<IUser> || model<IUser>(ModelName, UserSchema as PassportLocalSchema);

export default User;
