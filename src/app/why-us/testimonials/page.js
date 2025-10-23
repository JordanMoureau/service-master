// imports

import Reviews from "../../components/Reviews";

import JsonLd from "../../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/why-us/testimonials";
const title =
  "ServiceMaster by Compass Reviews | Spokane & Coeur d’Alene Restoration";
const description =
  "Read real customer reviews for water damage cleanup, fire & smoke restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. 24/7 trusted service.";
// app/why-us/testimonials/page.tsx

export const metadata = {
  title:
    "ServiceMaster by Compass Reviews | Spokane & Coeur d’Alene Restoration",
  description:
    "Read real customer reviews for water damage cleanup, fire & smoke restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. 24/7 trusted service.",
  keywords: [
    "fire damage restoration companies Spokane WA",
    "water damage clean up Spokane Valley WA",
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "mold abatement service Coeur d’Alene ID",
    "emergency flood cleanup Coeur d’Alene ID",
    "fire damage restoration service near me Spokane",
    "restoration mold removal CDA Idaho",
    "ServiceMaster reviews Spokane",
  ],
  alternates: {
    canonical: "https://smcfireandwater.com/why-us/testimonials",
  },
  openGraph: {
    title:
      "Customer Reviews — ServiceMaster by Compass | Spokane & Coeur d’Alene",
    description:
      "Read real customer reviews for water damage cleanup, fire & smoke restoration, and mold removal. 24/7 trusted service in Spokane & CDA.",
    url: "https://smcfireandwater.com/why-us/testimonials",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass — Reviews",
      },
    ],
    type: "article",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ServiceMaster by Compass Reviews | Spokane & Coeur d’Alene Restoration",
    description:
      "Real customer feedback on water, fire & mold restoration. 24/7 trusted service.",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// Build review entities from your array (static here for SSR/SEO)
const reviewEntities = [
  {
    "@type": "Review",
    reviewBody:
      "We've used this company twice and both times I cannot express how helpful they were. Professional, knowledgeable, and didn’t seem at all out to get every nickel and dime. Just fantastic!",
    name: "Just fantastic!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Mandy R." },
  },
  {
    "@type": "Review",
    reviewBody:
      "Staff (Erika?) was sincerely understanding, knowledgeable, and resourceful. She kept me organized and helped schedule my emergency situation with ease. Huge thanks to Elli and Duncan too—great work and even better attitudes.",
    name: "Thanks!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Jennifer L." },
  },
  {
    "@type": "Review",
    reviewBody:
      "I was very pleased with the work that was done. The guys were respectful and answered all my questions. I’d highly recommend Compass for any job—they were efficient and very pleasant to have in my home.",
    name: "Very respectful",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "J. Gregory" },
  },
];

// JSON-LD
const jsonLd = [
  // WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Customer Reviews",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description,
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
  },
  // Breadcrumb
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Why Us",
        item: "https://smcfireandwater.com/why-us",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Testimonials",
        item: canonical,
      },
    ],
  },
  // LocalBusiness with aggregateRating + reviews (eligible for review snippets)
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    image: "https://smcfireandwater.com/logo.png",
    logo: "https://smcfireandwater.com/logo.png",
    telephone: "+1-509-646-7488",
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
    },
    review: reviewEntities,
  },
  // Optional: ItemList of individual reviews (helps discovery)
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Customer Reviews",
    itemListElement: reviewEntities.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: r,
    })),
  },
];

export default function Testimonials() {
  return (
    <div className="home-container">
      <JsonLd data={jsonLd} />
      <div className="home-section">
        <div className="column">
          <h1>Reviews for ServiceMaster by Compass from people like you</h1>
          <button className="btn">
            <a href="https://g.page/r/Cb6foyHZIv_9EBE/review">Leave a review</a>
          </button>
          <Reviews />
        </div>
      </div>
    </div>
  );
}
