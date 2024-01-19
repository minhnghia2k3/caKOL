'use server';
import UserModel from "./models";
import { connectDB } from "./utils";

/* fetch all users data */
export const fetchUsers = async () => {
    try {
        connectDB();
        const users = await UserModel.find({});
        return users;
    } catch (error: any) {
        throw new Error(error.message)
    }
}
