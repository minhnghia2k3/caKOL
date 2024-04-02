import React from 'react';
import Image from 'next/image';
import { Kaushan_Script, Rajdhani } from 'next/font/google';
import Link from 'next/link';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });
const rajd = Rajdhani({ weight: '600', subsets: ['latin'] });
export default async function Main() {
    // Fetch users data
    return (
        <div className="">
            <div className="image-main flex items-center justify-center overflow-hidden">
                <div className="left px-10 text-center ">
                    <h1 className="text-xl font-bold sm:text-4xl">
                        Nền tảng KOL Marketing Chuyên Nghiệp
                    </h1>
                    <p className="my-10 sm:text-xl">
                        Với kinh nghiệm triển khai 1000+ dự án, ca KOL chắc chắn
                        sẽ mang đến cho quý khách hàng trải nghiệm dịch vụ tốt
                        nhất
                    </p>
                    <button className="rounded-full bg-red-400 px-4 py-2 font-bold text-white hover:bg-red-700">
                        <Link href="">Tư vấn ngay</Link>
                    </button>
                </div>
                <div className="right hidden sm:block">
                    <Image
                        src="/assets/model-bookkol.png"
                        alt=""
                        width={370}
                        height={370}
                    ></Image>
                </div>
            </div>
            <div className="mx-2 my-20 sm:mx-20 sm:my-10 ">
                <div className="about-booking jutify-center flex flex-col items-center gap-10 sm:flex-row">
                    <div className="sm:w-2/3">
                        <Image
                            src={'/assets/bookingkol.jpg'}
                            alt=""
                            width={600}
                            height={600}
                        ></Image>
                    </div>
                    <div className="sm:w-2/3 ">
                        <h2
                            className={`${kaushan.className} text-3xl font-[700] text-[#d25a1b]`}
                        >
                            About Booking 👇
                        </h2>
                        <p className="my-5 text-xl font-[500]">
                            Là nền tảng{' '}
                            <label className="font-[600] text-[#d25a1b]">
                                {' '}
                                KOL Marketing
                            </label>{' '}
                            hàng đầu hiện nay, đứng sau thành công của nhiều
                            chiến dịch lớn nhỏ. Vậy tại sao bookKOL lại được các
                            thương hiệu tín nhiệm đến vậy?
                        </p>
                        <ol className="sm:text-xl">
                            <li className="mb-5">
                                1. Có 50.000+ KOL trong Network
                            </li>
                            <li className="mb-5">
                                2. Sở hữu cộng đồng 175.000+ thành viên
                            </li>
                            <li className="mb-5">
                                3. Là Agency booking KOL uy tín lâu năm
                            </li>
                            <li className="mb-5">
                                4. Giá booking KOL tốt nhất
                            </li>
                            <li className="mb-5">
                                5. Có kinh nghiệm triển khai những dự án lớn
                            </li>
                            <li className="mb-5">
                                6. Có quy trình triển khai chuyên nghiệp
                            </li>
                            <li className="mb-5">
                                7. Có 9 phương pháp KOL Marketing riêng biệt
                            </li>
                        </ol>
                        <button className="bg-orange-400 px-4 py-3 font-bold text-white hover:bg-orange-300">
                            Hotline: 0999.999.999
                        </button>
                    </div>
                </div>
            </div>
            <div className="element-number bg-black text-white sm:p-10 sm:pt-20">
                <div
                    className={`${rajd.className} grid grid-flow-col grid-rows-2 items-center justify-center gap-2 px-2 sm:flex sm:text-3xl md:justify-evenly`}
                >
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">50,000+</h3>
                        <p className="text-[12px] text-[#e19a48] sm:mt-10">
                            KOLS
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">175000+</h3>
                        <p className="text-[12px] text-[#e19a48] sm:mt-10">
                            MEMBERSHIP
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">1532</h3>
                        <p className="text-[12px] text-[#e19a48] sm:mt-10">
                            PROJECT
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">1168</h3>
                        <p className="text-[12px] text-[#e19a48] sm:mt-10">
                            HAPPY CLIENTS
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <div className="w-[80%] text-center">
                    <h1 className="text-3xl font-bold text-[#e0752b]">
                        PHƯƠNG PHÁP KOL MARKETING ĐỘC QUYỀN TẠI BOOKKOL
                    </h1>
                    <p className="my-10 text-xl">
                        Trong 5 năm làm KOL Marketing và triển khai 1000+ dự án,
                        chúng tôi đã chiêm nghiệm, tổng hợp, đúc kết được các
                        phương pháp KOL Marketing tốt nhất, có thể áp dụng linh
                        hoạt vào từng yêu cầu của chiến dịch
                    </p>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <div className="w-[80%] text-center">
                    <h1 className="text-3xl font-bold text-[#e0752b]">
                        HÌNH ẢNH TIÊU BIỂU
                    </h1>
                    <p className="my-10 text-xl">
                        <label className="font-bold text-black">ca</label>
                        <label className="font-bold text-[#e0752b]">
                            KOL
                        </label>{' '}
                        được rất nhiều khách hàng sự tin tưởng và giao trọng
                        trách triển khai thành công nhiều chiến dịch lớn bởi sự
                        uy tín, tận tâm với đội ngũ tuyệt vời !!!
                    </p>
                </div>
            </div>
            <div className="mt-10 flex items-center justify-center p-5">
                <div className="text-center md:w-[80%] ">
                    <div className="items-center justify-between gap-20 md:flex">
                        <div className="md:w-[50%]">
                            <h1 className="text-3xl font-bold text-[#e0752b]">
                                CÂU HỎI THƯỜNG GẶP
                            </h1>
                            <p className="my-10 text-xl">
                                <label className="font-bold text-[#e0752b]">
                                    KOL Marketing{' '}
                                </label>{' '}
                                là hình thức doanh nghiệp sử dụng{' '}
                                <label className="font-bold text-[#e0752b]">
                                    KOL
                                </label>{' '}
                                trong kế hoạch Marketing của mình, nhằm tận dụng
                                sức ảnh hưởng của họ tới công chúng, qua đó hiện
                                thực các mục tiêu đã đề ra. Để bạn có cái nhìn
                                tổng quan hơn về{' '}
                                <label className="font-bold text-[#e0752b]">
                                    KOL Marketing{' '}
                                </label>
                                , hãy cùng
                                <label className="font-bold text-black">
                                    {' '}
                                    ca
                                </label>
                                <label className="font-bold text-[#e0752b]">
                                    KOL
                                </label>{' '}
                                tìm hiểu thêm về hình thức quảng cáo đầy tiềm
                                năng này.
                            </p>
                        </div>
                        <div className="text-left text-xl md:w-[50%]">
                            <div className="mb-5 border-t-2 py-3">
                                KOC là gì?
                            </div>
                            <div className="mb-5 border-t-2 py-3">
                                Booking KOL là gì?
                            </div>
                            <div className="mb-5 border-t-2 py-3">
                                KOL Marketing là gì?
                            </div>
                            <div className="mb-5 border-t-2 py-3">
                                Giá Booking KOL giá bao nhiêu
                            </div>
                            <div className="mb-5 border-t-2 py-3">
                                KOL Marketing có hiệu quả không
                            </div>
                            <div className="mb-5 border-t-2 py-3">
                                Nên tự Booking KOL hay qua Agency
                            </div>
                            <div className="mb-5 border-t-2 py-3">
                                Tiêu chí lựa chọn các Agency uy tín
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
