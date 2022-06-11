import mongoose from 'mongoose';

export type ConnectionInstance = typeof mongoose;

export default class Connection {
  private static instance: Promise<ConnectionInstance>;

  public static getInstance(): Promise<ConnectionInstance> {
    if (!this.instance) {
      this.instance = mongoose.connect(process.env.DB_LINK, {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        authSource: 'admin',
      });
    }

    return this.instance;
  }
}
