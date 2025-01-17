import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionData = await mongoose.connect(`${process.env.MONGO}`)
        // console.log(`MongoDB connected with host: ${connectionData.connection.host}`)
        return connectionData.connection.host
    } catch (error) {
        // console.log('MongoDB connection error', error)
        throw error
    }
}
export default connectDB;