import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import TanstackContexts from './tanstack-context';

const fontSans = Outfit({
  // Google Font
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
});

const geistMono = localFont({
  // Local Font
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  // Metadata
  title: 'Next 14 - TypeScript Boilarplate',
  description: 'Configured by <tam11a>',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(fontSans.className, geistMono.variable, `antialiased`)}
      >
        <TanstackContexts>
          <AntdRegistry>{children}</AntdRegistry>
        </TanstackContexts>
      </body>
    </html>
  );
}
