'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../ui/dashboard/products/products.module.css';
import Search from '../ui/dashboard/search/search';
import Pagination from '../ui/dashboard/pagination/pagination';
import { deleteKol, fetchKOLs } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { IKOLs } from '@/app/types/kols';
import { formatDate } from '@/lib/helper';
import { ListData } from '@/app/types/list-data';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
// import { fetchProducts } from '@/app/admin/lib/data.js';
// import { deleteProduct } from '/app/lib/actions';

const ProductsPage = ({ searchParams }) => {
    const { toast } = useToast();
    const [kols, setKOLs] = useState<IKOLs[]>([]);
    const [info, setInfo] = useState<any>();
    const host = process.env.NEXT_PUBLIC_HOST;
    const q = searchParams?.q || '';
    const page = searchParams?.page || 1;

    useEffect(() => {
        const fetchAllKOLs = async () => {
            try {
                const kols = await fetchKOLs();
                setKOLs(kols.data);
                setInfo(kols.info);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllKOLs();
    }, []);
    const handleDeleteKOL = async (kolId: string) => {
        try {
            const kol = await deleteKol(kolId);
            if (kol) {
                toast({
                    title: 'Xóa KOL thành công',
                    variant: 'success'
                });
                const kols = await fetchKOLs();
                setKOLs(kols.data);
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Xóa KOL thất bại',
                variant: 'destructive'
            });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/admin/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Categories</td>
                        <td>Office Hours</td>
                        <td>Created At</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {kols.length > 0 &&
                        kols.map((kol) => (
                            <tr key={kol._id}>
                                <td>
                                    <div className={styles.product}>
                                        {kol.name}
                                    </div>
                                </td>
                                <td>{kol.location}</td>
                                <td className="text-sm">
                                    {kol.categories &&
                                        kol.categories.map((category) => (
                                            <p key={category.slug}>
                                                {category.name}
                                            </p>
                                        ))}
                                </td>
                                <td>
                                    {kol.office_hours &&
                                        kol.office_hours.map((oh) => {
                                            const next_appointment =
                                                kol.office_hours.find(
                                                    (oh) =>
                                                        oh.appointmentDate >=
                                                        new Date()
                                                );
                                            return (
                                                <p key={oh._id}>
                                                    {!next_appointment ? null : (
                                                        <p>
                                                            {
                                                                next_appointment?.appointmentTime
                                                            }
                                                            -
                                                            {formatDate(
                                                                next_appointment &&
                                                                    next_appointment?.appointmentDate
                                                            )}
                                                            `
                                                        </p>
                                                    )}
                                                </p>
                                            );
                                        })}
                                </td>
                                <td>{formatDate(kol.createdAt)}</td>
                                <td>
                                    <Button
                                        variant={'destructive'}
                                        onClick={() => handleDeleteKOL(kol._id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    {/* {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <div className={styles.product}>
                                    <Image
                                        src={product.img || '/noproduct.jpg'}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.productImage}
                                    />
                                    {product.title}
                                </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>${product.price}</td>
                            <td>
                                {product.createdAt?.toString().slice(4, 16)}
                            </td>
                            <td>{product.stock}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link
                                        href={`/dashboard/products/${product.id}`}
                                    >
                                        <button
                                            className={`${styles.button} ${styles.view}`}
                                        >
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteProduct}>
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={product.id}
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

export default ProductsPage;
