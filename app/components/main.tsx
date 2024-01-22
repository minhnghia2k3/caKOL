import React from "react"
import { fetchUsers } from "../lib/actions"

export default async function Main() {
    // Fetch users data
    const users = await fetchUsers()
    return (
        <div className="container">
            <h1>Hello</h1>
        </div>
    )
}
