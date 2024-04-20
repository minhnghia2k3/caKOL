'use client';
import { Separator } from '@/components/ui/separator';
import { ScheduleDataTable } from './data-table';
import { columns } from './columns';
import envConfig from '@/app/config';
import { useEffect, useMemo, useState } from 'react';
import { IOfficeHours } from '@/app/types/office-hours';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

export default function SettingsAccountPage() {
    const [officeHours, setOfficeHours] = useState<IOfficeHours[]>();
    const { toast } = useToast();

    async function handleDeleteItem(itemId: string) {
        const payload = {
            office_hours: itemId
        };
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/carts`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                credentials: 'include'
            }
        );
        if (response.status === 200) {
            const data = await response.json();
            if (data) {
                toast({
                    title: 'Xóa lịch hẹn thành công',
                    variant: 'success'
                });
                // Revalidate data
                await getOfficeHours();
            }
        } else {
            toast({
                title: 'Xóa lịch hẹn thất bại',
                variant: 'destructive'
            });
        }
    }

    async function getOfficeHours() {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/carts`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        const data = await response.json();
        if (data) setOfficeHours(data.office_hours);
    }

    useEffect(() => {
        getOfficeHours();
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Quản lý lịch hẹn</h3>
                <p className="text-sm text-muted-foreground">
                    Show all schedules that you have booked.
                </p>
            </div>
            <Separator />
            <ScheduleDataTable
                columns={columns({ onDelete: handleDeleteItem })}
                data={officeHours || []}
            />
            <Button variant={'outline'}>Thanh toán</Button>
        </div>
    );
}
