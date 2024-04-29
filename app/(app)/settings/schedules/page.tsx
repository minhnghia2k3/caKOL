'use client';
import { Separator } from '@/components/ui/separator';
import { ScheduleDataTable } from './data-table';
import { columns } from './columns';
import envConfig from '@/app/config';
import { useEffect, useState } from 'react';
import { IOfficeHours } from '@/app/types/office-hours';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
    AlertDialogTrigger,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialog
} from '@/components/ui/alert-dialog';
import { formatCurrency } from '@/lib/helper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function SettingsAccountPage() {
    const [officeHours, setOfficeHours] = useState<IOfficeHours[]>();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

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

    async function makePayment() {
        try {
            setLoading(true);

            const response = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/payments`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                }
            );
            if (response.ok) {
                const data = await response.json();
                router.push(data.payUrl);
                await getOfficeHours();
                setOpen(false);
            } else {
                toast({
                    title: 'Thanh toán thất bại, thử lại sau',
                    variant: 'destructive'
                });
            }
        } catch (error) {
            console.error('Error making payment:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getOfficeHours();
    }, []);
    let total = 0;
    officeHours?.map((oh) => (total += Number(oh.price)));
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Lịch hẹn đã lưu</h3>
                <p className="text-sm text-muted-foreground">
                    Quản lý các lịch hẹn mà bạn đã lưu.
                </p>
            </div>
            <Separator />
            <ScheduleDataTable
                columns={columns({ onDelete: handleDeleteItem })}
                data={officeHours || []}
            />
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Thanh toán</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="sm:max-w-md">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Xác nhận thanh toán</AlertDialogTitle>
                        <AlertDialogDescription>
                            Please review the payment details before confirming.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 items-center gap-4">
                            <div className="font-medium">Tổng tiền:</div>
                            <div className="text-right font-bold">
                                {formatCurrency(total)}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                            <div className="font-medium">
                                Phương thức thanh toán:
                            </div>
                            <div className="flex items-center justify-end">
                                <Image
                                    alt="Momo payment method"
                                    src="/assets/momo_mservice_logo.jpg"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button
                            onClick={makePayment}
                            disabled={loading || total === 0}
                        >
                            Thanh toán
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
