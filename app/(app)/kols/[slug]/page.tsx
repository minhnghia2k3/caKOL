import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Star from '@/app/components/star';
import { Metadata } from 'next';

//TODO: replace kols
export const metadata: Metadata = {
    title: 'CaKOL | Homepage',
    description: 'caKOL - Nền Tảng KOL Marketing Chuyên Nghiệp'
};

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="p-5 md:px-20 py-10">
            <div className="">
                <p className="text-sm text-black">
                    <Link href="/">Trang chủ</Link>
                    {' / '}
                    <label className="text-gray-500">{params.slug}</label>
                </p>
            </div>
            <div className="flex flex-col md:flex-row mt-5">
                <div className="md:w-[50%] flex flex-row w-[100%] ">
                    <div className="md:w-[15%] flex flex-col gap-5 w-[20%]">
                        <div className="overflow-hidden w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-lg object-cover border-2 border-black">
                            <Image
                                src="/assets/loi-ich-khi-booking-kol.png"
                                alt="Category image"
                                width={100}
                                height={100}
                                className=""
                            />
                        </div>
                        <div className="overflow-hidden w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-lg object-cover opacity-50">
                            <Image
                                src="/assets/loi-ich-khi-booking-kol.png"
                                alt="Category image"
                                width={100}
                                height={100}
                                className=""
                            />
                        </div>{' '}
                        <div className="overflow-hidden w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-lg object-cover opacity-50">
                            <Image
                                src="/assets/loi-ich-khi-booking-kol.png"
                                alt="Category image"
                                width={100}
                                height={100}
                                className=""
                            />
                        </div>{' '}
                        <div className="overflow-hidden w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-lg object-cover opacity-50">
                            <Image
                                src="/assets/loi-ich-khi-booking-kol.png"
                                alt="Category image"
                                width={100}
                                height={100}
                                className=""
                            />
                        </div>
                    </div>
                    <div className="overflow-hidden md:h-[100%] w-[100%] relative rounded-lg mx-5">
                        <Image
                            src="/assets/loi-ich-khi-booking-kol.png"
                            alt="Category image"
                            fill
                            className="absolute object-cover"
                        />
                    </div>
                </div>
                <div className="mt-5 sm:mt-0 w-[100%] md:w-[50%]">
                    <h1 className="text-2xl font-bold">Ca Sĩ Miu Lê</h1>
                    <div className="star flex gap-1 mt-2">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <p className="text-sm text-gray-500">
                            (1 đánh giá của khách hàng)
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-10 text-gray-700">
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Nơi sống/ làm việc:
                            <label className="font-normal ml-2">HCM</label>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Năm sinh:
                            <label className="font-normal  ml-2">1991</label>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Facebook:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                Miu Lê
                            </a>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Tiktok:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                Miu Lê
                            </a>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Instagram:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                miule5791
                            </a>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Youtube:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                Miu Lê Official
                            </a>
                        </h3>
                    </div>
                    <div className="mt-5">
                        <Button className="bg-[#1d4ed8] w-[100%] rounded-xl">
                            Nhận báo giá
                        </Button>
                    </div>
                    <div className="text-sm mt-10 pt-5 border-t border-[#ccc] text-gray-500">
                        <h3>
                            Danh mục:{' '}
                            <b>
                                Ca sĩ, Nghệ Sĩ - Diễn viên, TikToker, Youtuber
                            </b>
                        </h3>
                        <h3>
                            Từ khoá <b>Ca Sĩ Miu Lê, Miu Lê</b>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="mt-20 pt-5 w-[70%]">
                <Tabs defaultValue="account" className=" bg-white ">
                    <TabsList className="bg-white  ">
                        <TabsTrigger
                            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full bg-[#eee] text-gray-500 mr-3"
                            value="account"
                        >
                            Mô tả
                        </TabsTrigger>
                        <TabsTrigger
                            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full bg-[#eee] text-gray-500 mr-3"
                            value="password"
                        >
                            Đánh giá
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className="border-t pt-5 border-[#ccc] ">
                            <h1 className="font-bold text-xl">Mô tả</h1>
                            <p className="text-sm text-gray-500">
                                Miu Lê là một ca sĩ trẻ nổi tiếng của Việt Nam,
                                sở hữu giọng hát đầy cảm xúc và phong cách biểu
                                diễn sôi động, cá tính. Với nhiều ca khúc hit
                                như “Người Yêu Cũ”, “Giấc Mơ Trưa”, “Em Nhớ
                                Anh”, “Cho Tôi Lang Thang” và “Chạm Đáy Nỗi
                                Đau”, Miu Lê đã khẳng định được vị trí của mình
                                trong làng nhạc Việt Nam. Ngoài sự nghiệp âm
                                nhạc, Miu Lê còn là một diễn viên trẻ triển vọng
                                và cũng là một nghệ sĩ đa tài với những vai diễn
                                đa dạng trên sân khấu, truyền hình và điện ảnh.
                                Với tài năng và nhan sắc nổi bật, cô đã từng
                                đoạt giải Á hậu Thế giới Việt Nam và được đánh
                                giá là một trong những nữ nghệ sĩ tiềm năng của
                                thế hệ trẻ. Nếu bạn là một fan của Miu Lê hoặc
                                đang quan tâm đến sự nghiệp và sản phẩm âm nhạc
                                của cô, hãy truy cập vào trang web chính thức
                                của Miu Lê để cập nhật thông tin mới nhất về cô
                                và những sản phẩm âm nhạc sắp tới. Đừng quên đón
                                xem các chương trình âm nhạc hay các bộ phim,
                                chương trình truyền hình mà Miu Lê tham gia để
                                trải nghiệm những tác phẩm đẳng cấp của cô. Miu
                                Lê sẽ là một lựa chọn tuyệt vời cho những ai yêu
                                thích nhạc pop và đang tìm kiếm những giây phút
                                giải trí thú vị. Mới đây, nữ diễn viên này cho
                                biết, cô đã nhận lời tham gia bộ phim “Nắng 2”.
                                Trước đó, cô đóng vai chính trong bộ phim “Cô
                                gái đến từ hôm qua”.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="border-t pt-5 border-[#ccc] ">
                            <h1 className="font-bold text-xl">
                                1 đánh giá cho ca sĩ Miu Lê
                            </h1>
                            <div className="flex items-center mt-10 bg-[#ddd] p-3">
                                <div className="w-[50px] h-[50px] relative bg-[#ccc] rounded-full overflow-hidden border">
                                    <Image
                                        fill
                                        src="/assets/noavatar.png"
                                        alt=""
                                        className="absolute shadow-xl "
                                    />
                                </div>
                                <div className="ml-3 flex flex-col gap-2">
                                    <div className="flex gap-1">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                    <h1 className="text-black">
                                        Đình mạnh - 21/02/2024
                                    </h1>
                                    <p>xinh quá chị ơi</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="my-20 border-t border-[#ccc] pt-10">
                <h1 className="text-2xl font-bold">KOL tương tự</h1>
                <div className="flex h-[300px] w-[100%] gap-8 mt-5">
                    <div className="object-cover relative w-[25%]">
                        <Image
                            src="/assets/loi-ich-khi-booking-kol.png"
                            alt="Category image"
                            layout="fill"
                            className=" rounded-xl "
                        />
                        <div className="flex gap-1 absolute end-[20px]">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                    <div className="relative w-[25%]">
                        <Image
                            src="/assets/loi-ich-khi-booking-kol.png"
                            alt="Category image"
                            fill
                            className="absolute rounded-xl"
                        />
                    </div>
                    <div className="relative w-[25%]">
                        <Image
                            src="/assets/loi-ich-khi-booking-kol.png"
                            alt="Category image"
                            fill
                            className="absolute rounded-xl"
                        />
                    </div>
                    <div className="relative w-[25%]">
                        <Image
                            src="/assets/loi-ich-khi-booking-kol.png"
                            alt="Category image"
                            fill
                            className="absolute rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
