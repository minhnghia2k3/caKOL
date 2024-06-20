import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Toaster } from '@/components/ui/toaster';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="favicon.ico"
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="Nền tảng KOL Marketing chuyên nghiệp và KOL Network 175.000+ thành viên sẽ đáp ứng được mọi yêu cầu của quý khách hàng | Hotline: 0833 72 1111"
                />
                <meta
                    name="robots"
                    content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link rel="canonical" href="https://cakol.id.vn/" />
                <meta property="og:locale" content="vi_VN" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="caKOL - Nền Tảng KOL Marketing Chuyên Nghiệp"
                />
                <meta
                    name="keywords"
                    content="bookkol, cakol, book chi dân, cakol book ca si, thuê ca sĩ, book ca sĩ, book người nổi tiếng, booking cakol, book diễn viên, book người tâm sự, book chơi game,cách book kol mới nhất"
                />
                <meta
                    property="og:description"
                    content="Nền tảng KOL Marketing chuyên nghiệp và KOL Network 175.000+ thành viên sẽ đáp ứng được mọi yêu cầu của quý khách hàng | Hotline: 0833 72 1111"
                />
                <meta property="og:url" content="https://cakol.id.vn/" />
                <meta
                    property="og:site_name"
                    content="Nền Tảng KOL Marketing Chuyên Nghiệp"
                />
                <meta
                    property="og:updated_time"
                    content="2024-01-04T09:13:39+07:00"
                />
                <meta property="fb:admins" content="100003676411654" />
                <meta
                    property="og:image"
                    content="https://bookkol.com/wp-content/uploads/2023/04/thumbnail-bookKOL.png"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://bookkol.com/wp-content/uploads/2023/04/thumbnail-bookKOL.png"
                />
                <meta property="og:image:width" content="940" />
                <meta property="og:image:height" content="788" />
                <meta property="og:image:alt" content="KOL Marketing" />
                <meta property="og:image:type" content="image/png" />
                <meta
                    property="article:published_time"
                    content="2023-03-26T01:02:46+07:00"
                />
                <meta
                    property="article:modified_time"
                    content="2024-01-04T09:13:39+07:00"
                />
                <meta
                    property="og:video"
                    content="https://www.youtube.com/embed/XHOmBV4js_E"
                />
                <meta property="video:duration" content="16" />
                <meta
                    property="ya:ovs:upload_date"
                    content="2019-01-23T01:41:21-08:00"
                />
                <meta property="ya:ovs:allow_embed" content="true" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="caKOL - Nền Tảng KOL Marketing Chuyên Nghiệp"
                />
                <meta
                    name="twitter:description"
                    content="Nền tảng KOL Marketing chuyên nghiệp và KOL Network 175.000+ thành viên sẽ đáp ứng được mọi yêu cầu của quý khách hàng | Hotline: 0833 72 1111"
                />
                <meta
                    name="twitter:site"
                    content="@https://twitter.com/TrngCao87198723"
                />
                <meta
                    name="twitter:creator"
                    content="@https://twitter.com/TrngCao87198723"
                />
                <meta
                    name="twitter:image"
                    content="https://bookkol.com/wp-content/uploads/2023/04/thumbnail-bookKOL.png"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="caKOL" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="11 minutes" />
            </head>
            <body className={inter.className}>
                <Header />
                {children}
                <Toaster />
                <Footer />
                <script
                    async
                    type="text/javascript"
                    src="https://livechat.pavietnam.vn/js/script.js"
                    id="live_chat_30s"
                    data-lang="vi"
                ></script>
                <GoogleAnalytics gaId="G-7H157975EK" />
            </body>
        </html>
    );
}
