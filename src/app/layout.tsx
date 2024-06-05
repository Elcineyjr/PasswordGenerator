import '@/style/globals.css';
import StyledComponentsRegistry from '@/style/registry';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
