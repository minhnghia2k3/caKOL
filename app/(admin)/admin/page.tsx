'use client';
import { getAllInvoices, getAllUsers } from '@/lib/utils';
import Card from './ui/dashboard/card/card';
import styles from './ui/dashboard/dashboard.module.css';
import Transactions from './ui/dashboard/transactions/transactions';
import { useEffect, useState } from 'react';
import { IUsers } from '@/app/types/users';
import { IInvoices } from '@/app/types/invoices';
import { formatCurrency } from '@/lib/helper';
import Chart from './ui/dashboard/chart/chart';

const Dashboard = () => {
    const [users, setUsers] = useState<IUsers[]>();
    const [invoices, setInvoices] = useState<IInvoices[]>([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getAllUsers();
            if (users) setUsers(users);
        };

        const fetchInvoices = async () => {
            const invoices = await getAllInvoices();
            if (invoices) setInvoices(invoices);
        };
        fetchUsers();
        fetchInvoices();
    }, []);

    let totalRevenue =
        invoices && invoices.length > 0
            ? invoices?.reduce((prev, invoice) => (prev += invoice.amount), 0)
            : 0;
    const cards = [
        {
            id: 1,
            title: 'Total Users',
            number: users?.length,
            change: 12
        },
        {
            id: 2,
            title: 'Revenue',
            number: formatCurrency(totalRevenue),
            change: 18
        }
    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {cards.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
                <Transactions invoices={invoices} />
                <Chart invoices={invoices} />
            </div>
        </div>
    );
};

export default Dashboard;
