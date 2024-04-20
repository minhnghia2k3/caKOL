import { IOfficeHours } from './office-hours';
import { IUsers } from './users';

export interface ICarts {
    _id: string;
    user: IUsers;

    office_hours: IOfficeHours[];
}
