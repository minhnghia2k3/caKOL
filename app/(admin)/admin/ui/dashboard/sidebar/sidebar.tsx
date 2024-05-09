'use client';
import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAnalytics,
    MdPeople,
    MdLogout
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getUserInfo, logout } from '@/lib/utils';
import { IUsers, Roles } from '@/app/types/users';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Clock2 } from 'lucide-react';
const Sidebar = () => {
    const router = useRouter();
    const menuItems = [
        {
            title: 'Pages',
            list: [
                {
                    title: 'Dashboard',
                    path: '/admin',
                    icon: <MdDashboard />
                },
                {
                    title: 'Users',
                    path: '/admin/users',
                    icon: <MdSupervisedUserCircle />
                },
                {
                    title: 'KOLs',
                    path: '/admin/products',
                    icon: <MdShoppingBag />
                },
                {
                    title: 'Office hours',
                    path: '/admin/office-hours',
                    icon: <Clock2 />
                }
            ]
        },
        {
            title: 'Analytics',
            list: [
                {
                    title: 'Reports',
                    path: '/admin/reports',
                    icon: <MdAnalytics />
                },
                {
                    title: 'Teams',
                    path: '/admin/teams',
                    icon: <MdPeople />
                }
            ]
        }
    ];
    const [user, setUser] = useState<IUsers>();
    const host = process.env.NEXT_PUBLIC_HOST;
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await getUserInfo();
                if (!user || user.type !== 1) {
                    return router.push('/');
                }
                if (!user) return;
                setUser(user);
            } catch (error: any) {
                console.log('error: ', error);
            }
        };
        fetchCurrentUser();
    }, [router]);

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={`${host}/uploads/users/${user?.avatar}`}
                    alt=""
                    width="50"
                    height="50"
                />
                <div className={styles.userDetail}>
                    {/* <span className={styles.username}>{user.username}</span> */}
                    <span className={styles.username}>{user?.email}</span>
                    <span className={styles.userTitle}>
                        {user && Roles[user.type]}
                    </span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <Button
                variant={'outline'}
                className={styles.logout}
                onClick={logout}
            >
                <MdLogout />
                Logout
            </Button>
        </div>
    );
};

export default Sidebar;
