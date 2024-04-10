'use client';

import Logo from '@/app/components/Logo';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    RegisterBody,
    RegisterBodyType
} from '@/app/schemaValidation/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import envConfig from '@/app/config';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { LoginBodyType, LoginBody } from '@/app/schemaValidation/auth.schema';
import { useToast } from '@/components/ui/use-toast';
import { number, string, z } from 'zod';
import { useRouter } from 'next/navigation';

const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z
    .object({
        email: z.string().email(),
        pass: z
            .string()
            .min(8, { message: 'Must have at least 8 character' })
            .regex(passwordValidation, {
                message: 'Your password must included Symbols, Uppercase.'
            }),
        rePass: z.string().min(8).max(100)
    })
    .superRefine(({ pass, rePass }, ctx) => {
        if (rePass !== pass) {
            ctx.addIssue({
                code: 'custom',
                message: 'Mật khẩu không khớp',
                path: ['rePass']
            });
        }
    });

export const metadata: Metadata = {
    title: 'CaKOL | Đăng ký',
    description: 'caKOL - Nền Tảng KOL Marketing Chuyên Nghiệp'
};
export default function SignUp() {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            pass: '',
            rePass: ''
        }
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('values: ', values);
        /**sêrver
         *  { email: string,
         *      password: string}
         */
        try {
            const data = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...values,
                        password: values.pass
                    })
                }
            );
            const result = await data.json();
            console.log(result.error);
            console.log(result.statusCode);
            if (result.statusCode == 409) {
                toast({
                    variant: 'destructive',
                    title: 'Email này đã được đăng kí',
                    description: 'Vui lòng sử dụng email khác'
                });
            } else {
                router.push('/login');
            }
            // TODO: xu ly loi~ [400,409]
            // TODO: Có data thì redirect to /login
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Form {...form}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href="/">
                        <Logo className="text-center text-2xl" />
                    </Link>
                    <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Đăng ký tài khoản
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div>
                            <div className="mb-3">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập email"
                                                    {...field}
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-3">
                                <FormField
                                    control={form.control}
                                    name="pass"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập password"
                                                    {...field}
                                                    type="password"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="mb-3">
                                <FormField
                                    control={form.control}
                                    name="rePass"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Nhập lại password
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập lại password"
                                                    {...field}
                                                    type="password"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div>
                            <Button type="submit">Đăng ký</Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Bạn đã có tài khoản?{' '}
                        <Link
                            href="login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Đăng nhập ngay
                        </Link>
                    </p>
                </div>
            </div>
        </Form>
    );
}
