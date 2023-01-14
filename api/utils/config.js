import dotenv from 'dotenv';
dotenv.config();

export const DB_URI = process.env.DB_URI || 'mongodb+srv://user:user@cluster0.bkh8p.mongodb.net/?retryWrites=true&w=majority'; // TODO: Delete
export const SERVER_PORT = process.env.SERVER_PORT || 5000;