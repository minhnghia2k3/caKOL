'use client';

import { Button } from '@/components/ui/button';
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface Info {
    unit: number;
    currentPage: number;
    totalPage: number;
}
const Pagination = ({ info }: { info: Info }) => {
    console.log('info: ', info);
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    const page = Number(searchParams.get('page')) || 1;
    const limit = searchParams.get('limit') || 10;

    const hasPrev = info.currentPage > 1;
    const hasNext = info.currentPage < info.totalPage;

    const handleChangePage = (type: string) => {
        type === 'prev'
            ? params.set('page', String(page - 1))
            : params.set('page', String(page + 1));
        replace(`${pathname}?${params}`);
    };

    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => handleChangePage('prev')}
                variant={'default'}
            >
                Previous
            </Button>
            <Button
                className={styles.button}
                disabled={!hasNext}
                onClick={() => handleChangePage('next')}
                variant={'default'}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
