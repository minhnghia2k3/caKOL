import mongoose from 'mongoose';
import { IPayment } from '../definitions';

const PaymentSchema = new mongoose.Schema<IPayment>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' }
}, { timestamps: true })

const PaymentModel = mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema)

export default PaymentModel;
