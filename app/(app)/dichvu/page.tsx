import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
export default function page() {
    return (
        <div className="p-5 mt-5">
            <div className="flex gap-5">
                <div className=" w-1/2">
                    <div className="h-[350px] flex justify-center items-center flex-col text-center font-bold">
                        <h3 className="text-3xl text-[#ff6600] font-bold mb-5">
                            Dịch vụ Booking KOL
                        </h3>
                        <p className="">
                            Dịch vụ Booking KOLs chuyên nghiệp tại{' '}
                            <span className="text-[#ff6600] font-bold">
                                caKOL
                            </span>{' '}
                            , giúp doanh nghiệp tiếp cận nhanh nhất với khách
                            hàng, tăng nhận diện thương hiệu và doanh số hiệu
                            quả
                        </p>
                    </div>
                    <div className="rounded-md overflow-hidden object-cover">
                        <Image
                            alt=""
                            width="500"
                            height="500"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            src="/assets/Welcome-To-bookkol-vietnam.png"
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="rounded-md overflow-hidden object-cover">
                        <Image
                            src="/assets/dich-vu-booking-kol.png"
                            alt=""
                            width="500"
                            height="500"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-20 mx-[150px]">
                <div className=" text-center">
                    <h3 className="text-3xl font-bold text-[#ff6600]">
                        Giới thiệu caKOL
                    </h3>
                    <p className="my-5">
                        Là Agency hoạt động chuyên biệt trong mảng KOL
                        Marketing. Ngoài việc sở hữu data của 50.000+ KOLs thì
                        bookKOL đã có kinh nghiệm triển khai trên 1000+ dự án
                        lớn nhỏ, chính vì vậy chúng tôi tự tin đưa ra chiến lược
                        và đề xuất cho khách hàng những KOL phù hợp với mức chi
                        phí tối ưu nhất.
                    </p>
                    <Button className="bg-[#ff6600]">TƯ VẤN NGAY</Button>
                </div>
                <div className="flex mt-20 gap-5 text-center">
                    <div className="rounded-md overflow-hidden object-cover w-1/2">
                        <Image
                            alt=""
                            width="500"
                            height="500"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            src="/assets/loi-ich-khi-booking-kol.png"
                        />
                    </div>
                    <div className="w-1/2">
                        <div className=" border-b-2 border-gray">
                            <h3 className="text-3xl font-bold text-[#ff6600]">
                                Lợi ích của khi sử dụng dịch vụ booking KOLs
                            </h3>
                            <p className="my-5 text-xl">
                                Dịch vụ Booking KOL là hình thức hợp tác sử dụng
                                hình ảnh cá nhân của KOL. Với mục đích nhằm
                                quảng bá và đưa hình ảnh của sản phẩm thương
                                hiệu đến gần hơn với đối tượng khách hàng thông
                                qua KOL/Influencer
                            </p>
                        </div>
                        <div className="flex mt-20">
                            <div className="mt-5 w-1/2">
                                <div className="flex items-center gap-2 h-100 text-left">
                                    <div className="rounded-full bg-[#32a7e3] text-white p-2 text-sm font-bold">
                                        01
                                    </div>
                                    <h3 className="text-[#0053a8] font-bold text-xl">
                                        Tăng độ nhận diện thương hiệu
                                    </h3>
                                </div>
                                <p className="ml-10 text-left mt-5">
                                    Nhờ vào độ phủ sóng của KOLs sẽ là bước đà
                                    tốt nhất để đẩy thương hiệu tiếp cận gần hơn
                                    với khách hàng tiềm năng thông qua KOLs và
                                    Influencers.
                                </p>
                            </div>
                            <div className="mt-5 w-1/2">
                                <div className="flex items-center gap-2 h-100 text-left">
                                    <div className="rounded-full bg-[#c40000] text-white p-2 text-sm font-bold">
                                        02
                                    </div>
                                    <h3 className="text-[#c40000] font-bold text-xl">
                                        Tăng độ uy tín của doanh nghiệp
                                    </h3>
                                </div>
                                <p className="ml-10 text-left mt-5">
                                    KOLs, Influencers là những người có mức độ
                                    tin tưởng và lượng fan cao. Những đánh giá,
                                    nhận định của họ luôn được fan tin tưởng một
                                    cách tuyệt đối.
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="mt-5 w-1/2">
                                <div className="flex items-center gap-2 h-100 text-left">
                                    <div className="rounded-full bg-[#d6720a] text-white p-2 text-sm font-bold">
                                        03
                                    </div>
                                    <h3 className="text-[#d6720a] font-bold text-xl">
                                        Thúc đẩy doanh số
                                    </h3>
                                </div>
                                <p className="ml-10 text-left mt-5">
                                    Dựa vào uy tín của KOLs/Influencers sẽ giúp
                                    kích cầu sản phẩm và tăng hành vi mua hàng
                                    của khách hàng.
                                </p>
                            </div>
                            <div className="mt-5 w-1/2">
                                <div className="flex items-center gap-2 h-100 text-left">
                                    <div className="rounded-full bg-[#1aa000] text-white p-2 text-sm font-bold">
                                        04
                                    </div>
                                    <h3 className="text-[#1aa000] font-bold text-xl">
                                        Sử dụng hình ảnh cho truyền thông
                                    </h3>
                                </div>
                                <p className="ml-10 text-left mt-5">
                                    Việc sử dụng hình ảnh trên các kênh
                                    Facebook, Instagram hay Website sẽ tăng sức
                                    hút và khả năng tiếp cận khách hàng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
