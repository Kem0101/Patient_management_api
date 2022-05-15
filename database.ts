import { connect } from 'mongoose';

export const startConnection = async (): Promise<void> => {
  try {
    const db = await connect(process.env.MONGO_URL as string);
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
