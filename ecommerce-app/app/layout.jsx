import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ecommerce App",
  description: "A simple ecommerce app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  );
}
