import { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: string;
    type: 'Admin' | 'User';
    createdAt: Date;
    updatedAt: Date;
}

export interface IAppointment extends Document {
    KOLId: IKOL['_id'];
    userId: IUser['_id'];
    scheduleId: ISchedule['_id'];
    status: 'Pending' | 'Confirmed' | 'Cancelled';
}

export interface ISchedule extends Document {
    KOLId: IKOL['_id'];
    startTime: Date;
    endTime: Date;
}

export interface IKOL extends Document {
    alias: string;
    categories: string[];
    price: number;
    address: string;
    date_of_birth: Date;
    socials: Record<string, string>;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface IPayment extends Document {
    userId: IUser['_id'];
    appointmentId: IAppointment['_id'];
    amount: number;
    status: 'Pending' | 'Success' | 'Failed';
}