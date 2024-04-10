'use client';

import Logo from '@/app/components/Logo';
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
import { useRouter } from 'next/navigation';

export default function Login() {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    async function onSubmit(values: LoginBodyType) {
        try {
            const data = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values),
                    credentials: 'include'
                }
            );
            const result = await data.json();
            console.log(result.error);
            console.log(result.statusCode);
            if (result.statusCode == 400) {
                toast({
                    variant: 'destructive',
                    title: 'Sai tài khoản hoặc mật khẩu',
                    description: 'Vui lòng sử dụng tài khoản mật khẩu khác'
                });
            } else {
                router.push('/');
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
                        Đăng nhập vào tài khoản
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                        noValidate
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập email của bạn (VD: example@gmail.com)"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Mật khẩu
                                </label>
                                <div className="text-sm">
                                    <Link
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
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

                        <div>
                            <Button type="submit">Đăng nhập</Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Bạn chưa có tài khoản?{' '}
                        <Link
                            href="sign-up"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Đăng ký tài khoản ngay
                        </Link>
                    </p>
                </div>
            </div>
        </Form>
    );
}
