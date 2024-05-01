import Image from 'next/image';
import styles from './transactions.module.css';
import { IInvoices, Status } from '@/app/types/invoices';
import { formatCurrency, formatDate } from '@/lib/helper';

const Transactions = ({ invoices }: { invoices: IInvoices[] }) => {
    const host = process.env.NEXT_PUBLIC_HOST;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {invoices.length > 0 &&
                        invoices.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className={styles.user}>
                                        {item.user.avatar && (
                                            <Image
                                                src={
                                                    `${host}/uploads/users/${item.user?.avatar}` ||
                                                    '/assets/noavatar.png'
                                                }
                                                alt=""
                                                width={40}
                                                height={40}
                                                className={styles.userImage}
                                            />
                                        )}
                                        {item.user.email}
                                    </div>
                                </td>
                                <td>
                                    <span
                                        className={`${styles.status} ${styles.done}`}
                                    >
                                        {Status[item.status]}
                                    </span>
                                </td>
                                <td>{formatDate(item.createdAt)}</td>
                                <td>{formatCurrency(item.amount)}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
