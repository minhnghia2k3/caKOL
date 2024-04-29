import KOL from '@/app/components/kols';
import React from 'react';

const page = ({ params }: { params: { slug: string } }) => {
    return <KOL params={{ slug: params.slug }} />;
};

export default page;
