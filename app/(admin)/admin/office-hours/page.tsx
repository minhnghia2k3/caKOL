'use client';
import React, { useEffect, useState } from 'react';
import Search from '../ui/dashboard/search/search';
import Link from 'next/link';
import styles from '../ui/dashboard/users/users.module.css';
import { IOfficeHours } from '@/app/types/office-hours';
import { useToast } from '@/components/ui/use-toast';
import { deleteOh, fetchOfficeHours } from '@/lib/utils';
import { Info } from '../ui/dashboard/pagination/pagination';
import { formatCurrency, formatDate } from '@/lib/helper';
import { Button } from '@/components/ui/button';

const OfficeHours = () => {
    const [ohs, setOhs] = useState<IOfficeHours[]>([]);
    const [info, setInfo] = useState<Info>({
        unit: 0,
        currentPage: 1,
        totalPage: 0
    });
    const { toast } = useToast();

    useEffect(() => {
        const fetchAllOhs = async () => {
            const { info, data } = await fetchOfficeHours();
            if (data) setOhs(data);
            if (info) setInfo(info);
        };
        fetchAllOhs();
    }, []);

    const handleDeleteOh = async (ohId: string) => {
        try {
            const oh = await deleteOh(ohId);
            if (oh) {
                toast({
                    title: 'Xóa office hour thành công',
                    variant: 'success'
                });
                const ohs = await fetchOfficeHours();
                setOhs(ohs.data);
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
                <Search placeholder="Search for a user..." />
                <Button asChild>
                    <Link href="/admin/office-hours/add">Add New</Link>
                </Button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>KOL</td>
                        <td>Time</td>
                        <td>Date</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {ohs.length > 0 &&
                        ohs.map((oh) => (
                            <tr key={oh._id}>
                                <td>
                                    <div className={styles.oh}>
                                        {oh.kol.name}
                                    </div>
                                </td>
                                <td>{oh.appointmentTime}</td>
                                <td>{formatDate(oh.appointmentDate)}</td>
                                <td>{formatCurrency(Number(oh.price))}</td>
                                <td>
                                    <Button
                                        variant={'destructive'}
                                        onClick={() => handleDeleteOh(oh._id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {/* <Pagination count={count} /> */}
        </div>
    );
};

export default OfficeHours;
