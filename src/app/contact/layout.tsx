import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Dacitos Technologies',
  description:
    'Get in touch with Dacitos Technologies for a free consultation on your next web, mobile, or cloud project.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
