import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Xpert Panel Beaters | Professional Auto Body Repair & Parts Johannesburg",
  description:
    "Xpert Panel Beaters: Johannesburg's leading auto body parts supplier and panel beating experts. Quality repairs, spray painting, and premium body parts in Elcedes.",
  keywords: [
    "panel beaters johannesburg",
    "auto body parts supplier",
    "car repair johannesburg",
    "panel beating elcedes",
    "spray painting johannesburg",
    "Xpert Panel Beaters",
    "car body parts",
  ],
  authors: [{ name: "Xpert Panel Beaters" }],
  openGraph: {
    title: "Xpert Panel Beaters | Auto Body Parts & Repair Experts",
    description:
      "Professional panel beating and high-quality auto body parts in Johannesburg. Get your car back in showroom condition.",
    type: "website",
    locale: "en_ZA",
    siteName: "Xpert Panel Beaters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpert Panel Beaters | Auto Body Parts & Repair Experts",
    description:
      "Professional panel beating and high-quality auto body parts in Johannesburg.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Xpert Panel Beaters",
              "image": "/expert-log.png",
              "phone": "083 708 6050",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Reef Rd, Elcedes",
                "addressLocality": "Johannesburg",
                "postalCode": "1431",
                "addressCountry": "ZA"
              },
              "description": "Auto body parts supplier and professional panel beating services in Johannesburg.",
              "url": "https://xpertpanelbeaters.co.za"
            })
          }}
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
