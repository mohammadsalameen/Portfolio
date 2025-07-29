import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Eng.Mohammad Salameen | Portfolio",
  description: "Portfolio of Eng. Mohammad Salameen, showcasing skills in web development, software engineering, and more using NextJS 15, Typescript and Tailwindcss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        {children}
      </body>
    </html>
  );
}
