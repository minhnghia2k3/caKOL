import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IUsers } from '../types/users';
import envConfig from '../config';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { logout } from '@/lib/utils';

const User = ({ user }: { user: IUsers }) => {
    const sidebarNavItems = [
        {
            title: 'Quản lý tài khoản',
            href: '/settings'
        },
        {
            title: 'Lịch hẹn đã lưu',
            href: '/settings/schedules'
        },
        {
            title: 'Biểu đồ thời gian',
            href: '/settings/timeline'
        },
        {
            title: 'Quản lý hóa đơn',
            href: '/settings/hoadon'
        }
    ];

    // Clear Authentication cookies
    const avatar = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/uploads/users/${user.avatar}`;
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>Me</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="text-[#d25a1b]">
                        {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {sidebarNavItems.map((item, index) => (
                        <DropdownMenuItem key={index} asChild>
                            <Link href={item.href}>{item.title}</Link>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                        Đăng xuất
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default User;
