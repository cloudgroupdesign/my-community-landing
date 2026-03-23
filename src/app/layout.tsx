import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "@/components/ScrollRestoration";
import ModalProvider from "@/components/ModalProvider";
import { LangProvider } from "@/lib/lang";

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
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Runs synchronously before first paint — hides page if scroll needs restoring.
            Key is scoped by pathname so each page restores its own scroll position. */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var navType = (performance.getEntriesByType('navigation')[0] || {}).type;
              if (navType !== 'reload') return;
              var key = 'scrollY_' + window.location.pathname;
              var y = parseInt(sessionStorage.getItem(key) || '0', 10);
              if (y > 10) {
                document.documentElement.style.opacity = '0';
                document.documentElement.style.pointerEvents = 'none';
              }
            } catch(e) {}
          })();
        ` }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <LangProvider>
          <ScrollRestoration />
          <ModalProvider />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
