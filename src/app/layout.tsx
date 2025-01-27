import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/header/side-nav"
import { Header } from "@/components/header/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Bear",
  description: "The Bear is a LLM that will help you create recipes based on your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="grid h-screen w-full pl-[56px]">
            <SideNav />
            <div className="flex flex-col">
              <Header />
              {children}
            </div>
          </div>  
      </body>
    </html>
  );
}
