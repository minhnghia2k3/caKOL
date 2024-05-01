'use client';

import { ColumnDef } from '@tanstack/react-table';

import { IOfficeHours } from '@/app/types/office-hours';
import { formatCurrency, formatDate } from '@/lib/helper';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface DataColumnProps {
    onDelete: (itemId: string) => Promise<void>;
}
export const columns = ({
    onDelete
}: DataColumnProps): ColumnDef<IOfficeHours>[] => [
    {
        accessorKey: 'kol.name',
        header: 'KOL'
    },
    {
        accessorKey: 'available',
        header: 'Status',
        cell: ({ row }) => {
            const available = row.getValue('available');
            return !available ? (
                <p className="text-orange-400">Đã book</p>
            ) : (
                <p className="text-green-400">Chưa book</p>
            );
        }
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('price'));
            const formatted = formatCurrency(amount);

            return <div className="font-medium">{formatted}</div>;
        }
    },
    {
        accessorKey: 'appointmentTime',
        header: 'Time'
    },
    {
        accessorKey: 'appointmentDate',
        header: 'Day',
        cell: ({ row }) => {
            const date = row.getValue('appointmentDate');
            const formatted = formatDate(date as Date);
            return <div className="font-medium">{formatted}</div>;
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const officeHours = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(officeHours._id)
                            }
                        >
                            Copy thông tin lịch hẹn
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => onDelete(officeHours._id)}
                        >
                            Xóa
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
];
