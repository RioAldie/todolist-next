'use server';

import { signIn } from '@/app/auth';
import { Task } from './models';
import { connectToDb } from './utils';
import { revalidatePath } from 'next/cache';

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
    return true;
  } catch (err) {
    if (err.message.includes('CredentialsSignin')) {
      return 'Wrong Credentials';
    }
    throw err;
  }
};
export const addNewTask = async (prevState, formData) => {
  const { title, body } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newCousre = new Task({
      title,
      body,
      date: new Date().toISOString(),
    });

    await newCousre.save();

    revalidatePath('/main');

    return true;
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deleteTask = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Task.findByIdAndDelete(id);

    revalidatePath('/main');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
export const editTask = async (prevState, formData) => {
  const { id, title, body } = Object.fromEntries(formData);

  try {
    connectToDb();

    const updateTask = await Task.findByIdAndUpdate(
      id,
      { title: title, body: body },
      { new: true }
    );

    if (!updateTask) {
      return { error: 'Something wrong' };
    }
    return true;
  } catch (error) {
    return { error: 'Something went wrong!' };
  }
};
