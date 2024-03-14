import Logo from '@/app/components/Logo';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Saira_Condensed } from 'next/font/google';

const saira = Saira_Condensed({ weight: '700', subsets: ['latin'] });

export default function About() {
    return (
        <div className="about p-5 sm:p-10 md:p-20">
            <div className="text-center mt-5">
                <h2 className={`${saira.className} text-[#cf9236] text-4xl `}>
                    GIỚI THIỆU CAKKOL
                </h2>
            </div>
            <div className="my-20 text-center">
                <h2 className="text-2xl font-bold mb-2">WHO ARE WE?</h2>
                <p>
                    <span className="text-[#ff6600] font-bold">caKOL</span> được
                    thành lập vào ngày 12/3/2024. Là nền tảng trực thuộc{' '}
                    <b> Hệ Sinh Thái Giải Pháp Marketing TGO Holding</b>
                </p>
                <p>
                    Nhiệm vụ của{' '}
                    <span className="text-[#ff6600] font-bold">caKOL</span> là
                    kết nối giữa khách hàng và người nổi tiếng có sức ảnh hưởng
                    trên các phương tiện truyền thông. Giúp các Doanh nghiệp,
                    thương hiệu, nhãn hàng thực hiện các chiến dịch{' '}
                    <span className="text-[#ff6600] font-bold">
                        KOL Marketing
                    </span>{' '}
                    hiệu quả. Với kinh nghiệm triển khai 1000+ dự án{' '}
                    <span className="text-[#ff6600] font-bold">caKOL</span>,{' '}
                    <span className="text-[#ff6600] font-bold">
                        KOL Marketing
                    </span>{' '}
                    chắc chắn sẽ mang đến cho quý khách hàng trải nghiệm dịch vụ
                    tốt nhất
                </p>
                <button>0888 32 9999</button>
            </div>
            <div className="text-4xl font-bold text-center">
                <h2 className="">We have</h2>
                <h2 className="text-[#f5b451] ml-[250px] py-10 text-[100px]">
                    5+
                </h2>
                <h2 className="ml-[300px]">Years of experience</h2>
            </div>
            <div className="">
                <h2
                    className={`${saira.className} text-[#cf9236] text-4xl mt-20 text-center`}
                >
                    NHÂN SỰ TIÊU BIỂU
                </h2>
                <div className="border border-black rounded-lg p-10 my-5">
                    <h2 className="text-2xl font-bold">WE LOVE BOOKKOL ❤️</h2>
                    <p>
                        Nhân sự là nhân tố quan trọng nhất.{' '}
                        <span className="text-black font-bold">ca</span>
                        <span className="text-[#ff6652] font-bold">
                            KOL
                        </span>{' '}
                        may mắn vì luôn có sự đồng hành và cống hiến của những
                        con người Tận tâm – Chuyên nghiệp – Năng động
                    </p>
                </div>
                <div className="flex gap-5 items-center justify-center">
                    <div className="w-[250px] text-white">
                        <div className="item relative text-center">
                            <Image
                                src="/assets/mentor-an.png"
                                width={250}
                                height={500}
                                alt="đôi mắt long lanh của một mentor bị tư bản bóc lột"
                            />
                            <h1 className="absolute uppercase top-10 text-center left-[32%] shadow-lg ">
                                Trọng An
                            </h1>
                            <p className="absolute top-20 left-[20%] shadow-lg">
                                Frontend Developer
                            </p>
                            <Link
                                href="https://www.facebook.com/trongandev/"
                                className="absolute top-40 left-[10%] bg-[#0866ff] rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
                            >
                                F
                            </Link>
                            <Link
                                href="https://www.instagram.com/troandev/"
                                className="absolute top-[190px]  left-[45%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
                            >
                                Ins
                            </Link>
                            <Link
                                href="https://github.com/angutboiz"
                                className="absolute top-40 right-[10%] bg-black rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
                            >
                                Git
                            </Link>
                        </div>
                    </div>
                    <div className="w-[250px] text-white">
                        <div className="item relative text-center">
                            <Image
                                src="/assets/mentor-nghia.png"
                                width={250}
                                height={500}
                                alt="đôi mắt long lanh của một mentor bị tư bản bóc lột"
                            />
                            <h1 className="absolute uppercase top-10 text-center left-[32%] shadow-lg">
                                Minh Nghĩa
                            </h1>
                            <p className="absolute top-20 left-[20%] shadow-lg">
                                Backend Developer
                            </p>
                            <Link
                                href="https://www.facebook.com/minhnghia.le.777"
                                className="absolute top-40 left-[10%] bg-[#0866ff] rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
                            >
                                F
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/minhnghia2k3"
                                className="absolute top-[190px]  left-[45%] bg-[#126bc4] rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
                            >
                                In
                            </Link>
                            <Link
                                href="https://github.com/minhnghia2k3"
                                className="absolute top-40 right-[10%] bg-black rounded-full overflow-hidden w-10 h-10 flex justify-center items-center"
                            >
                                Git
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h2
                        className={`${saira.className} text-[#cf9236] text-4xl mt-20 `}
                    >
                        PHƯƠNG PHÁP KOL MARKETING ĐỘC QUYỀN TẠI BOOKKOL
                    </h2>
                    <p className="">
                        Qua 5 năm làm KOL Marketing và triển khai 1000+ dự án,
                        chúng tôi đã chiêm nghiệm, tổng hợp, đúc kết được các
                        phương pháp KOL Marketing tốt nhất, có thể áp dụng linh
                        hoạt vào từng yêu cầu của chiến dịch
                    </p>
                </div>
            </div>
        </div>
    );
}
