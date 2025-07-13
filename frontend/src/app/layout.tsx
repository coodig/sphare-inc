import './globals.css';

import { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow m-5 p-5">
                {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
