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
                <div className="left text-center px-10 ">
                    <h1 className="font-bold sm:text-4xl text-xl">Nền tảng LOL Marketing Chuyên Nghiệp</h1>
                    <p className="my-10 sm:text-xl">Với kinh nghiệm triển khai 1000+ dự án, book KOL chắc chắn sẽ mang đến cho quý khách hàng trải nghiệm dịch vụ tốt nhất</p>
                    <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        <a href="">Tư vấn ngay</a>
                    </button>
                </div>
                <div className="right sm:block hidden">
                    <Image src="/asstes/model-bookkol.png" alt="" width={370} height={370}></Image>
                </div>
            </div>
            <div className="mx-2 my-20 sm:mx-20 sm:my-10 ">
                <div className="about-booking flex gap-10 items-center jutify-center flex-col sm:flex-row">
                    <div className="sm:w-2/3">
                        <Image src={"/asstes/bookingkol.jpg"} alt="" width={600} height={600}></Image>
                    </div>
                    <div className="sm:w-2/3 ">
                        <h2 className={`${kaushan.className} font-[700] text-[#d25a1b] text-3xl`}>About Booking 👇</h2>
                        <p className="text-xl my-5 font-[500]">
                            Là nền tảng <label className="text-[#d25a1b] font-[600]"> KOL Marketing</label> hàng đầu hiện nay, đứng sau thành công của nhiều chiến dịch lớn nhỏ. Vậy tại sao bookKOL lại
                            được các thương hiệu tín nhiệm đến vậy?
                        </p>
                        <ol className="sm:text-xl">
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
            <div className="element-number sm:p-10 sm:pt-20 bg-black text-white">
                <div className={`${rajd.className} sm:text-3xl grid grid-rows-2 grid-flow-col sm:flex gap-2 justify-center md:justify-evenly items-center px-2`}>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">50,000+</h3>
                        <p className="sm:mt-10 text-[12px] text-[#e19a48]">KOLS</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">175000+</h3>
                        <p className="sm:mt-10 text-[12px] text-[#e19a48]">MEMBERSHIP</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">1532</h3>
                        <p className="sm:mt-10 text-[12px] text-[#e19a48]">PROJECT</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl md:text-[80px]">1168</h3>
                        <p className="sm:mt-10 text-[12px] text-[#e19a48]">HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <div className="text-center w-[80%]">
                    <h1 className="text-3xl text-[#e0752b] font-bold">PHƯƠNG PHÁP KOL MARKETING ĐỘC QUYỀN TẠI BOOKKOL</h1>
                    <p className="my-10 text-xl">
                        Trong 5 năm làm KOL Marketing và triển khai 1000+ dự án, chúng tôi đã chiêm nghiệm, tổng hợp, đúc kết được các phương pháp KOL Marketing tốt nhất, có thể áp dụng linh hoạt vào
                        từng yêu cầu của chiến dịch
                    </p>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <div className="text-center w-[80%]">
                    <h1 className="text-3xl text-[#e0752b] font-bold">HÌNH ẢNH TIÊU BIỂU</h1>
                    <p className="my-10 text-xl">
                        <label className="text-black font-bold">ca</label>
                        <label className="text-[#e0752b] font-bold">KOL</label> được rất nhiều khách hàng sự tin tưởng và giao trọng trách triển khai thành công nhiều chiến dịch lớn bởi sự uy tín, tận
                        tâm với đội ngũ tuyệt vời !!!
                    </p>
                </div>
            </div>
            <div className="mt-10 flex items-center justify-center p-5">
                <div className="text-center md:w-[80%] ">
                    <div className="md:flex items-center justify-between gap-20">
                        <div className="md:w-[50%]">
                            <h1 className="text-3xl text-[#e0752b] font-bold">CÂU HỎI THƯỜNG GẶP</h1>
                            <p className="my-10 text-xl">
                                <label className="text-[#e0752b] font-bold">KOL Marketing </label> là hình thức doanh nghiệp sử dụng <label className="text-[#e0752b] font-bold">KOL</label> trong kế
                                hoạch Marketing của mình, nhằm tận dụng sức ảnh hưởng của họ tới công chúng, qua đó hiện thực các mục tiêu đã đề ra. Để bạn có cái nhìn tổng quan hơn về{" "}
                                <label className="text-[#e0752b] font-bold">KOL Marketing </label>, hãy cùng
                                <label className="text-black font-bold"> ca</label>
                                <label className="text-[#e0752b] font-bold">KOL</label> tìm hiểu thêm về hình thức quảng cáo đầy tiềm năng này.
                            </p>
                        </div>
                        <div className="text-left md:w-[50%] text-xl">
                            <div className="mb-5 border-t-2 py-3">KOC là gì?</div>
                            <div className="mb-5 border-t-2 py-3">Booking KOL là gì?</div>
                            <div className="mb-5 border-t-2 py-3">KOL Marketing là gì?</div>
                            <div className="mb-5 border-t-2 py-3">Giá Booking KOL giá bao nhiêu</div>
                            <div className="mb-5 border-t-2 py-3">KOL Marketing có hiệu quả không</div>
                            <div className="mb-5 border-t-2 py-3">Nên tự Booking KOL hay qua Agency</div>
                            <div className="mb-5 border-t-2 py-3">Tiêu chí lựa chọn các Agency uy tín</div>
                        </div>
                    </div>
                </div>
            </div>
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
