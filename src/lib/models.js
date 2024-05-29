import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    category: {
      type: String,
      maxlengh: 25,
    },
    image: {
      type: String,
      maxlengh: 25,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);
