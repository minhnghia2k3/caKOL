import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from 'react-icons/md';
// import { auth, signOut } from "@/app/auth";

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
                title: 'Products',
                path: '/admin/products',
                icon: <MdShoppingBag />
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
    },
    {
        title: 'User',
        list: [
            {
                title: 'Settings',
                path: '/admin/settings',
                icon: <MdOutlineSettings />
            },
            {
                title: 'Help',
                path: '/admin/help',
                icon: <MdHelpCenter />
            }
        ]
    }
];

const Sidebar = async () => {
    // const { user } = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    // src={user.img || "/noavatar.png"}
                    src="/assets/mentor-an.png"
                    alt=""
                    width="50"
                    height="50"
                />
                <div className={styles.userDetail}>
                    {/* <span className={styles.username}>{user.username}</span> */}
                    <span className={styles.username}>Trọng An</span>
                    <span className={styles.userTitle}>Administrator</span>
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
            <form
            // action={async () => {
            //     'use server';
            //     await signOut();
            // }}
            >
                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Sidebar;
