"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  const path = usePathname();
  return (
    <div className="px-5 sm:px-10 xl:px-20">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-between"
          style={{ width: "100%" }}
        >
          <div className="site-logo text-4xl">
            <Link href="/">
                <Logo />
            </Link>
          </div>
          <div className="my-2 hidden w-[100%] px-20 md:block">
            <form className="">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-black "
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-lg border border-black p-4 ps-10 text-sm text-black "
                  placeholder="Search everything..."
                  required
                />
                <button
                  type="submit"
                  className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-0 xl:mt-3">
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
            </div>
          </div>
          <div className="flex flex-shrink-0 justify-end py-1.5 text-neutral-700 xl:py-3.5 dark:text-neutral-100">
            <Link
              href="/login"
              className="rounded-lg bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <form className="my-3 block md:hidden">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-black "
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-black p-4 ps-10 text-sm text-black "
            placeholder="Search everything..."
            required
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
