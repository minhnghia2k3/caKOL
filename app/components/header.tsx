"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  const path = usePathname();
  return (
    <div className="container ">
      <div className="flex items-center justify-between space-x-4 xl:space-x-8">
        <div
          className="flex items-center justify-between"
          style={{ width: "100%" }}
        >
          <div className="site-logo text-4xl">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <nav
            id="site-navigation"
            className="primary-navigation site-header-nav-main hidden h-full flex-grow xl:block"
          >
            <div className="primary-menu-container h-full w-full">
              <ul
                id="primary-menu-list"
                className="menu-wrapper flex h-full items-center justify-evenly lg:flex-wrap lg:space-x-1"
              >
                <li className="">
                  <Link
                    href="/"
                    className={`menu-link main-menu-link ${path === "/" ? "active" : ""}`}
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
                  <Link
                    href="/danhsachkol"
                    className="menu-link main-menu-link"
                  >
                    Danh sách KOLs
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/bao-gia-kol/"
                    className="menu-link main-menu-link"
                  >
                    Báo Giá KOL
                  </Link>
                </li>
                <li className="">
                  <Link href="/blog/" className="menu-link main-menu-link">
                    Blog
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/lien-he-bookkol"
                    className="menu-link main-menu-link"
                  >
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex flex-shrink-0 justify-end py-1.5 text-neutral-700 xl:py-3.5 dark:text-neutral-100">
            <div className="hidden xl:block">
              <div data-is-react-component="SearchDropdown" className="mr-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[28px] text-neutral-700  focus:outline-none sm:h-12 sm:w-12 sm:hover:bg-neutral-100 md:text-[28px] sm:dark:hover:bg-neutral-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 sm:h-7 sm:w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <button className="rounded-full bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
