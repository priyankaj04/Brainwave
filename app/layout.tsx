import { ClerkProvider } from "@clerk/nextjs";
import CrispProvider from "@/components/crisp-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainwave",
  description: "An AI SAAS platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ModalProvider />
        <ToasterProvider />
        <CrispProvider />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
