'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { IUsers } from '../types/users';
import { useEffect, useState } from 'react';
import envConfig from '../config';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const profileFormSchema = z.object({
    email: z.string().optional()
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
    const [user, setUser] = useState<IUsers>();

    const getUserInfo = async () => {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/users`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: 'onChange'
    });

    function onSubmit(data: ProfileFormValues) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            )
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {user && (
                    <Avatar className="w-20 h-20">
                        <AvatarImage
                            src={`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/uploads/users/${user.avatar}`}
                        />
                        <AvatarFallback>Me</AvatarFallback>
                    </Avatar>
                )}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@gmail.com"
                                    {...field}
                                    value={user && user.email}
                                    disabled
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name. It can be your
                                real name or a pseudonym. You can only change
                                this once every 30 days.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
