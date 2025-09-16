// src/app/layout.js
import "./styles.scss";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import JsonLd from "./components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://smcfireandwater.com"),
  title: {
    default:
      "ServiceMaster by Compass | Disaster Restoration Spokane & Coeur d’Alene",
    template: "%s | ServiceMaster by Compass",
  },
  description:
    "24/7 water damage clean up, fire damage restoration, and mold remediation in Spokane, Spokane Valley & Coeur d’Alene. Call (509) 646-7488.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "ServiceMaster by Compass",
    type: "website",
    url: "https://smcfireandwater.com/",
    locale: "en_US",
    title: "Disaster Restoration Spokane WA | Water, Fire & Mold",
    description:
      "Top-rated restoration in Spokane & Coeur d’Alene: water, fire & smoke, and mold. 24/7 emergency service.",
    images: [
      {
        url: "https://smcfireandwater.com/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Water, fire & mold restoration in Spokane & Coeur d’Alene",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://smcfireandwater.com/og/default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f2c200" },
    ],
  },
  referrer: "strict-origin-when-cross-origin",
  // verification: { google: "XXXX", bing: "XXXX" }, // add when ready
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font performance */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/rfq2kdc.css" />
        {/* Preload default OG image (helps first share) */}
        <link rel="preload" as="image" href="/og/default.jpg" />
      </head>
      <body>
        {/* Global business identity (safe site-wide) */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://smcfireandwater.com/#localbusiness",
            name: "ServiceMaster by Compass",
            url: "https://smcfireandwater.com/",
            telephone: "+1-509-646-7488",
            logo: {
              "@type": "ImageObject",
              url: "https://smcfireandwater.com/logo.png",
            },
            image: "https://smcfireandwater.com/og/default.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Spokane",
              addressRegion: "WA",
              addressCountry: "US",
            },
            areaServed: [
              { "@type": "Place", name: "Spokane, WA" },
              { "@type": "Place", name: "Spokane Valley, WA" },
              { "@type": "Place", name: "Coeur d’Alene, ID" },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-509-646-7488",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: ["English"],
              },
              {
                "@type": "ContactPoint",
                telephone: "+1-509-646-7488",
                contactType: "24/7 emergency",
                areaServed: ["Spokane WA", "Coeur d’Alene ID"],
                availableLanguage: ["English"],
              },
            ],
            sameAs: [
              "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
              "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
              "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
              "https://www.instagram.com/servicemaster_by_compass",
              "https://g.co/kgs/PCuFHgp",
              "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
            ],
            hasMap: "https://g.co/kgs/PCuFHgp",
          }}
        />

        {/* Site-wide WebSite node (safe globally) */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://smcfireandwater.com/#website",
            url: "https://smcfireandwater.com/",
            name: "ServiceMaster by Compass",
            // If you have a /search route, uncomment below:
            // potentialAction: {
            //   "@type": "SearchAction",
            //   target: "https://smcfireandwater.com/search?q={search_term_string}",
            //   "query-input": "required name=search_term_string",
            // },
          }}
        />

        <Nav />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
