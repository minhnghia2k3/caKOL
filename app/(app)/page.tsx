import { Metadata } from 'next';
import Main from '../components/main';

export const metadata: Metadata = {
    title: 'CaKOL | Trang chủ',
    description: 'caKOL - Nền Tảng KOL Marketing Chuyên Nghiệp'
};

export default async function Home() {
    // await seed(); // Seed user data

    return (
        <>
            <Main />
        </>
    );
}
