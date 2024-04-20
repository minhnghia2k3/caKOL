'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Star from '@/app/components/star';
import { useEffect, useState } from 'react';
import { IKOLs, ListKOLs } from '@/app/types/kols';
import envConfig from '@/app/config';
import { Toggle } from '@/components/ui/toggle';
import { useToast } from '@/components/ui/use-toast';

const KOL = ({ params }: { params: { slug: string; cookie: any } }) => {
    const [data, setData] = useState<IKOLs>();
    const [currentImg, setCurrentImg] = useState(0);
    const [relevant, setRelevant] = useState<ListKOLs>();
    const [selectedTime, setSelectedTime] = useState('');

    const { toast } = useToast();

    useEffect(() => {
        try {
            fetchKOL();
            fetchRelativeKOLs();
        } catch (error) {
            console.log(error);
        }
    }, [params]);

    const fetchKOL = async () => {
        try {
            const response = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols/${params.slug}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching KOL information:', error);
        }
    };

    const fetchRelativeKOLs = async () => {
        try {
            const response = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols?limit=4&page=1&slug=ca-si`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const data = await response.json();
            setRelevant(data);
        } catch (error) {
            console.error('Error fetching relative kols:', error);
        }
    };

    const bookSchedule = async (payload: { office_hours: string }) => {
        return await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/carts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        });
    };
    const addOfficeHours = async (selectedTime: string) => {
        try {
            const body = {
                office_hours: selectedTime
            };
            const response = await bookSchedule(body);
            const data = await response.json();
            if (response.ok) {
                // Show success message
                toast({
                    variant: 'success',
                    title: 'Thêm lịch hẹn thành công',
                    description: (
                        <Link href="/settings/schedules">
                            Xem chi tiết tại đây
                        </Link>
                    )
                });
                // Manually refetch updated data
                fetchKOL();
            } else {
                // Handle error response
                toast({
                    variant: 'destructive',
                    title: data.statusCode || 'Error',
                    description: data.message || 'An error occurred'
                });
            }
        } catch (error) {
            console.error('Error adding office hours:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred while adding office hours'
            });
        }
    };

    if (!data) return;

    return (
        <div className="p-5 md:px-20 py-10">
            <div className="">
                <p className="text-sm text-black">
                    <Link href="/">Trang chủ</Link>
                    {' / '}
                    <Link href="/danh-sach">Danh sách</Link>
                    {' / '}
                    <label className="text-gray-500">{data.name}</label>
                </p>
            </div>
            <div className="flex flex-col md:flex-row mt-5">
                <div className="md:w-[50%] flex flex-row w-[100%] ">
                    <div className="md:w-[15%] flex flex-col gap-5 w-[20%]">
                        {data &&
                            data.images?.length > 0 &&
                            data.images.map((item, index) => (
                                <div
                                    onClick={() => setCurrentImg(index)}
                                    key={index}
                                    className="overflow-hidden w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-lg object-cover border-2 border-black"
                                >
                                    <Image
                                        src={`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/uploads/kols/${item}`}
                                        alt="Category image"
                                        width={100}
                                        height={100}
                                        className=""
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="overflow-hidden relative rounded-lg mx-5">
                        {data && data.images?.length > 0 && (
                            <Image
                                src={`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/uploads/kols/${data?.images[currentImg]}`}
                                alt="Category image"
                                width={700}
                                height={700}
                            />
                        )}
                    </div>
                </div>
                <div className="mt-5 sm:mt-0 w-[100%] md:w-[50%]">
                    <h1 className="text-2xl font-bold">{data.name}</h1>
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
                            <label className="font-normal ml-2">
                                {data.location}
                            </label>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Năm sinh:
                            <label className="font-normal  ml-2">
                                {data.yob}
                            </label>
                        </h3>

                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Tiktok:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                {data.name}
                            </a>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Instagram:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                {data.name}
                            </a>
                        </h3>
                        <h3 className="font-bold">
                            <label className="text-[#ff6600] mr-2">➤</label>
                            Youtube:
                            <a
                                href="#"
                                className="font-normal text-blue-500 cursor-pointer  ml-2"
                            >
                                {data.name} Offical
                            </a>
                        </h3>
                        <div className="my-2">
                            <p className="mb-2">Thời gian:</p>
                            <div className="flex gap-4">
                                {!data.office_hours ? (
                                    <p className="text-sm text-gray-300">
                                        Không có lịch...
                                    </p>
                                ) : (
                                    data.office_hours.map((oh) => (
                                        <Toggle
                                            key={oh._id}
                                            variant="outline"
                                            onPressedChange={() =>
                                                setSelectedTime(oh._id)
                                            }
                                            className={
                                                selectedTime === oh._id
                                                    ? 'bg-gray-200'
                                                    : ''
                                            }
                                            disabled={!oh.available}
                                        >
                                            {oh.appointmentTime}
                                        </Toggle>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button
                            className="bg-[#1d4ed8] w-[100%] rounded-xl"
                            onClick={() => addOfficeHours(selectedTime)}
                            disabled={!selectedTime}
                        >
                            Thêm vào lịch hẹn
                        </Button>
                    </div>
                    <div className="text-sm mt-10 pt-5 border-t border-[#ccc] text-gray-500">
                        <h3>
                            Danh mục:
                            {/* todo */}
                            {/* {data &&
                                data.categories?.length > 0 &&
                                data.categories.map((item, index) => (
                                    <b key={index}>{item.slug}</b>
                                ))} */}
                        </h3>
                        <h3>
                            Từ khoá{': '}
                            <b>
                                {data.name} {data.major}
                            </b>
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
                            <p className="text-sm text-gray-500">{data.bio}</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="border-t pt-5 border-[#ccc] ">
                            <h1 className="font-bold text-xl">
                                1 đánh giá cho {data.name}
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
                    {relevant &&
                        relevant.data.length > 0 &&
                        relevant.data.map((item, index) => (
                            <Link
                                href={item._id}
                                key={index}
                                className="relative w-[25%]"
                            >
                                <Image
                                    src={`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/uploads/kols/${item?.images[0]}`}
                                    alt="Category image"
                                    fill
                                    className="absolute rounded-xl object-cover"
                                />
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default KOL;
