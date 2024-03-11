import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div id="nc-footer-fixed-area" className="fixed bottom-0 inset-x-0 flex flex-col-reverse z-40">
            <div className="FooterQuickNav z-40 flex-1 w-full block xl:hidden p-2 bg-white dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 transition-transform duration-300 ease-in-out">
                <div className="w-full max-w-screen-sm lg:max-w-screen-md flex justify-around mx-auto text-2xl text-center ">
                    <Link href="https://bookkol.com/" className="FooterQuickNav__home flex flex-col items-center justify-between text-neutral-900 dark:text-neutral-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            ></path>
                        </svg>
                        <span className="text-[10px] leading-none mt-1">Trang chủ </span>
                    </Link>

                    <Link href="https://bookkol.com/?s=" className="FooterQuickNav__search flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>
                        <span className="text-[10px] leading-none mt-1">Tìm kiếm </span>
                    </Link>

                    <button type="button" className="FooterQuickNav__menu btn-toogle-mobile-sidebar-menu flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                        <span className="text-[10px] leading-none mt-1">Danh mục </span>
                    </button>
                </div>
            </div>
            <button
                className="ScrollTop absolute bottom-full right-0 z-30 flex-shrink-0 mb-2.5 mr-2.5 md:mb-5 md:mr-5 w-10 h-10 bg-black/10 
      hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 
      items-center justify-center rounded-full text-xl transition-opacity text-white dark:text-neutral-300"
                style={{ display: "none" }}
            >
                <i className="las la-arrow-up"></i>
            </button>
        </div>
    );
}
