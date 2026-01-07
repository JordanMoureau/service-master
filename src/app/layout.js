// src/app/layout.js
import "./styles.scss";
import Script from "next/script";

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
        <Script id="gtm-init" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2JX7NCC');
          `}
        </Script>
        {/* Google Ads tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17529709564"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17529709564');
          `}
        </Script>
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2JX7NCC"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
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

        <Script
          nowprocket
          nitro-exclude
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="48e396d4-46ac-42ac-bfbc-5bf53a250f54"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gIjQ4ZTM5NmQ0LTQ2YWMtNDJhYy1iZmJjLTViZjUzYTI1MGY1NCI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        ></Script>

        <Nav />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
