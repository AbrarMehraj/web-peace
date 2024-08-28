import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peace - Enjoy Your Prayer Time Without Interruptions",
  description: "Experience tranquility in your prayer moments. Peace app seamlessly activates Do Not Disturb (DND) during your prayer times, creating a distraction-free space for deeper reflection and spiritual connection.",
  icons: {
    icon: '/app-icon.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
