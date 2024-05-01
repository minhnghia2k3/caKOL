import envConfig from '@/app/config';
import { IInvoices } from '@/app/types/invoices';
import { IKOLs } from '@/app/types/kols';
import { ListData } from '@/app/types/list-data';
import { IUsers } from '@/app/types/users';
import { type ClassValue, clsx } from 'clsx';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
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
