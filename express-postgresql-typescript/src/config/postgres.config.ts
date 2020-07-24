import dotenv from 'dotenv';

dotenv.config();

export const connectConfig = {
    user: process.env.EXPRESS_DB_USER,
    host: process.env.EXPRESS_DB_HOST,
    database: process.env.EXPRESS_DB_DATABASE,
    password: process.env.EXPRESS_DB_PASSWORD,
    port: 5432,
}