'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Logo from './Logo';

export default function Footer() {
    var [show, setShow] = useState(false);

    function handleModal() {
        setShow(!show);
    }
    return (
        <div>
            <footer
                id="colophon"
                className="nc-Footer relative border-t border-neutral-200 dark:border-neutral-700  py-16 lg:py-24 "
            >
                <h2 className="text-2xl font-bold text-red-500 mb-5 mx-20">
                    Lưu ý: đây là sản phẩm phục vụ cho việc học, không có mục
                    đích thương mại, nếu có bất kì khiếu nại gì vui lòng liên hệ
                    gmail: troandev@gmail.com hoặc sdt: 0364080527
                </h2>
                <div className="container text-sm sm:flex space-y-8 sm:space-y-0">
                    <div className="flex sm:block lg:flex flex-1 sm:space-y-8 lg:space-y-0">
                        <div className="nc-Footer-item flex-1">
                            <div>
                                <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                    <div className="wp-block-group__inner-container">
                                        <h2 className="wp-block-heading">
                                            Chuyên mục
                                        </h2>

                                        <ul className="wp-block-categories-list wp-block-categories">
                                            {' '}
                                            <li className="cat-item cat-item-17">
                                                <a href="https://bookkol.com/about-kol/">
                                                    About KOL
                                                </a>
                                            </li>
                                            <li className="cat-item cat-item-21">
                                                <a href="https://bookkol.com/chien-dich/">
                                                    Chiến dịch
                                                </a>
                                            </li>
                                            <li className="cat-item cat-item-19">
                                                <a href="https://bookkol.com/kien-thuc/">
                                                    Kiến Thức
                                                </a>
                                            </li>
                                            <li className="cat-item cat-item-779">
                                                <a href="https://bookkol.com/about-kol/kol-noi-bat/">
                                                    KOL Nổi Bật
                                                </a>
                                            </li>
                                            <li className="cat-item cat-item-16">
                                                <a href="https://bookkol.com/nghe-kol/">
                                                    Nghề KOL
                                                </a>
                                            </li>
                                            <li className="cat-item cat-item-1">
                                                <a href="https://bookkol.com/thi-truong/">
                                                    Thị Trường
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    aria-hidden="true"
                                    className="wp-block-spacer"
                                ></div>
                            </div>{' '}
                        </div>

                        <div className="nc-Footer-item flex-1">
                            <div>
                                <h2 className="wp-block-heading">Dịch vụ</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>KOL Marketing</li>
                                    <li>Video Marketing</li>
                                    <li>
                                        <a href="https://tgo.vn/portfolio/bang-gia-dich-vu-thiet-ke-website/">
                                            Thiết kế website
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tgo.vn/portfolio/bao-gia-dich-vu-phong-marketing-thue-ngoai/">
                                            Marketing Thuê Ngoài
                                        </a>
                                    </li>
                                    <li>Social Media</li>
                                    <li>Content Marketing</li>
                                </ul>
                            </div>{' '}
                        </div>
                    </div>

                    <div className="lg:flex space-y-8 lg:space-y-0 flex-[1.5] ">
                        <div className="nc-Footer-item flex-1">
                            <div>
                                <h2 className="wp-block-heading">Chính sách</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://bookkol.com/gioi-thieu-bookkol/">
                                            Về bookKOL
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://bookkol.com/lien-he-bookkol/">
                                            Liên hệ
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.facebook.com/bookkolvietnam/">
                                            Fanpage bookKOL
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.facebook.com/groups/bookkolvietnam">
                                            Group bookKOL
                                        </a>
                                    </li>

                                    <li>Chính sách bảo mật</li>

                                    <li>Điều khoản sử dụng</li>
                                </ul>
                            </div>{' '}
                        </div>

                        <div className="nc-Footer-item flex-[2] flex-shrink-0">
                            <div>
                                <h2 className="wp-block-heading">
                                    bookKOL - Sáng lập bởi TGO Việt Nam
                                </h2>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        #1. Cung cấp giải pháp KOL Marketing
                                        tổng thể cho các nhãn hàng: Từ việc lên
                                        kế hoạch chi tiết, Tư vấn lựa chọn KOL
                                        phù hợp cho đến việc triển khai và báo
                                        cáo chính xác kết quả chiến dịch.
                                    </li>

                                    <li>
                                        #2. Thông tin đăng tải trên Website đều
                                        được dẫn nguồn hoặc sử dụng thông tin đã
                                        được công khai. Trong trường hợp cá nhân
                                        hoặc tổ chức liên quan muốn gỡ hoặc
                                        chỉnh sửa nội dung xin vui lòng liên hệ{' '}
                                        <a href="https://bookkol.com/lien-he-bookkol/">
                                            bookKOL
                                        </a>
                                    </li>

                                    <li>
                                        VP : 567A Lạc Long Quân, Xuân La, Tây
                                        Hồ, Hà Nội
                                    </li>

                                    <li>Tel : 0833 72 1111 (Zalo)</li>

                                    <li>Mail : bookkol@tgo.vn </li>
                                </ul>
                            </div>
                            <div></div>
                            <div>
                                <ul className="flex gap-5 mt-3">
                                    <li className="wp-social-link wp-social-link-facebook  wp-block-social-link">
                                        <a
                                            href="https://www.facebook.com/bookkolvietnam/"
                                            className="wp-block-social-link-anchor text-blue-500"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                                fill="currentColor"
                                            >
                                                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                                            </svg>
                                            <span className="wp-block-social-link-label screen-reader-text">
                                                Facebook
                                            </span>
                                        </a>
                                    </li>

                                    <li className="wp-social-link wp-social-link-instagram  wp-block-social-link">
                                        <a
                                            href="https://www.instagram.com/bookkolvietnam/"
                                            className="wp-block-social-link-anchor text-[#dc00d7]"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                                fill="currentColor"
                                            >
                                                <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                                            </svg>
                                            <span className="wp-block-social-link-label screen-reader-text">
                                                Instagram
                                            </span>
                                        </a>
                                    </li>

                                    <li className="wp-social-link wp-social-link-twitch  wp-block-social-link">
                                        <a
                                            href="https://#"
                                            className="wp-block-social-link-anchor"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path d="M16.499,8.089h-1.636v4.91h1.636V8.089z M12,8.089h-1.637v4.91H12V8.089z M4.228,3.178L3,6.451v13.092h4.499V22h2.456 l2.454-2.456h3.681L21,14.636V3.178H4.228z M19.364,13.816l-2.864,2.865H12l-2.453,2.453V16.68H5.863V4.814h13.501V13.816z"></path>
                                            </svg>
                                            <span className="wp-block-social-link-label screen-reader-text">
                                                Twitch
                                            </span>
                                        </a>
                                    </li>

                                    <li className="wp-social-link wp-social-link-twitter  wp-block-social-link">
                                        <a
                                            href="https://#"
                                            className="wp-block-social-link-anchor text-[#50abf1]"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                                fill="currentColor"
                                            >
                                                <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
                                            </svg>
                                            <span className="wp-block-social-link-label screen-reader-text">
                                                Twitter
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div></div>{' '}
                        </div>
                    </div>
                </div>
            </footer>

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
        </div>
    );
}
