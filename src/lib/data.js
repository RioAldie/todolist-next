import { Task } from './models';
import { connectToDb } from './utils';

export const getTasks = async () => {
  try {
    connectToDb();
    const courses = await Task.find();
    return courses;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch Tasks!');
  }
};
