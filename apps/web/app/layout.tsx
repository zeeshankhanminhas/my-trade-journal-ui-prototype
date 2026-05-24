import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MY-Trade-Journal UI Prototype',
  description: 'Manual execution trading intelligence UI prototype'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
