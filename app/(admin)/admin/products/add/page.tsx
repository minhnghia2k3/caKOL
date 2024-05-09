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
import { createKOL, fetchCategories } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { IFormData } from '@/app/types/form-data';
import { ICategories } from '@/app/types/categories';
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';

export default function Component() {
    const { toast } = useToast();
    const [categories, setCategories] = useState<ICategories[]>([]);
    const router = useRouter();
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        images: null as FileList | null,
        location: '',
        major: '',
        bio: '',
        yob: '',
        categories: ''
    });

    useEffect(() => {
        const getAllCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        getAllCategories();
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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files
            }));
        }
    };

    const handleSelectChange = (categoryId: string) => {
        if (categoryId) {
            setFormData((prevState) => ({
                ...prevState,
                categories: categoryId
            }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Now you can submit formData to your API or perform other actions
        const kol = await createKOL(formData);
        if (kol) {
            toast({
                title: 'Thêm mới KOL thành công',
                variant: 'success'
            });
            router.back();
        } else {
            toast({
                title: 'Thêm mới KOL thất bại thử lại sau',
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
                <h1 className="text-2xl font-bold mb-6">Create New KOL</h1>
                <form className="grid gap-6" onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Enter KOL name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="images">
                            Images
                            <div className="grid gap-2 mt-4">
                                <Input
                                    id="images"
                                    name="images"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    multiple
                                    onChange={handleImageChange}
                                />
                            </div>
                        </Label>
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            placeholder="Enter KOL location"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="major">Major</Label>
                        <Input
                            id="major"
                            name="major"
                            value={formData.major}
                            placeholder="Enter KOL major"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            className="min-h-[100px]"
                            placeholder="Enter KOL bio"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid gap-2 mt-4">
                        <Label htmlFor="year">Year of Birth</Label>
                        <Input
                            id="yob"
                            name="yob"
                            value={formData.yob}
                            type="number"
                            placeholder="Enter year of birth"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="grid gap-2 mt-4">
                        <Label>Categories</Label>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select categories" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories &&
                                    categories.map((category) => (
                                        <SelectItem
                                            key={category._id}
                                            value={category._id}
                                        >
                                            {category.name}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Create KOL</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
