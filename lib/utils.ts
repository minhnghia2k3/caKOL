import { OhFormData } from '@/app/(admin)/admin/office-hours/add/page';
import envConfig from '@/app/config';
import { ICategories } from '@/app/types/categories';
import { IFormData } from '@/app/types/form-data';
import { IInvoices } from '@/app/types/invoices';
import { IKOLs } from '@/app/types/kols';
import { ListData } from '@/app/types/list-data';
import { IOfficeHours } from '@/app/types/office-hours';
import { IUsers } from '@/app/types/users';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getUserInfo = async (): Promise<IUsers> => {
    const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
    );

    const data = await response.json();
    return data;
};

export const getKol = async (kolId: string): Promise<IKOLs> => {
    const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols/${kolId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
};

export const getAllUsers = async (): Promise<IUsers[]> => {
    const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
    );
    return await response.json();
};

export const getAllInvoices = async (): Promise<IInvoices[]> => {
    const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/payments/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch all invoices');
    }
    return await response.json();
};

export const deleteUser = async (userId: string): Promise<IUsers> => {
    try {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users/${userId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const deleteKol = async (kolId: string): Promise<IKOLs> => {
    try {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols/${kolId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const deleteOh = async (ohId: string): Promise<IKOLs> => {
    try {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/office-hours/${ohId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const fetchKOLs = async ({
    limit = 10,
    page = 1,
    query
}: {
    limit?: number;
    page?: number;
    query?: {
        name?: string;
        location?: string;
    };
} = {}): Promise<ListData<IKOLs>> => {
    try {
        let url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols?limit=${limit}&page=${page}`;

        // Check if 'name' is provided in the query
        if (query?.name) {
            url += `&name=${encodeURIComponent(query.name)}`;
        }

        // Check if 'location' is provided in the query
        if (query?.location) {
            url += `&location=${encodeURIComponent(query.location)}`;
        }

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        return await response.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const fetchOfficeHours = async (): Promise<ListData<IOfficeHours>> => {
    try {
        let url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/office-hours`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        return await response.json();
    } catch (error: any) {
        throw new Error(error);
    }
};

export const createKOL = async (formData: IFormData): Promise<IKOLs> => {
    try {
        let url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols`;
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('major', formData.major);
        formDataToSend.append('bio', formData.bio);
        formDataToSend.append('yob', formData.yob);

        if (formData.categories) {
            formDataToSend.append('categories', formData.categories);
        }

        // Append files from FileList (if any)
        if (formData.images) {
            for (let i = 0; i < formData.images.length; i++) {
                formDataToSend.append(`images`, formData.images[i]);
            }
        }

        const response = await fetch(url, {
            method: 'POST',

            body: formDataToSend,
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error('Failed to create KOL');
        }
        return await response.json();
    } catch (error: any) {
        throw new Error(error);
    }
};

export const updateKOL = async (kolId: string, formData: IFormData) => {
    try {
        let url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols/${kolId}`;
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('major', formData.major);
        formDataToSend.append('bio', formData.bio);
        formDataToSend.append('yob', formData.yob);

        // Append files from FileList (if any)
        if (formData.images) {
            for (let i = 0; i < formData.images.length; i++) {
                formDataToSend.append(`images`, formData.images[i]);
            }
        }

        const response = await fetch(url, {
            method: 'PUT',
            body: formDataToSend,
            credentials: 'include'
        });
        return response.ok;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const fetchCategories = async (): Promise<ICategories[]> => {
    try {
        let url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/categories`;

        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    } catch (error: any) {
        throw new Error(error);
    }
};

export const createOh = async (formData: OhFormData): Promise<IOfficeHours> => {
    try {
        let url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/office-hours`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Failed to create new office hour');
        }
        return await response.json();
    } catch (error: any) {
        throw new Error(error);
    }
};
export const logout = async () => {
    const response = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
    );
    if (response.ok) {
        window.location.reload();
    }
};
