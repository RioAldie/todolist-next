import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig';
import bcrypt from 'bcrypt';
import { User } from '@/lib/models';
import { connectToDb } from '@/lib/utils';

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({
      username: credentials.username,
    });
    const isPasswordCorrect = user.password === credentials.password;

    if (!isPasswordCorrect) throw new Error('Wrong password!');

    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to login!');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
      }
      return session;
    },
  },
});
