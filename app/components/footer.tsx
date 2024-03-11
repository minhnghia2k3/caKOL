import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div
            id="nc-footer-fixed-area"
            className="fixed inset-x-0 bottom-0 z-40 flex flex-col-reverse"
        >
            <div className="FooterQuickNav z-40 block w-full flex-1 border-t border-neutral-300 bg-white p-2 transition-transform duration-300 ease-in-out xl:hidden dark:border-neutral-700 dark:bg-neutral-800">
                <div className="mx-auto flex w-full max-w-screen-sm justify-around text-center text-2xl lg:max-w-screen-md ">
                    <Link
                        href="https://bookkol.com/"
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
                        href="https://bookkol.com/?s="
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
                        <span className="mt-1 text-[10px] leading-none">
                            Danh mục{' '}
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
        </div>
    );
}
