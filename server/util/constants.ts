import dotenv from 'dotenv';
dotenv.config();

export const DEBUGGING = process.env.DEBUGGING === 'true';
export const PORT = parseInt(process.env.PORT || '') || 3000;