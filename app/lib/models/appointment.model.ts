import mongoose from 'mongoose';
import { IAppointment } from '../definitions';
const AppointmentSchema = new mongoose.Schema<IAppointment>({
    KOLId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kol', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true })

const AppointmentModel = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema)

export default AppointmentModel;