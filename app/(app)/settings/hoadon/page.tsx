'use client';
import React, { useEffect, useState } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import envConfig from '@/app/config';
import { Status, IInvoices } from '@/app/types/invoices';
import clsx from 'clsx';
import { formatCurrency } from '@/lib/helper';

export default function HoaDon() {
    const [invoices, setInvoices] = useState<IInvoices[]>([]);
    let total = 0;
    const fetchInvoices = async () => {
        try {
            const response = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/payments`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                }
            );

            if (!response.ok) {
                setInvoices([]);
            }
            const data = await response.json();
            setInvoices(data);
        } catch (error) {
            console.error('Error fetching Invoices:', error);
        }
    };
    useEffect(() => {
        fetchInvoices();
    }, []);

    return (
        <div className="border-2 border-gray-200 rounded-lg p-5">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Hóa đơn</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Phương thức</TableHead>
                        <TableHead className="text-right">Tổng tiền</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.length > 0 &&
                        invoices.map((invoice) => {
                            total += invoice.amount;
                            return (
                                <TableRow key={invoice.orderId}>
                                    <TableCell className="font-medium">
                                        {invoice.orderId}
                                    </TableCell>
                                    <TableCell
                                        className={clsx('font-semibold', {
                                            'text-red-500':
                                                invoice.status === 0,
                                            'text-muted-foreground':
                                                invoice.status === 1,
                                            'text-green-500':
                                                invoice.status === 2
                                        })}
                                    >
                                        {Status[invoice.status]}
                                    </TableCell>
                                    <TableCell>
                                        {invoice.paymentMethod}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatCurrency(invoice.amount)}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
                <TableFooter>
                    <TableRow className="text-red-500 bg-red-100">
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">
                            {formatCurrency(total)}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
