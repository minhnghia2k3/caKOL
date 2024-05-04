import DanhSach from '@/app/components/danh-sach';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
    title: 'CaKOL | Danh sách KOLs',
    description:
        'caKOL - Tổng hợp danh sách KOLs có sức ảnh hưởng trên các phương tiện truyền thông. Giúp các Doanh nghiệp, thương hiệu, nhãn hàng thực hiện các chiến dịch Marketing hiệu quả.'
};
const page = async () => {
    return (
        <div className=" overflow-hidden">
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

            <DanhSach />
        </div>
    );
};

export default page;
