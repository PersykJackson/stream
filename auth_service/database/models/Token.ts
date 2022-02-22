import Model from './Model';
import { ConnectionInstance } from '../Connection';
import AvailableCollection from '../collections';

type TokenEntity = { userId: string; token: string; _id?: string };

export default class Token extends Model<TokenEntity> {
  public constructor(connection: ConnectionInstance) {
    super(AvailableCollection.TOKEN, connection);
  }

  public async checkIsTokenExists(token: string): Promise<boolean> {
    return !!(await this.model.exists({ token }));
  }

  public async setNewToken(userId: string, newToken: string): Promise<void> {
    await this.model.findOneAndDelete({ userId });
    await this.model.create({ userId, token: newToken });
  }
}
