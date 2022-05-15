import dotenv from 'dotenv';
import app from './app';
import { startConnection } from './database';

dotenv.config();

startConnection();
const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server on port ${PORT}`);
