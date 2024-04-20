import { IKOLs } from './kols';

export interface IOfficeHours {
    _id: string;
    kol: IKOLs;
    appointmentTime: string;
    appointmentDate: Date;
    price: string;
    available: boolean;
}
