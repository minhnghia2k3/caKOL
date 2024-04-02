import { ICategories } from './categories';

export interface IKOLs {
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
        time: string;
        available: boolean;
        price: string;
    }[];

    categories: ICategories[];

    active: boolean;
}
