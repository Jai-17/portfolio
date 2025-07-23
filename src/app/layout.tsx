import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const against = localFont({
  src: "./fonts/Against.ttf",
  variable: "--font-against",
  display: "swap",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jai Madhukar",
  description: "Portfolio website of Jai Madhukar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} ${against.variable} antialiased bg-black`}
      >
        {children}
        <Toaster theme="dark" swipeDirections={["bottom"]} />
      </body>
    </html>
  );
}
