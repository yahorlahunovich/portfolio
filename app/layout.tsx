import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Egor Lagunovich",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-mainGreen text-mainWhite">
        <Navbar />
        <main className="h-screen duration-300 scroll-smooth">
          {" "}
          {children}
        </main>
      </body>
    </html>
  );
}
