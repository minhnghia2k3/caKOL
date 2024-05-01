'use client';
import { IUsers, Roles } from '@/app/types/users';
import Search from '../ui/dashboard/search/search';
import styles from '../ui/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '@/lib/utils';
import { formatDate } from '@/lib/helper';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    const { toast } = useToast();

    // const { count, users } = await fetchUsers(q, page);
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getAllUsers();
            if (users) setUsers(users);
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId: string) => {
        try {
            const user = await deleteUser(userId);
            if (user) {
                toast({
                    title: 'Xóa người dùng thành công',
                    variant: 'success'
                });
                const users = await getAllUsers();
                setUsers(users);
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Xóa người dùng thất bại',
                variant: 'destructive'
            });
        }
    };
    const host = process.env.NEXT_PUBLIC_HOST;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/admin/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>
                                    <div className={styles.user}>
                                        <Image
                                            src={
                                                user.avatar
                                                    ? `${host}/uploads/users/${user.avatar}`
                                                    : '/assets/noavatar.png'
                                            }
                                            alt=""
                                            width={40}
                                            height={40}
                                            className={styles.userImage}
                                        />
                                        {user.email}
                                    </div>
                                </td>
                                <td>{formatDate(user.createdAt)}</td>
                                <td>{Roles[user.type]}</td>
                                <td>{user.active ? 'active' : 'passive'}</td>
                                <td>
                                    <Button
                                        variant={'destructive'}
                                        onClick={() =>
                                            handleDeleteUser(user._id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    {/* {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={user.img || '/noavatar.png'}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
                            <td>{user.isActive ? 'active' : 'passive'}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button
                                            className={`${styles.button} ${styles.view}`}
                                        >
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={user.id}
                                        />
                                        <button
                                            className={`${styles.button} ${styles.delete}`}
                                        >
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
            {/* <Pagination count={count} /> */}
        </div>
    );
};

export default UsersPage;
