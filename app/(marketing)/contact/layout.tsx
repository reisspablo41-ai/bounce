import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description: 'Have questions or ready to book? Reach out to Your Very Own Bounce House Party Rental for the best event rentals in the DFW Metroplex.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
