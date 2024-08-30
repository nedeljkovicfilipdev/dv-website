import {ReactNode} from 'react';
import './globals.css';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'HJKASdhkjhkasd',
  description: 'Default description for my site.',
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}
