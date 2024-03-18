'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function Footer() {
    var [show, setShow] = useState(false);

    function handleModal() {
        setShow(!show);
    }

    return (
        <div
            id="nc-footer-fixed-area"
            className="fixed inset-x-0 bottom-0 z-40 flex flex-col-reverse"
        >
            <div className="FooterQuickNav z-40 block w-full flex-1 border-t border-neutral-300 bg-white p-2 transition-transform duration-300 ease-in-out xl:hidden dark:border-neutral-700 dark:bg-neutral-800">
                <div className="mx-auto flex w-full max-w-screen-sm justify-around text-center text-2xl lg:max-w-screen-md ">
                    <Link
                        href="/"
                        className="FooterQuickNav__home flex flex-col items-center justify-between text-neutral-900 dark:text-neutral-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 sm:h-6 sm:w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            ></path>
                        </svg>
                        <span className="mt-1 text-[10px] leading-none">
                            Trang chủ{' '}
                        </span>
                    </Link>

                    <Link
                        href="#"
                        className="FooterQuickNav__search flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 sm:h-6 sm:w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            ></path>
                        </svg>
                        <span className="mt-1 text-[10px] leading-none">
                            Tìm kiếm{' '}
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="FooterQuickNav__menu btn-toogle-mobile-sidebar-menu flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90 "
                        data-drawer-target="drawer-navigation"
                        data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 sm:h-6 sm:w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            ></path>
                        </svg>
                        <span
                            onClick={handleModal}
                            className="mt-1 text-[10px] leading-none"
                        >
                            Danh mục
                        </span>
                    </button>
                </div>
            </div>
            <button
                className="ScrollTop absolute bottom-full right-0 z-30 mb-2.5 mr-2.5 h-10 w-10 flex-shrink-0 items-center justify-center rounded-full 
      bg-black/10 text-xl text-white 
      transition-opacity hover:bg-black/20 md:mb-5 md:mr-5 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/20"
                style={{ display: 'none' }}
            >
                <i className="las la-arrow-up"></i>
            </button>

            {show && (
                <div
                    id="site-navigation-mobile"
                    className="block fixed inset-0 z-max overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed left-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
                        <div className="z-10 relative">
                            <div className="overflow-y-auto w-full max-w-sm min-w-[300px] h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                                <div className="py-6 px-5">
                                    <div className="flex items-center">
                                        <div className="site-branding"></div>
                                    </div>
                                    <div className="ncWidget-mobile-sidebar-menu text-neutral-700 dark:text-neutral-300 text-sm ">
                                        <div>
                                            <div
                                                aria-hidden="true"
                                                className="wp-block-spacer"
                                            ></div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-[#ff7300]">
                                                caKOL
                                            </h3>
                                            <small>
                                                Kênh thông tin &amp; Dịch vụ
                                                booking KOLs chuyên nghiệp
                                            </small>
                                        </div>
                                        <div>
                                            <div
                                                aria-hidden="true"
                                                className="wp-block-spacer"
                                            ></div>
                                        </div>
                                    </div>

                                    <span
                                        id="btn-close-modal-mobile-sidebar-menu"
                                        className="absolute right-2 top-2 p-1"
                                    >
                                        <button
                                            onClick={handleModal}
                                            className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none"
                                        >
                                            <span className="sr-only"></span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </span>
                                </div>

                                <div className="flex flex-col gap-5 p-5">
                                    <div
                                        onClick={handleModal}
                                        className="hover:bg-[#ff7300] hover:text-white hover:font-bold p-2 rounded-sm cursor-pointer"
                                    >
                                        <Link href="/">Trang chủ</Link>
                                    </div>
                                    <div
                                        onClick={handleModal}
                                        className="hover:bg-[#ff7300] hover:text-white hover:font-bold p-2 rounded-sm cursor-pointer"
                                    >
                                        <Link href="/about">Về caKOL</Link>
                                    </div>
                                    <div
                                        onClick={handleModal}
                                        className="hover:bg-[#ff7300] hover:text-white hover:font-bold p-2 rounded-sm cursor-pointer"
                                    >
                                        <Link href="/dichvu">Dịch vụ</Link>
                                    </div>
                                    <div
                                        onClick={handleModal}
                                        className="hover:bg-[#ff7300] hover:text-white hover:font-bold p-2 rounded-sm cursor-pointer"
                                    >
                                        <Link href="/danh-sach">
                                            Danh sách KOL
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="fixed inset-0 bg-neutral-900 bg-opacity-50"
                            id="dialog-overlay-site-navigation-mobile"
                            aria-hidden="true"
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
}
