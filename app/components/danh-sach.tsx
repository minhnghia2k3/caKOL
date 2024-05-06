'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ICategories } from '../types/categories';
import Image from 'next/image';
import { fetchCategories } from '@/lib/utils';

const DanhSach = () => {
    const envv = process.env.NEXT_PUBLIC_HOST;

    const [categories, setCategories] = useState<ICategories[]>([]);
    useEffect(() => {
        const getAllCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        getAllCategories();
    }, []);

    return (
        <div className="_container grid grid-cols-1 gap-4 bg-gradient-to-r from-orange-100 p-14 md:grid-cols-4">
            {categories.map((item, index) => (
                <Link
                    href={`/danh-sach/${item.slug}`}
                    key={index}
                    className="relative h-80 w-64 rounded-lg"
                >
                    <Image
                        src={`${envv}/uploads/categories/${item.image}`}
                        fill
                        alt="Category image"
                        className="rounded-lg object-cover"
                    />
                </Link>
            ))}
        </div>
    );
};

export default DanhSach;
