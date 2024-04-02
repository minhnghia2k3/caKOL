'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';
import { IKOLs } from '../types/kols';

const DanhSachKOLs = ({ params }: { params: { slug: string } }) => {
    const [a, seta] = useState<IKOLs[]>([]);

    const [isArrangeTopToBottom, setIsArrangeTopToBottom] =
        useState<boolean>(true);

    const envv = process.env.NEXT_PUBLIC_HOST;
    useEffect(() => {
        fetch(`${envv}/kols?slug=${params.slug}`)
            .then((res) => res.json())
            .then((a) => {
                seta(a.data);
            });
    }, []);
    return (
        <div className="_container grid grid-cols-1 gap-4 md:grid-cols-4">
            {a.length > 0 ? (
                a.map((item, index) => {
                    return (
                        <>
                            <Link
                                href="/"
                                key={index}
                                className="relative h-80 w-64 rounded-lg text-center hover:text-red-500 hover:shadow-xl"
                            >
                                <Image
                                    src={`${envv}/uploads/kols/${item.images[0]}`}
                                    alt="Category image"
                                    fill
                                    className="rounded-lg object-cover p-6 hover:p-5"
                                />
                                <h1 className=" block mb-5 ">{item.name}</h1>
                            </Link>
                        </>
                    );
                })
            ) : (
                <h1>Không có dữ liệu, vui lòng thử lại sau...</h1>
            )}
        </div>
    );
};

export default DanhSachKOLs;
