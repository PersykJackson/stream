import { Schema } from 'mongoose';

export default new Schema({
  userId: { type: String },
  token: { type: String },
});
