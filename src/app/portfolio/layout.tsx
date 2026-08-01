import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Dacitos Technologies',
  description:
    "Explore Dacitos Technologies' successful projects across web development, mobile apps, cloud solutions, and custom software.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
