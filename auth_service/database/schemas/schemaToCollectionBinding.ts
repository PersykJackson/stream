import { Schema } from 'mongoose';
import AvailableCollection from '../collections';
import token from './token';
import user from './user';

const schemaToCollectionBinding: Record<AvailableCollection, Schema> = {
  [AvailableCollection.TOKEN]: token,
  [AvailableCollection.USER]: user,
};

export default schemaToCollectionBinding;
