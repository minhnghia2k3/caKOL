'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Tab() {
    const path = usePathname();

    return (
        <ul
            id="primary-menu-list"
            className="menu-wrapper flex h-full items-center justify-evenly lg:flex-wrap lg:space-x-1"
        >
            <li className="">
                <Link
                    href="/"
                    className={`menu-link main-menu-link ${path === '/' ? 'active' : ''}`}
                >
                    Trang Chủ
                </Link>
            </li>
            <li className="">
                <Link href="/about" className="menu-link main-menu-link">
                    Về bookKOL
                </Link>
            </li>
            <li className="">
                <Link href="/dichvu" className="menu-link main-menu-link">
                    Dịch Vụ
                </Link>
            </li>
            <li className="">
                <Link href="/danh-sach" className="menu-link main-menu-link">
                    Danh sách KOLs
                </Link>
            </li>
        </ul>
    );
}
