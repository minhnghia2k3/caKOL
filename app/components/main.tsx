import React from "react";
import Image from "next/image";
import { fetchUsers } from "../lib/actions";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"] });
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
            <div className="container m-40">
                <div className="about-booking flex">
                    <div className="w-2/3">
                        <Image src={"/asstes/bookingkol.jpg"} alt="" width={600} height={600}></Image>
                    </div>
                    <div className="w-2/3">
                        <h2 className={`${kaushan.className} font-[700] text-[#d25a1b] text-3xl`}>About Booking 👇</h2>
                        <p>Là nền tảng KOL Marketing hàng đầu hiện nay, đứng sau thành công của nhiều chiến dịch lớn nhỏ. Vậy tại sao bookKOL lại được các thương hiệu tín nhiệm đến vậy?</p>
                        <ul>
                            <li>Có 50.000+ KOL trong Network</li>
                            <li>Sở hữu cộng đồng 175.000+ thành viên</li>
                            <li>Là Agency booking KOL uy tín lâu năm</li>
                            <li>Giá booking KOL tốt nhất</li>
                            <li>Có kinh nghiệm triển khai những dự án lớn</li>
                            <li>Có quy trình triển khai chuyên nghiệp</li>
                            <li>Có 9 phương pháp KOL Marketing riêng biệt</li>
                        </ul>
                        <button className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-3 px-4">Hotline: 0999.999.999</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
