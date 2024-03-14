'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';
import Image from 'next/image';
const Page = ({ params }: { params: { slug: string } }) => {
    const [isArrangeTopToBottom, setIsArrangeTopToBottom] =
        useState<boolean>(true);
    return (
        <div className="_container flex flex-col items-center justify-center md:items-start px-8">
            <div className="md:px-16 my-8">
                <p className="text-sm text-gray-500">
                    <Link href="/">Trang chủ</Link>
                    {' / '}
                    {params.slug}
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

            <div className="_container grid grid-cols-1 gap-4 px-14 md:grid-cols-4">
                {
                    // Create a boilerplate of 10 Arrays for render
                    Array.from({ length: 10 }).map((_, index) => (
                        <Link
                            href="/"
                            key={index}
                            className="relative h-80 w-64 rounded-lg"
                        >
                            <Image
                                src="/danh-sach/booking-dj.png"
                                fill
                                alt="Category image"
                                className="rounded-lg object-cover"
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;
