import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Goshen Auto Parts And More Ltd | Cars, Bikes & Tools",
  description:
    "Your one-stop shop for Premium Cars, High-End Bicycles, Professional Tools, and Global Importation Services in Pretoria. RMI Approved.",
  keywords: [
    "car dealership pretoria",
    "used cars gezina",
    "bicycles for sale",
    "professional tools",
    "importation service",
    "goshen auto parts",
    "rmi approved",
  ],
  authors: [{ name: "Goshen Auto Parts" }],
  openGraph: {
    title: "Goshen Auto Parts And More Ltd | Cars, Bikes & Tools",
    description:
      "We sell: CARS, BICYCLES, TOOLS AND IMPORTATION SERVICE IS AVAILABLE. Discover quality products and services.",
    type: "website",
    locale: "en_ZA",
    siteName: "Goshen Auto Parts And More Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goshen Auto Parts And More Ltd | Cars, Bikes & Tools",
    description:
      "We sell: CARS, BICYCLES, TOOLS AND IMPORTATION SERVICE IS AVAILABLE. Discover quality products and services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
