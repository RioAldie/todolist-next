import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlengh: 25,
    required: true,
  },
  password: {
    type: String,
    maxlengh: 125,
    required: true,
  },
});
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    body: {
      type: String,
      maxlengh: 500,
    },
  },
  { timestamps: true }
);
export const User =
  mongoose.models?.User || mongoose.model('User', userSchema);

export const Task =
  mongoose.models?.Task || mongoose.model('Task', taskSchema);
