import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Grocery eccormerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.variable} antialiased`}>{children}</body>
    </html>
  );
}
