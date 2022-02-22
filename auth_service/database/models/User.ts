import Model from './Model';
import { ConnectionInstance } from '../Connection';
import AvailableCollection from '../collections';

type UserEntity = { username: string; password: string; _id?: any };

export default class User extends Model<UserEntity> {
  public constructor(connection: ConnectionInstance) {
    super(AvailableCollection.USER, connection);
  }

  public async checkUserExistence(username: string): Promise<boolean> {
    return !!(await this.model.exists({ username }));
  }

  public async getUser(username: string): Promise<UserEntity> {
    return this.model.findOne({ username });
  }

  public async createUser(user: UserEntity): Promise<UserEntity> {
    return this.model.create(user);
  }
}
