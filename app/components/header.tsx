"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
    const path = usePathname();
    return (
        <div className="px-5 sm:px-10 xl:px-20">
            <div className="flex items-center justify-between">
                <div className="flex justify-between items-center" style={{ width: "100%" }}>
                    <div className="site-logo text-4xl">
                        <Link href="/">
                            <Link href="/">
              <Logo />
            </Link>
                        </Link>
                    </div>
                    <div className="w-[100%] px-20 my-2 md:block hidden">
                        <form className="">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only ">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-black border border-black rounded-lg "
                                    placeholder="Search everything..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        <div className="mt-0 xl:mt-3">
                            <nav id="site-navigation" className="hidden xl:block h-full primary-navigation site-header-nav-main flex-grow">
                                <div className="primary-menu-container w-full h-full">
                                    <ul id="primary-menu-list" className="flex lg:flex-wrap h-full lg:space-x-1 menu-wrapper items-center justify-evenly">
                                        <li className="">
                                            <Link href="/" className={`menu-link main-menu-link ${path === "/" ? "active" : ""}`}>
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
                                            <Link href="/danhsachkol" className="menu-link main-menu-link">
                                                Danh sách KOLs
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/bao-gia-kol/" className="menu-link main-menu-link">
                                                Báo Giá KOL
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/blog/" className="menu-link main-menu-link">
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/lien-he-bookkol" className="menu-link main-menu-link">
                                                Liên Hệ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="py-1.5 xl:py-3.5 flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Sign up</button>
                    </div>
                </div>
            </div>
            <form className="md:hidden block my-3">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only ">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-black rounded-lg " placeholder="Search everything..." required />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
