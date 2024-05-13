'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../ui/dashboard/products/products.module.css';
import Search from '../ui/dashboard/search/search';
import Pagination, { Info } from '../ui/dashboard/pagination/pagination';
import { deleteKol, fetchKOLs } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { IKOLs } from '@/app/types/kols';
import { formatDate } from '@/lib/helper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export interface SearchParams {
    limit: number;
    page: number;
    name: string;
    location: string;
}

const ProductsPage = ({ searchParams }: { searchParams: SearchParams }) => {
    const { toast } = useToast();
    const [kols, setKOLs] = useState<IKOLs[]>([]);
    const [info, setInfo] = useState<Info>({
        unit: 0,
        currentPage: 1,
        totalPage: 0
    });
    const host = process.env.NEXT_PUBLIC_HOST;
    const limit = searchParams?.limit || 10;
    const page = searchParams?.page || 1;
    const name = searchParams?.name || undefined;
    const location = searchParams?.location || undefined;
    const query = { name, location };
    useEffect(() => {
        const fetchAllKOLs = async () => {
            try {
                const kols = await fetchKOLs({ limit, page, query });
                setKOLs(kols.data);
                setInfo(kols.info);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllKOLs();
    }, [searchParams]);
    const handleDeleteKOL = async (kolId: string) => {
        try {
            const kol = await deleteKol(kolId);
            if (kol) {
                toast({
                    title: 'Xóa KOL thành công',
                    variant: 'success'
                });
                const kols = await fetchKOLs();
                setKOLs(kols.data);
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Xóa KOL thất bại',
                variant: 'destructive'
            });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a KOL..." />
                <Button asChild>
                    <Link href="/admin/products/add">Add New</Link>
                </Button>
            </div>
            <table className={`mt-4 ${styles.table}`}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Categories</td>
                        <td>Office Hours</td>
                        <td>Created At</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {kols.length > 0 &&
                        kols.map((kol) => (
                            <tr key={kol._id}>
                                <td>
                                    <div className={styles.product}>
                                        {kol.name}
                                    </div>
                                </td>
                                <td>{kol.location}</td>
                                <td className="text-sm">
                                    {kol.categories &&
                                        kol.categories.map((category) => (
                                            <p key={category.slug}>
                                                {category.name}
                                            </p>
                                        ))}
                                </td>
                                <td>
                                    {kol.office_hours &&
                                        kol.office_hours.map((oh) => {
                                            const next_appointment =
                                                kol.office_hours.find(
                                                    (oh) =>
                                                        oh.appointmentDate >=
                                                        new Date()
                                                );
                                            return (
                                                <p key={oh._id}>
                                                    {!next_appointment ? null : (
                                                        <p>
                                                            {
                                                                next_appointment?.appointmentTime
                                                            }
                                                            -
                                                            {formatDate(
                                                                next_appointment &&
                                                                    next_appointment?.appointmentDate
                                                            )}
                                                            `
                                                        </p>
                                                    )}
                                                </p>
                                            );
                                        })}
                                </td>
                                <td>{formatDate(kol.createdAt)}</td>
                                <td>
                                    <Button className="mr-2" asChild>
                                        <Link
                                            href={`/admin/products/edit/${kol._id}`}
                                        >
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button
                                        variant={'destructive'}
                                        onClick={() => handleDeleteKOL(kol._id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Pagination info={info} />
        </div>
    );
};

export default ProductsPage;
