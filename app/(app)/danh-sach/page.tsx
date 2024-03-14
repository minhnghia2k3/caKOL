import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="_banner grid min-h-96 w-screen grid-cols-5">
                <div className="col-span-1 flex items-end justify-start">
                    <Image
                        src="/assets/left-banner.png"
                        width={400}
                        height={400}
                        alt="Left banner"
                    />
                </div>
                <div className="col-span-3 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-xl md:text-2xl">DANH SÁCH KOLS</h1>
                    <p className="text-center text-sm md:text-base">
                        Tổng hợp danh sách KOLs có sức ảnh hưởng trên các phương
                        tiện truyền thông. Giúp các Doanh nghiệp, thương hiệu,
                        nhãn hàng thực hiện các chiến dịch Marketing hiệu quả.
                    </p>
                </div>
                <div className="col-span-1 flex items-end justify-end">
                    <Image
                        src="/assets/right_banner.png"
                        width={400}
                        height={400}
                        alt="Right banner"
                    />
                </div>
            </div>
            <div className="_container grid grid-cols-1 gap-4 bg-gradient-to-r from-orange-100 p-14 md:grid-cols-4">
                {
                    // Create a boilerplate of 10 Arrays for render
                    Array.from({ length: 10 }).map((_, index) => (
                        <Link
                            href="/danh-sach/dj"
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

export default page;
