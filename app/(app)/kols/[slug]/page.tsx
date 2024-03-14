import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Component() {
    return (
        <div className="grid gap-6 items-start max-w-6xl px-4 mx-auto py-6">
            <div className="grid gap-6 md:gap-3 items-start order-1">
                <div className="flex md:hidden items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-2xl sm:text-3xl">
                            CottonSculpt Prism Tee: The Cozy Chromatic Blend
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-0.5">
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 text-sm leading-loose md:hidden">
                    <p>
                        Introducing the Acme Prism T-Shirt, a perfect blend of
                        style and comfort for the modern individual. This tee is
                        crafted with a meticulous composition of 60% combed
                        ringspun cotton and 40% polyester jersey, ensuring a
                        soft and breathable fabric that feels gentle against the
                        skin.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Facilis consequatur provident enim facere
                        reiciendis nemo ea delectus quia laboriosam sequi minima
                        cum, alias molestias mollitia, autem itaque ipsam sed
                        quas.
                    </p>
                </div>
                <div className="overflow-auto">
                    <div className="flex gap-4 [&_img]:shrink-0">
                        <Image
                            alt="Product Image"
                            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                            height={400}
                            src="/assets/left-banner.png"
                            width={400}
                        />
                    </div>
                </div>
            </div>
            <div className="grid gap-4 md:gap-8">
                <div className="hidden md:flex items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">
                            CottonSculpt Prism Tee: The Cozy Chromatic Blend
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-0.5">
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <div className="grid gap-4 text-sm leading-loose">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima hic excepturi commodi
                                omnis praesentium saepe id earum officiis
                                ratione molestiae quod dignissimos dicta
                                placeat, repellendus, ab quidem autem. Eligendi,
                                reprehenderit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Porro obcaecati quam minus
                                tenetur, consequuntur explicabo perspiciatis
                                dignissimos dicta necessitatibus ex dolorum
                                iusto molestiae qui tempore quia a, laborum amet
                                ad.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Rem ex perferendis, totam sed
                                adipisci, quaerat unde expedita dolores
                                veritatis saepe porro alias eos a officiis
                                doloremque enim beatae ea cum?
                            </p>
                        </div>
                    </div>
                </div>
                <form className="grid gap-4 md:gap-8">
                    <div className="text-4xl font-bold">$99</div>
                    <div className="grid gap-2">
                        <Label className="text-base" htmlFor="color">
                            Color
                        </Label>
                        <RadioGroup
                            className="flex items-center gap-2"
                            defaultValue="black"
                            id="color"
                        >
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="color-black"
                            >
                                <RadioGroupItem
                                    id="color-black"
                                    value="black"
                                />
                                Black
                            </Label>
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="color-white"
                            >
                                <RadioGroupItem
                                    id="color-white"
                                    value="white"
                                />
                                White
                            </Label>
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="color-blue"
                            >
                                <RadioGroupItem id="color-blue" value="blue" />
                                Blue
                            </Label>
                        </RadioGroup>
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-base" htmlFor="size">
                            Size
                        </Label>
                        <RadioGroup
                            className="flex items-center gap-2"
                            defaultValue="m"
                            id="size"
                        >
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="size-xs"
                            >
                                <RadioGroupItem id="size-xs" value="xs" />
                                XS
                            </Label>
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="size-s"
                            >
                                <RadioGroupItem id="size-s" value="s" />S
                                {'\n                          '}
                            </Label>
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="size-m"
                            >
                                <RadioGroupItem id="size-m" value="m" />M
                                {'\n                          '}
                            </Label>
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="size-l"
                            >
                                <RadioGroupItem id="size-l" value="l" />L
                                {'\n                          '}
                            </Label>
                            <Label
                                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                htmlFor="size-xl"
                            >
                                <RadioGroupItem id="size-xl" value="xl" />
                                XL
                            </Label>
                        </RadioGroup>
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-base" htmlFor="quantity">
                            Quantity
                        </Label>
                        <Select defaultValue="1">
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg">Add to cart</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function StarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
