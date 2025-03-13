import { DB_NAME } from '../constants.js';
import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to the database: ${connectionInstance.connection.name}`)
    } catch (error) {
        console.error('Error connecting to the database: ', error)
    }
}

export default connectDB