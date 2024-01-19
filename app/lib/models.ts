import mongoose from "mongoose";
import { IUser } from "./definitions";
import bcrypt from 'bcrypt';
export const UserSchema = new mongoose.Schema<IUser>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    type: { type: String, required: true, enum: ['Admin', 'User'], default: 'User' }
}, { timestamps: true })

UserSchema.pre<IUser>('save', async function (next) {
    try {
        console.log('check-in save middleware')
        if (!this.isModified('password')) return next();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        return next();
    } catch (error: any) {
        next(error)
    }
})

const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default UserModel;