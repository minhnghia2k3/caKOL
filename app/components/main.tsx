import React from "react"
import { fetchUsers } from "../lib/actions";

export default async function Main() {
    // Fetch users data
    const users = await fetchUsers();
    return (
        <div>
            <h1>Main</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
