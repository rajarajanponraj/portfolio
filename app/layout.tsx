import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Modern fonts
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Rajarajan Ponraj | Flutter Developer & Engineer",
  description: "Portfolio of Rajarajan Ponraj, a passionate Flutter App Developer and Desktop Support System Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-sans min-h-screen bg-background text-foreground selection:bg-primary/20")}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
