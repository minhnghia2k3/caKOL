import mongoose from 'mongoose'


export const connectDB = async () => {
    const connection = {
        isConnected: 0
    }
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO_URI!)
        console.log('🚀 MongoDB Connected...')
        connection.isConnected = db.connections[0].readyState
    } catch (err: any) {
        throw new Error(err.message)
    }
}