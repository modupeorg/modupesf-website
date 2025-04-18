import { Toaster } from "sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { MenuProvider } from "@/components/Nav/MenuContext";
import { Navbar } from "@/components/Navbar";

const caros = localFont({
  src: [
    {
      path: "../public/fonts/cretype-Caros-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/cretype-Caros-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/cretype-Caros-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/cretype-Caros-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/cretype-Caros.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-caros",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modupe Sapential Foundation",
  description: "Justice, Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caros.variable}`}>
      <body
        className="font-caros min-h-screen overflow-x-hidden m-0 p-0 flex flex-col bg-[#f5f7fb] text-black"
        suppressHydrationWarning={true}
      >
        <MenuProvider>
          <Navbar />
          <main className="flex-grow-[1]">{children}</main>
          <Footer />
          <Toaster />
        </MenuProvider>
      </body>
    </html>
  );
}
