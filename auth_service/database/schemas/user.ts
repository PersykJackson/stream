import { Schema } from 'mongoose';

export default new Schema({
  username: { type: String },
  password: { type: String },
});
