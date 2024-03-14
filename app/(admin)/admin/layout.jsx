import Navbar from './ui/dashboard/navbar/navbar';
import Sidebar from './ui/dashboard/sidebar/sidebar';
import styles from './ui/dashboard/dashboard.module.css';
import { Inter } from 'next/font/google';
import './ui/globals.css';

const inter = Inter({ subsets: ['latin'] });
const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <Sidebar />
                    </div>
                    <div className={styles.content}>
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Layout;
