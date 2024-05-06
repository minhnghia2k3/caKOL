import { ICategories } from './categories';

export interface IFormData {
    name: string;
    images: FileList | null;
    location: string;
    major: string;
    bio: string;
    yob: string;
    categories?: string;
}
