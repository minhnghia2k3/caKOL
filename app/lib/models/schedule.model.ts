import mongoose from 'mongoose';
import { ISchedule } from '../definitions';

export const ScheduleSchema = new mongoose.Schema<ISchedule>({
    KOLId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kol', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
}, { timestamps: true })

const ScheduleModel = mongoose.models.Schedule || mongoose.model<ISchedule>('Schedule', ScheduleSchema)
export default ScheduleModel;