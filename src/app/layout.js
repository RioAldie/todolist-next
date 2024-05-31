import Navbar from '@/components/navbar/navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todolist',
  description: 'todolist simple web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
