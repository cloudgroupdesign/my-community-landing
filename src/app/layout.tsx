import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "@/components/ScrollRestoration";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Community — Українська ERP/CRM система",
  description:
    "Сучасна ERP/CRM платформа для українського бізнесу. Автоматизуйте процеси, збільшуйте продажі та управляйте командою в одній системі.",
  keywords: "ERP, CRM, SaaS, Україна, бізнес, автоматизація",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
