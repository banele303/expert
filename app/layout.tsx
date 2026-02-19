import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  // ... metadata
  title: "~Spares City | Premier Motor Spares & Accessories South Africa",
  description:
    "~Spares City: South Africa's premier retail supplier of motor spares, accessories, batteries, tyres, and body parts. Quality parts for all vehicles in Bramley, Johannesburg.",
  // ... rest of metadata
};

// ... Metadata export ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ... existing head links ... */}
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
              "name": "~Spares City",
              "image": "/expert-log.png",
              "phone": "+27 82 962 4108",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "593 Louis Botha Ave, Bramley",
                "addressLocality": "Johannesburg",
                "postalCode": "2018",
                "addressCountry": "ZA"
              },
              "description": "Premier retail supplier of motor spares, accessories, batteries, tyres, and body parts for all vehicles in South Africa.",
              "url": "https://xpertautoparts.co.za"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
