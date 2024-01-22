"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function Header() {
    const path = usePathname()
    return (
        <div className="container ">
            <div className="flex items-center justify-between space-x-4 xl:space-x-8">
                <div className="flex justify-between items-center" style={{ width: "100%" }}>
                    <div className="site-logo text-4xl">
                        <Link href="/">
                            <h2 className="font-bold text-[#e19a48]">
                                ca<span className="text-primary">KOL</span>
                            </h2>
                        </Link>
                    </div>

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
                    <div className="py-1.5 xl:py-3.5 flex-shrink-0 flex justify-end text-neutral-700 dark:text-neutral-100">
                        <div className="hidden xl:block">
                            <div data-is-react-component="SearchDropdown" className="mr-2">
                                <button
                                    type="button"
                                    className="text-[28px] md:text-[28px] h-10 w-10 sm:w-12 sm:h-12 rounded-full text-neutral-700  sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-300 focus:outline-none flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 sm:w-7 sm:h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
