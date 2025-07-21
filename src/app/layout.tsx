import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      </body>
    </html>
  );
}
