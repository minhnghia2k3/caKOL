'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';
import Image from 'next/image';
const Page = ({ params }: { params: { slug: string } }) => {
    const [a, seta] = useState([]);
    const [isArrangeTopToBottom, setIsArrangeTopToBottom] =
        useState<boolean>(true);

    const envv = process.env.NEXT_PUBLIC_HOST;
    useEffect(() => {
        fetch(`${envv}/kols?slug=${params.slug}`)
            .then((res) => res.json())
            .then((a) => {
                seta(a.data);
                console.log(a.data);
            });
    }, []);
    // console.log(a);

    return (
        <div className="_container flex flex-col items-center justify-center md:items-start px-8">
            <div className="md:px-16 my-8">
                <p className="text-sm text-black">
                    <Link href="/">Trang chủ</Link>
                    {' / '}
                    <label className="text-gray-500">{params.slug}</label>
                </p>
                <div className="_filter flex items-start">
                    <p>Hiển thị 1-10 của 70 kết quả</p>
                    {/* {isArrangeTopToBottom ? (
                        <ArrowDownWideNarrow
                            className="cursor-pointer text-gray-500 hover:opacity-80"
                            onClick={() => setIsArrangeTopToBottom(false)}
                        />
                    ) : (
                        <ArrowUpNarrowWide
                            className="cursor-pointer text-gray-500 hover:opacity-80"
                            onClick={() => setIsArrangeTopToBottom(true)}
                        />
                    )} */}
                </div>
            </div>
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
                                    <h1 className=" block mb-5 ">
                                        {item.name}
                                    </h1>
                                </Link>
                            </>
                        );
                    })
                ) : (
                    <h1>Không có dữ liệu, vui lòng thử lại sau...</h1>
                )}
            </div>
        </div>
    );
};

export default Page;
