import Link from "next/link"
import React from "react"

export default function Header() {
    return (
        <div className="container flex ">
            <div className="relative flex justify-between space-x-4 xl:space-x-8">
                <div className="flex justify-start flex-1 space-x-4 sm:space-x-6 2xl:space-x-9 ">
                    <div className="site-logo text-4xl">
                        <Link href="/">
                            <h2 className="font-bold text-[#e19a48]">
                                ca<span className="text-primary">KOL</span>
                            </h2>
                        </Link>
                    </div>

                    <nav id="site-navigation" className="hidden xl:block h-full primary-navigation site-header-nav-main flex-grow" aria-label="Primary menu">
                        <div className="primary-menu-container w-full h-full">
                            <ul id="primary-menu-list" className="nc-Navigation flex lg:flex-wrap h-full lg:space-x-1 menu-wrapper justify-center items-center">
                                <li className="">
                                    <Link href="https://bookkol.com/" className="menu-link main-menu-link">
                                        Trang Chủ
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className="menu-link main-menu-link">
                                        Về bookKOL
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="https://bookkol.com/dich-vu-kol-marketing/" className="menu-link main-menu-link">
                                        Dịch Vụ
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="https://bookkol.com/danh-sach-kols/" className="menu-link main-menu-link">
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
                            <div data-is-react-component="SearchDropdown">
                                <button
                                    type="button"
                                    className="text-[28px] md:text-[28px] h-10 w-10 sm:w-12 sm:h-12 rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 sm:w-7 sm:h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hidden xl:block"></div>

                        <a
                            data-ncmaz-open-modal="ncmaz-modal-form-sign-in"
                            className="nc-Button ml-3 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm xl:text-base xl:font-medium py-2 px-4 xl:py-3 xl:px-6 ttnc-ButtonPrimary bg-primary-6000 hover:bg-primary-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                            href="https://bookkol.com/wp-login.php?redirect_to=https%3A%2F%2Fbookkol.com"
                        >
                            Sign up{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
