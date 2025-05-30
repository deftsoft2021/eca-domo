import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@fontsource/prompt/300.css'; // light
import '@fontsource/prompt/400.css'; // regular
import '@fontsource/prompt/500.css'; // medium
import '@fontsource/prompt/700.css'; // bold
// Supports weights 100-900
import '@fontsource-variable/roboto';

// sarabun font
import '@fontsource/sarabun';
// Supports weights 100-900

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-prompt ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
