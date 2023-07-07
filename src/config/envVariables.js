import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const SECRET_KEY = process.env.SECRET_KEY;
export const MAIL = process.env.MAIL;
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
 