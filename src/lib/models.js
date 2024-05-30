import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    body: {
      type: String,
      maxlengh,
    },
  },
  { timestamps: true }
);
