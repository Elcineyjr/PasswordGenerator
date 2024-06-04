import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Password Generator',
  description: 'A Simple Password Generator by @Elcineyjr',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
