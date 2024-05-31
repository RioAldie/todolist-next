import { Task } from './models';
import { connectToDb } from './utils';

export const getTasks = async () => {
  try {
    connectToDb();
    const tasks = await Task.find();
    return tasks;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch Tasks!');
  }
};
export const getTask = async (id) => {
  try {
    connectToDb();
    const task = await Task.findById(id);

    console.log(task);
    return task;
  } catch (error) {
    throw new Error('Failed to fetch Task!');
  }
};
