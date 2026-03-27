import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITE 308 Login System",
  description: "Exam output login system built with Next.js and Supabase.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
