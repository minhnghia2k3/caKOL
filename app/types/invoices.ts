export enum Status {
    'Cancel' = 0,
    'Pending' = 1,
    'Paid' = 2
}
export interface IInvoices {
    _id: string;
    user: string;
    orderId: string;
    orderInfo: string;
    paymentMethod: string;
    status: Status;
    amount: number;
    office_hours: string[];
    createdAt: Date;
    updatedAt: Date;
}
