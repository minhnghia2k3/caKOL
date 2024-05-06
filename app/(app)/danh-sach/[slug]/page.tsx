import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import DanhSachKOLs from '@/app/components/danh-sach-kols';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `CaKOL | Danh sách KOLs | ${params.slug.toUpperCase()}`,
        description:
            'caKOL - Tổng hợp danh sách KOLs có sức ảnh hưởng trên các phương tiện truyền thông. Giúp các Doanh nghiệp, thương hiệu, nhãn hàng thực hiện các chiến dịch Marketing hiệu quả.'
    };
}

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="_container flex flex-col items-center justify-start md:items-start px-8 min-h-screen">
            <div className="md:px-16 my-8">
                <p className="text-sm text-black">
                    <Link href="/">Trang chủ</Link>
                    {' / '}
                    <Link href="/danh-sach">Danh sách</Link>
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
            <DanhSachKOLs params={params} />
        </div>
    );
};

export default Page;
