'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Tab from './tab';
import User from './user-dropdown';
import { IUsers } from '../types/users';
import SearchKOL from './search-kols';
import { getUserInfo } from '@/lib/utils';
export default function Header() {
    const [user, setUser] = useState<IUsers>();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getUserInfo();
                if (!user) return;
                setUser(user);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCurrentUser();
    }, []);

    return (
        <div className="px-5 sm:px-10 xl:px-20">
            <div className="flex items-center justify-between">
                <div
                    className="flex items-center justify-between"
                    style={{ width: '100%' }}
                >
                    <div className="site-logo _Dsds text-4xl">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="my-2 hidden w-[100%] px-20 md:block items-center justify-center">
                        <SearchKOL />

                        <div className="mt-0 xl:mt-3">
                            <nav
                                id="site-navigation"
                                className="primary-navigation site-header-nav-main hidden h-full flex-grow xl:block"
                            >
                                <div className="primary-menu-container h-full w-full">
                                    <Tab />
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end py-1.5 text-neutral-700 xl:py-3.5 dark:text-neutral-100">
                        {user ? (
                            <User user={user} />
                        ) : (
                            <Link
                                href="/login"
                                className="rounded-lg bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
                            >
                                Đăng nhập
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
