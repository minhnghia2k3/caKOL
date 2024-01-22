import React from "react"
import { fetchUsers } from "../lib/actions"

export default async function Main() {
    // Fetch users data
    const users = await fetchUsers()
    return (
        <div className="image-main">
            <div className="left">
                <h1>Nền tảng LOL Marketing Chuyên Nghiệp</h1>
                <p>Với kinh nghiệm triển khai 1000+ dự án, book KOL chắc chắn sẽ mang đến cho quý khách hàng trải nghiệm dịch vụ tốt nhất</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <a href="">Button</a>
                </button>
            </div>
            <div className="right"></div>
        </div>
    )
}
