import mongoose from 'mongoose';

export type ConnectionInstance = typeof mongoose;

export default class Connection {
  private static instance: Promise<ConnectionInstance>;

  public static getInstance(): Promise<ConnectionInstance> {
    if (!this.instance) {
      this.instance = mongoose.connect(process.env.DB_LINK, {
        user: 'w1ndows1',
        pass: '25121996',
        authSource: 'admin',
      });
    }

    return this.instance;
  }
}
