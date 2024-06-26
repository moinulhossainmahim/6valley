import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import OfferNotification from "@/components/shared/offerNotification";
import Header from "@/components/layout/header";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "6Valley",
  description: "A Shopping website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <OfferNotification />
        <Header />
        {children}
      </body>
    </html>
  );
}
