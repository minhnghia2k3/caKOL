import { ICategories } from './categories';

export interface IKOLs {
    _id: string;

    name: string;

    images: string[];

    location: string;

    major: string;

    bio: string;

    yob: number;

    socials: Record<string, string>;

    type: [
        {
            time: String;
            available: Boolean;
            price: String;
        }
    ];
    default: [];

    office_hours: {
        _id: string;
        kol: IKOLs;
        appointmentDate: Date;
        appointmentTime: string;
        available: boolean;
        price: string;
    }[];

    categories: ICategories[];

    active: boolean;

    createdAt: Date;
}

export interface ListKOLs {
    info: {
        unit: number;
        currentPage: number;
        totalPage: number;
    };
    data: IKOLs[];
}
