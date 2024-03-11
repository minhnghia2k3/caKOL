import React from "react";
import Image from "next/image";
import { fetchUsers } from "../lib/actions";
import { Kaushan_Script, Rajdhani } from "next/font/google";

const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"] });
const rajd = Rajdhani({ weight: "600", subsets: ["latin"] });
export default async function Main() {
    // Fetch users data
    const users = await fetchUsers();
    return (
        <div className="">
            <div className="image-main overflow-hidden flex items-center justify-center">
                <div className="left text-center ">
                    <h1 className="font-bold text-4xl">Nền tảng LOL Marketing Chuyên Nghiệp</h1>
                    <p className="my-10 text-xl">
                        Với kinh nghiệm triển khai 1000+ dự án, book KOL chắc chắn sẽ <br /> mang đến cho quý khách hàng trải nghiệm dịch vụ tốt nhất
                    </p>
                    <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        <a href="">Tư vấn ngay</a>
                    </button>
                </div>
                <div className="right">
                    <Image src="/asstes/model-bookkol.png" alt="" width={370} height={370}></Image>
                </div>
            </div>
            <div className="container mt-10 ">
                <div className="about-booking flex gap-10 items-center jutify-center">
                    <div className="w-2/3">
                        <Image src={"/asstes/bookingkol.jpg"} alt="" width={600} height={600}></Image>
                    </div>
                    <div className="w-2/3 ">
                        <h2 className={`${kaushan.className} font-[700] text-[#d25a1b] text-3xl`}>About Booking 👇</h2>
                        <p className="text-xl my-5 font-[500]">
                            Là nền tảng <label className="text-[#d25a1b] font-[600]"> KOL Marketing</label> hàng đầu hiện nay, đứng sau thành công của nhiều chiến dịch lớn nhỏ. Vậy tại sao bookKOL lại
                            được các thương hiệu tín nhiệm đến vậy?
                        </p>
                        <ol className="text-xl">
                            <li className="mb-5">1. Có 50.000+ KOL trong Network</li>
                            <li className="mb-5">2. Sở hữu cộng đồng 175.000+ thành viên</li>
                            <li className="mb-5">3. Là Agency booking KOL uy tín lâu năm</li>
                            <li className="mb-5">4. Giá booking KOL tốt nhất</li>
                            <li className="mb-5">5. Có kinh nghiệm triển khai những dự án lớn</li>
                            <li className="mb-5">6. Có quy trình triển khai chuyên nghiệp</li>
                            <li className="mb-5">7. Có 9 phương pháp KOL Marketing riêng biệt</li>
                        </ol>
                        <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-3 px-4">Hotline: 0999.999.999</button>
                    </div>
                </div>
            </div>
            <div className="element-number w-100 p-10  bg-black text-white ">
                <div className={`${rajd.className} text-3xl flex gap-5 justify-between`}>
                    <div className="">
                        <h3 className="text-[50px]">50,000+</h3>
                        <p>KOLS</p>
                    </div>
                    <div className="">
                        <h3 className="text-[50px]">175000+</h3>
                        <p>KOLS</p>
                    </div>
                    <div className="">
                        <h3 className="text-[50px]">1532</h3>
                        <p>KOLS</p>
                    </div>
                    <div className="">
                        <h3 className="text-[50px]">1168</h3>
                        <p>KOLS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
