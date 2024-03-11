import mongoose from 'mongoose';
import { IKOL } from '../definitions';

const KOLSchema = new mongoose.Schema<IKOL>({
    alias: { type: String, required: true },
    categories: { type: [String], required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    socials: { type: Object, required: true },
    description: { type: String, required: true },
}, { timestamps: true })

const KOLModel = mongoose.models.KOL || mongoose.model<IKOL>('KOL', KOLSchema)

export default KOLModel;