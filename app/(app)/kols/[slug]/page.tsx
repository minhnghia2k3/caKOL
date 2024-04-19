import KOL from '@/app/components/kols';
import { cookies } from 'next/headers';
import React from 'react';

const page = ({ params }: { params: { slug: string } }) => {
    const cookieStore = cookies();
    const auth = cookieStore.get('Authentication');
    return <KOL params={{ slug: params.slug, cookie: auth?.value }} />;
};

export default page;
