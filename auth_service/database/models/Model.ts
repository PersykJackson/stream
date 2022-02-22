import { Model } from 'mongoose';
import { ConnectionInstance } from '../Connection';
import AvailableCollection from '../collections';
import schemaToCollectionBinding from '../schemas/schemaToCollectionBinding';

export default abstract class AbstractModel<Entity> {
  protected readonly model: Model<Entity>;

  protected constructor(
    collection: AvailableCollection,
    connectionInstance: ConnectionInstance
  ) {
    const schema = schemaToCollectionBinding[collection];

    this.model = connectionInstance.model<Entity>(collection, schema);
  }
}
