import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: "Dacitos Technologies | Your Trusted IT Partner",
  description:
    "Dacitos Technologies builds premium web, mobile, and cloud software for ambitious businesses — from first line of code to global scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('dacitos-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-text-primary font-body antialiased">
        <div className="noise-layer" />
        <SmoothScroll />
        <Navbar />
        <ScrollProgress />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
