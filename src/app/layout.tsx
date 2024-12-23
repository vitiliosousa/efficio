'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"], weight: ["400"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-zinc-950`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
