'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FormEvent, useEffect, useState } from 'react';
import { createKOL, createOh, fetchCategories, fetchKOLs } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { ICategories } from '@/app/types/categories';
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';
import { IKOLs } from '@/app/types/kols';
import { formatDateInput } from '@/lib/helper';

export interface OhFormData {
    kol: string;
    appointmentDate: string;
    appointmentTime: string;
    price: number;
}

export default function Component() {
    const { toast } = useToast();
    const [kols, setKOLs] = useState<IKOLs[]>([]);
    const router = useRouter();
    const [formData, setFormData] = useState<OhFormData>({
        kol: '',
        appointmentDate: formatDateInput(new Date()),
        appointmentTime: '',
        price: 0
    });
    console.log(formData);

    useEffect(() => {
        const getAllKOLs = async () => {
            const data = await fetchKOLs({ limit: 99 });
            setKOLs(data.data);
        };
        getAllKOLs();
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (kolId: string) => {
        if (kolId) {
            setFormData((prevState) => ({
                ...prevState,
                kol: kolId
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const oh = await createOh(formData);
        if (oh) {
            toast({
                title: 'Thêm mới Office Hours thành công',
                variant: 'success'
            });
            router.back();
        } else {
            toast({
                title: 'Thêm mới Office Hours thất bại thử lại sau',
                variant: 'destructive'
            });
        }
    };

    return (
        <>
            <div
                key="1"
                className="relative max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg dark:bg-gray-950"
            >
                <MoveLeft
                    size={20}
                    className="absolute top-2 left-2 cursor-pointer"
                    onClick={() => router.back()}
                />
                <h1 className="text-2xl font-bold mb-6">
                    Thêm mới Office Hour
                </h1>
                <form className="grid gap-6" onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid gap-2 mt-4">
                        <Label>KOL</Label>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select KOLs" />
                            </SelectTrigger>
                            <SelectContent>
                                {kols &&
                                    kols.map((kol) => (
                                        <SelectItem
                                            key={kol._id}
                                            value={kol._id}
                                        >
                                            {kol.name}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="appointmentDate">
                            Ngày
                            <div className="grid gap-2 mt-4">
                                <Input
                                    id="appointmentDate"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    placeholder="Chọn ngày có sẵn"
                                    type="date"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Label>
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="appointmentTime">
                            Thời gian
                            <div className="grid gap-2 mt-4">
                                <Input
                                    id="appointmentTime"
                                    name="appointmentTime"
                                    value={formData.appointmentTime}
                                    placeholder="Nhập khoảng thời gian. 10:00 - 12:00 AM"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Label>
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="name">Price</Label>
                        <Input
                            id="price"
                            name="price"
                            value={formData.price}
                            placeholder="Tổng tiền book trong khoảng thời gian"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit">Create Office Hours</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
