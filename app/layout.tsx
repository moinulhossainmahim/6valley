import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";

import OfferNotification from "@/components/offer-notification";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ReactQueryClientProvider from "@/utils/ReactQueryClientProvider";

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
        <ReactQueryClientProvider>
          <OfferNotification />
          <Header />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
