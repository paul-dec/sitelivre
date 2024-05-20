import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({ src: './Ramona-Bold.ttf' })


export const metadata: Metadata = {
  title: "Roro Cuistot",
  description: "J'ai sorti mon livre !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
