import './globals.css';

import { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 pt-12">
          <Sidebar />
          <main className="flex-grow p-4 ml-0 sm:ml-52"> {children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
