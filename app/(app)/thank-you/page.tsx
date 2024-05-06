/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZIewdTtVTGc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';

export default function Component() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 px-4 py-8 dark:bg-gray-950">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6">
                <div className="rounded-full bg-green-500 p-6 text-white">
                    <CheckIcon className="h-12 w-12" />
                </div>
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Payment Successful</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Thank you for your purchase. We appreciate your
                        business.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                    <Link
                        className="inline-flex h-10 flex-1 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="/"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="/settings/hoadon"
                    >
                        View Order
                    </Link>
                </div>
            </div>
        </div>
    );
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}
