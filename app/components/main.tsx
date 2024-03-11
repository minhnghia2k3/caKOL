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
      <div className="image-main flex items-center justify-center overflow-hidden">
        <div className="left text-center ">
          <h1 className="text-4xl font-bold">
            Nền tảng LOL Marketing Chuyên Nghiệp
          </h1>
          <p className="my-10 text-xl">
            Với kinh nghiệm triển khai 1000+ dự án, book KOL chắc chắn sẽ <br />{" "}
            mang đến cho quý khách hàng trải nghiệm dịch vụ tốt nhất
          </p>
          <button className="rounded-full bg-red-400 px-4 py-2 font-bold text-white hover:bg-red-700">
            <a href="">Tư vấn ngay</a>
          </button>
        </div>
        <div className="right">
          <Image
            src="/assets/model-bookkol.png"
            alt=""
            width={370}
            height={370}
          ></Image>
        </div>
      </div>
      <div className="container mt-10 ">
        <div className="about-booking jutify-center flex items-center gap-10">
          <div className="w-2/3">
            <Image
              src={"/assets/bookingkol.jpg"}
              alt=""
              width={600}
              height={600}
            ></Image>
          </div>
          <div className="w-2/3 ">
            <h2
              className={`${kaushan.className} text-3xl font-[700] text-[#d25a1b]`}
            >
              About Booking 👇
            </h2>
            <p className="my-5 text-xl font-[500]">
              Là nền tảng{" "}
              <label className="font-[600] text-[#d25a1b]">
                {" "}
                KOL Marketing
              </label>{" "}
              hàng đầu hiện nay, đứng sau thành công của nhiều chiến dịch lớn
              nhỏ. Vậy tại sao bookKOL lại được các thương hiệu tín nhiệm đến
              vậy?
            </p>
            <ol className="text-xl">
              <li className="mb-5">1. Có 50.000+ KOL trong Network</li>
              <li className="mb-5">2. Sở hữu cộng đồng 175.000+ thành viên</li>
              <li className="mb-5">3. Là Agency booking KOL uy tín lâu năm</li>
              <li className="mb-5">4. Giá booking KOL tốt nhất</li>
              <li className="mb-5">
                5. Có kinh nghiệm triển khai những dự án lớn
              </li>
              <li className="mb-5">6. Có quy trình triển khai chuyên nghiệp</li>
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
      <div className="element-number w-100 bg-black  p-10 text-white ">
        <div
          className={`${rajd.className} flex justify-between gap-5 text-3xl`}
        >
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
